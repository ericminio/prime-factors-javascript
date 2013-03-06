var Server = require('../public/server.js');

describe("Server", function() {

	it("can be instantiated", function(done) {
		expect(new Server()).toNotBe(null);
		done();
	});
	
});