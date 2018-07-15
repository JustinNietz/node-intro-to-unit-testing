// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

	//test normal case
	it('should return "fizz-buzz" if number is divisible by 3 and 5', function(){
		[15,30,45].forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		})
	});

	it('should be "fizz" if number is divisible by 3', function(){
		[3,6,9].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('fizz');
		})
	});

	it('should be "buzz" if numnber is divisible by 5', function(){
		[5,10,20].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal('buzz');
		})
	});

	it('should return a number if not divisible by 3 or 5', function(){
		[1,2,4].forEach(function(input){
			expect(fizzBuzzer(input)).to.equal(input);
		})
	});

	it('produce error if not a number', function(){
		const badInputs = ['seven', false, [1,2,3]];
		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		})
	});
});