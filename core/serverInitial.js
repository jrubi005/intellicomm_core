var express = require('express'),
    app = express(),
    port =  process.env.PORT || 13450;
    
app.listenPort(port);

console.log('Listen up - API Server started in: ' + port);
