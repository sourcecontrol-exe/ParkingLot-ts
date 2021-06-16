import * as http from 'http';
const server = http.createServer(function(req,res){
	res.write("hello world");
	res.end()
})
server.listen(8000);