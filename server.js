var connect = require('connect');
connect.createServer(
    connect.static('./data')
).listen(8080);