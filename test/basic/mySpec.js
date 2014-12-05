/**
 * Created by amalia on 05/12/2014.
 */
describe("FizzBuzz", function () {
    it("should be Fizz when number is divisible by 3", function () {
        expect(fizzBuzz(3)).toEqual('Fizz');
    })

    it("should be Fizz when number is divisible by 3", function () {
        expect(fizzBuzz(9)).toEqual('Fizz');
    })

    it("should be Buzz when number is divisible by 5", function () {
        expect(fizzBuzz(5)).toEqual('Buzz');
    })

    it("should be FizzBuzz if number is multiply 5 and 3", function () {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    })

    it("should be number if number is 1", function () {
        expect(fizzBuzz(1)).toEqual(1);
    })

    it("should be number if number is 2", function () {
        expect(fizzBuzz(2)).toEqual(2);
    })
})




