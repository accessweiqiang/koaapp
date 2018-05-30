var Koa = require('koa');
var http = require('http');
var https = require('https');
var fs = require('fs');
var enforceHttps = require('koa-sslify');
 
var app = new Koa();
 
// Force HTTPS on all page
app.use(enforceHttps());
 
// index page
app.use(ctx => {
  ctx.body = "hello world from " + ctx.request.url;
});
 
// SSL options
/*var options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}*/

var options = {
    key: fs.readFileSync('./ssl/1529098599973.key'),
    cert: fs.readFileSync('./ssl/1529098599973.pem')
};
 
// start the server
http.createServer(app.callback()).listen(80);
https.createServer(options, app.callback()).listen(443);