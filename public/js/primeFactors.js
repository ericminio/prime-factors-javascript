primeFactorsOf = function(input) {
	divisor = 2;
	while (divisor <= input) {
		if (input % divisor == 0) {
			return [divisor].concat( primeFactorsOf(input/divisor) );
		}
		divisor++;
	}
	return [];
}

var module = module || {};
module.exports = primeFactorsOf;
