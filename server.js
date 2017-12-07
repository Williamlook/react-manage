/*const http=require('http');
const fs=require('fs');

const server=http.createServer(function(require,response){
	console.log(require.method+':'+require.url);
	response.writeHead(200,{'Content-Type':'text/html'});
	const rs=fs.createReadStream('users.json','utf-8');
    rs.pipe(response);
})*/

const express=require('express')
const path=require('path')
const ejs=require('ejs')

const app=express()

app.get('/',function(require,response){
	response.render('index')
})
app.get('/manage',function(require,response){
	response.render('index')
})


// 设置views路径和模板
app.set('views', './view');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// 静态文件配置
app.use('/src', express.static(path.join(__dirname, 'src')));

// 启动一个服务，监听从8888端口进入的所有连接请求
const server = app.listen(8888, function(){
    const host = server.address().address;
    const port = server.address().port;
    console.log('Listening at http://%s:%s', host, port);
}); 