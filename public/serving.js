var fs = require('fs');

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1;
}

servingFolder = function(folder) {
	
	return function (request, response) {
		response.setHeader("Content-Type", "text/plain");
		if (request.url.endsWith(".html")) {
			response.setHeader("Content-Type", "text/html");
		}
		var candidate = folder + (request.url == '/' ? '/index.html' : request.url);		
		if (fs.existsSync(candidate) && (fs.statSync(candidate).isFile())) {
			response.write(fs.readFileSync(candidate));			
		} else {
			response.writeHead(404);
		}
		response.end();			
	};
};

module.exports = servingFolder;