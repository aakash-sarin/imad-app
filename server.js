var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    article_one: {
    title: 'Article One | Aakash Sarin',
    heading: 'Article One',
    date: 'March 02, 2018',
    content: `
                <p>
                    Welcome to Article One. This is an experiment to help understand the strucutre of web pages.
                </p>`
},
    article_two: {
        title: 'Article Two | Aakash Sarin',
        heading: 'Article Two',
        date: 'March 02, 2018',
        content: `
            <p>
                Welcome to Article Two. This is the second experiment to help understand the strucutre of web pages. Click on Home to return.
            </p>`
    },
    article_three: {
        title: 'Article Three | Aakash Sarin',
        heading: 'Article Three',
        date: 'March 02, 2018',
        content: `
            <p>
                Welcome to Article Three. This is the third experiment to help understand the strucutre of web pages. Click on home to return.
            </p>`
    },
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
            <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-deivce-width, initial-scale=1"/>
               <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class=container>
                <div>
                    <a href=/>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
                </div>
            </body>
        </html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter= 0;
app.get('/counter', function(req, res){
    counter = counter +1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
