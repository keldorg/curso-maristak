var assert = require('chai').assert;
const math = require("./../src/math")

describe("Math library",function(){

    describe("Add function",function(){
        it('should add two numbers correctly',function(){
            const result = math.add(3,2)
            assert.equal(result, 5)
        })
    });

    describe("Is bigger than function", function() {
        it('should return true if number is 21', function() {
            const result = math.isBiggerThan10(21)
            assert.equal(result, true)
        })

        it('should return false if number is 7', function() {
            const result = math.isBiggerThan10(7)
            assert.equal(result, false)
        })

        it('should return false if number is 10', function() {
            const result = math.isBiggerThan10(10)
            assert.equal(result, false)
        })
    })

});