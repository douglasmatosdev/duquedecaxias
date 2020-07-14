const path = require('path');
const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Start server
const server = app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});



// CÓDIGO USADO INICIALMENTE
//
// var express = require('express');
// var app = express()
//    .use(express.static(__dirname + '/public'))
//    .listen(process.env.PORT || 5000);