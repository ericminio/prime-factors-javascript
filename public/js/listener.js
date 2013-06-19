var $ = $ || require('jquery');
var primeFactorsOf = primeFactorsOf || require('./primeFactors.js');

DecompositionListener = function() {
	
	return {
		
		decomposer : primeFactorsOf,
		
		decompose : function() {
			var input = $("#number").val();
			var decomposition = this.decomposer( input );
			$("#decomposition").text( input + " = " + decomposition.join(" x ") );
		}
	};
};

var module = module || {};
module.exports = DecompositionListener;