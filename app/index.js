var http = require('http');

http.createServer((req,res)=>{
	res.write("heloo")
	res.end();
}).listen(8000);