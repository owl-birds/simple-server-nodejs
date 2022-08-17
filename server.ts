// source : https://medium.com/swlh/how-to-build-a-javascript-web-server-from-scratch-using-only-node-js-a4e21a9abc88
const http = require("http");

// vars
const PORT = 3000;

// 
// request and response parameter, handle the "request" to and the "response" from, our server
// HTTP header is essentially a set of key/value pairs that provides information about a "request" or a "response", depending if it's on the "client" side or the "server" side.
http.createServer((request, response)=>{
	response.setHeader("Content-Type", "text/plain");
	response.end("HELLO WORLD!");
}).listen(PORT);