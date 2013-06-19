Browser = require("zombie");

describe("decomposition", function() {

	var home = "http://localhost:5000/index.html";
	var browser = new Browser();

	it("displays the decomposition of the input number", function(done) {
		browser.visit(home).
			then(function () {
				browser.fill("#number", "42")
					   .clickLink("#decompose");
			}).
			then(function() {
				expect(browser.text("#decomposition")).toEqual("42 = 2 x 3 x 7");
				done();
			}).
			fail(function(error) {
				expect(error.toString()).toBeNull();
				done();
			});
	});		
	
});
		
		
