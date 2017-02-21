const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return FizzBuzz when num % 15 is 0', function(){
    const normalCases = [15, 45, 90];
    normalCases.forEach(x => {
      const answer = fizzBuzzer(x);
      answer.should.equal('fizz-buzz');
    });
  });

  it('should return fizz when num % 3 is 0', function() {
    const normalCases = [3, 9, 12];
    normalCases.forEach(x => {
      const answer = fizzBuzzer(x);
      answer.should.equal('fizz');
    })
  });
});





// describe('fizzBuzzer', function(){
//   it('should throw an error if the input is not a number', function(){
//     const answer = fizzBuzzer([4, 4]);
//     answer.should.throw(Error);
//   });
// });
