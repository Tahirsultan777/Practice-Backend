const http = require('http')
const server = http.createServer(function(req, res){
    res.end("hello Tahir Sultan");
})
 server.listen(3000);