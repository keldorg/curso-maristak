var assert = require('chai').assert;
const math = require("./../src/math")

describe("Math library",function(){

    describe("Add function",function(){
        it('should add two numbers correctly',function(){
            const result = math.add(3,2)
            assert.equal(5, result);
        })
    });

});