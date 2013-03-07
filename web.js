Server = require("./public/server.js");
var servingFolder = require("./public/serving");

var server = new Server(servingFolder('public'));
server.start();