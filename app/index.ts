import * as http from 'http';
const server = http.createServer(function(req,res){
	res.write("hello world");
	res.end()
	console.log("hello this is server ruinning");
})
server.listen(8000);