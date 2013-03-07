var request = require('request');
var fs = require('fs');
var serving = require('../public/serving');

describe("Server", function() {

	var server;
	var folder = 'test-folder';
	
	beforeEach(function() {	
		if (!fs.existsSync(folder)) fs.mkdirSync(folder);			
		server = require('http').createServer(serving(folder)).listen(5000, 'localhost');		
	});
	afterEach(function() {
		server.close();
	});
	
	it("is alive", function(done) {
		request("http://localhost:5000", function(error, response, body) {
			expect(error).toBe(null);
			done();
		});
	});
	
	it("serves the files from the given folder", function(done) {
		var content = 'what a wonderfull world';
		fs.writeFileSync(folder + '/a-file', content);
		
		request("http://localhost:5000/a-file", function(error, response, body) {
			expect(body).toEqual(content);
			done();
		});
	});
	
	it("serves index.html file by default", function(done) {
		var content = 'content of index.html';
		fs.writeFileSync(folder + '/index.html', content);
		
		request("http://localhost:5000", function(error, response, body) {
			expect(body).toEqual(content);
			done();
		});
	});
	
	it("returns 404 when file does not exist", function(done) {
		fs.unlink(folder + '/a-missing-file');
		
		request("http://localhost:5000/a-missing-file", function(error, response, body) {
			expect(response.statusCode).toEqual(404);
			done();
		});
	});
	
	it("returns 200 when file does exist", function(done) {
		fs.writeFileSync(folder + '/a-file', 'content');
		
		request("http://localhost:5000/a-file", function(error, response, body) {
			expect(response.statusCode).toEqual(200);
			done();
		});
	});
	
	it("content-type is text/html for .html files", function(done) {
		fs.writeFileSync(folder + '/index.html', 'content');

		request("http://localhost:5000/index.html", function(error, response, body) {
			expect(response.headers['content-type']).toBe('text/html');
			done();
		});
	});
	
	it("content-type is text/plain for files without extensions", function(done) {
		fs.writeFileSync(folder + '/a-file', 'content');

		request("http://localhost:5000/a-file", function(error, response, body) {
			expect(response.headers['content-type']).toBe('text/plain');
			done();
		});
	});
});