var http = require('http');
var express = require('express');
var fs = require('fs');
var ejs = require('ejs');
var app=express();
var server = http.createServer(app);


app.use(express.static(__dirname));

app.use('/list',function(request,response){
	fs.readFile('list.ejs','utf-8',function(error, data){
		if(error){
			consol.log('읽기 실패',error);
		}
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(ejs.render(data));
	});
});


server.listen(8888,function(){
	console.log('웹서버 가동중...');
})