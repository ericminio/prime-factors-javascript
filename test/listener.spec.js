var $ = require('jquery');
var decompose = require('../public/js/listener.js');

describe("listener", function(){

	it("can be instantiated", function() {
		new DecompositionListener();
	});

	it("accepts a decomposer", function() {
		new DecompositionListener().decomposer = {};
	});
	
	describe("interactions with decomposer", function() {
		var listener = new DecompositionListener();;
		
		beforeEach(function() {
			$("<input id=number />").appendTo("body");
			$("<span id=decomposition ><span>").appendTo("body");
		});
		
		it("uses decomposer result", function() {
			$("#number").val("4");
			listener.decomposer = function(input) { return [222]; };
			listener.decompose();
			
			expect($("#decomposition").text()).toEqual("4 = 222");
		});
		
	});

	it("uses primeFactors decomposer by default", function() {
		expect(new DecompositionListener().decomposer).toEqual(require('../public/js/primeFactors.js'));
	})
});
