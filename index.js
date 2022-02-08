const express = require("express");
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.static("url"));

app.get("/", (req, res) => {
	if (req.query.url) {
		console.log(req.query)
		var url = req.query.url
		let str = Math.random().toString(36).substring(7);

		function buildHtml(req) {
			var redir = url;
			if (url.includes('https://') || url.includes('http://')) {
				return `<meta http-equiv="refresh" content="0;url=${redir}" />`;
			} else if (!url.includes('https://') || !url.includes('http://')) {
				return `<meta http-equiv="refresh" content="0;url=https://${redir}" />`;        
			}
		};

		var fileName = `${__dirname}/url/${str}.html`;
		var stream = fs.createWriteStream(fileName);
		stream.once('open', function(fd) {
			var html = buildHtml();
			res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/PerryPal21/perry.css@master/perry.css">
  <title>Uploaded</title>
</head>
<body>
<div class="container">
<style>
input {
        width: 100%;
}
</style>
  <p>Link has been shortened</p>
    <input type="text" readonly="" value="https://${process.env.BASEURL}/${str}.html">
 </div>
</body>
</html>`)
			stream.end(html);
		})} else { res.sendFile(path.join(__dirname+'/index.html')) }
});

const listener = app.listen(3001, () => {
	console.log("Your app is listening on port " + listener.address().port);
});

