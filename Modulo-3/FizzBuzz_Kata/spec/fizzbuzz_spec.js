describe("FizzBuzz", function() {

    describe("FizzBuzz Run'", function () {
        const fizzBuzz = new Fizzbuzz();
        fizzBuzz.run()

      it("Should do something", function () {
          expect(fizzBuzz.numeros[2].getNumero()).toEqual('Fizz');
          expect(fizzBuzz.numeros[4].getNumero()).toEqual('Buzz');
          expect(fizzBuzz.numeros[89].getNumero()).toEqual('FizzBuzz');
          expect(fizzBuzz.numeros[1].getNumero()).toEqual(2);
      })
    })

});
