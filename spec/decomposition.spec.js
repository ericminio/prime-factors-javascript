var request = require('request');
Browser = require("zombie");
Server = require("../public/server");
var servingFolder = require("../public/serving");

describe("decomposition", function() {

	var home = "http://localhost:5000/index.html";
	var browser = new Browser();
	var server = new Server(servingFolder('public'));
	
	beforeEach(function() {	
		server.start();
	});
	
	afterEach(function() {
		server.stop();
	});

	it("offers to display the prime factors of a number", function(done) {
		browser.visit(home, function () {
			browser.fill("#number", "30");
			browser.clickLink("#decompose", function() {
				expect(browser.text("#decomposition")).toEqual("30 = 2 x 3 x 5");
				done();
			});
		});
	});	
	
	it("content-type is text/html when serving a .html file", function(done) {
		request("http://localhost:5000/index.html", function(error, response, body) {
			expect(response.headers['content-type']).toBe('text/html');
			done();
		});
	});	

});
		
		
