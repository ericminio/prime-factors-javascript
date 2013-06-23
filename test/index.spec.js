var Browser = require("zombie");
var serving = require('../public/js/serving');
var Server = require('../public/js/server');

describe("index.html", function() {

	var page = "http://localhost:5000/index.html";

	var server = new Server(serving('public'));
	var browser = new Browser();

	beforeEach(function() {	
		server.start();
	});
	
	afterEach(function() {
		server.stop();
	});
	
	describe("page's title", function() {
	
		it("is 'prime factors decomposer'", function(done) {
			browser.visit(page).then(function () {
				expect(browser.text("title")).toEqual("Prime factors decomposer");
				done();
			});
		});
	});
	
	describe("page's element", function() {
		
		it("decomposition's result placeholder is ready", function(done) {
			browser.visit(page).then(function () {
		      	expect(browser.query("#decomposition")).toBeDefined();
				done();
			});
		});
		
		it("decomposition placeholder shows an example of decomposition", function(done) {
			browser.visit(page).then(function () {
		      	expect(browser.text("#decomposition")).toEqual("30 = 2 x 3 x 5");
				done();
			});
		});

		it("invitation is visible", function(done) {
			browser.visit(page).then(function () {
		      	expect(browser.query("#invitation")).toBeDefined();
				done();
			});
		});

		it("input field is visible", function(done) {
			browser.visit(page).then(function () {
		      	expect(browser.query("#number")).toBeDefined();
				done();
			});
		});

		it("decomposition's trigger is visible", function(done) {
			browser.visit(page).then(function () {
		      	expect(browser.query("#decompose")).toBeDefined();
				done();
			});
		});
	
		it("displays a 'fork me on github.com' banner", function(done) {
			browser.visit(page).
				then(function () {
		      		expect(browser.link("#github").href).toEqual("https://github.com/ericminio/prime-factors-javascript");
					done();
				});
		})
	});
		
});