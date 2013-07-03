var cheerio = require('cheerio');

describe("index.html", function() {

	var page;

	beforeEach(function() {	
		page = cheerio.load(require('fs').readFileSync('./public/index.html').toString());
	});
	
	describe("page's title", function() {
	
		it("is 'prime factors decomposer'", function() {			
			expect(page('title').text()).toBe('Prime factors decomposer');
		});
	});
	
	describe("page's element", function() {
		
		it("decomposition's result placeholder is ready", function() {
			expect(page('#decomposition').html()).not.toBeNull();
		});		

		it("decomposition's placeholder shows an example of decomposition", function() {
			expect(page('#decomposition').text()).toBe('30 = 2 x 3 x 5');
		});		

		it("invitation is visible", function() {
			expect(page('#invitation').html()).not.toBeNull();
		});
		
		it("input field is visible", function() {
			expect(page('#number').html()).not.toBeNull();
		});
		
		it("decomposition trigger is visible", function() {
			expect(page('#decompose').html()).not.toBeNull();
		});
		
		it("displays a 'fork me on github.com' banner", function() {
			expect(page('#github').attr('href')).toBe('https://github.com/ericminio/prime-factors-javascript');
		});
	});
		
});