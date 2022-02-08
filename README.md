# Janky URL Shortener
You must be wondering **why**. One day, I wanted to host my own url shortening service but I felt I just didn't a lot of bells and whistles

Well that and the fact that ~~I didn't want to install PHP~~

## How
At its core, all the app is is doing is generating an html file for every shortened URL and then sending the link to the HTML file. The HTML files contain `meta` tags to redirect the user to the desired destination, making the app very simple in nature.

## Setup
Install the dependencies:

`npm install express`

Create the file directory:

`mkdir url`

Start the app:

`node .`
