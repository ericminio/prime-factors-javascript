Browser = require("zombie");

describe("decomposition", function() {

	var home = "http://localhost:5000/index.html";
	var browser = new Browser();
	
	it("offers to display the prime factors of a number", function(done) {
		browser.visit(home, function () {
			browser.fill("#number", "30");
			browser.clickLink("#decompose", function() {
				expect(browser.text("#decomposition")).toEqual("30 = 2 x 3 x 5");
				done();
			});
		});
	});		

});
		
		
