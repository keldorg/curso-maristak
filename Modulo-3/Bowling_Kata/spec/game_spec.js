describe("Bowling Game", function() {

    describe("Bowling game'", function () {
      const game = new Game();
      for(let i = 0; i<20; i++) {
          game.roll(0)
      }

      it("Should score 0 points", function () {
          expect(game.score()).toEqual(0);
      })
    })

    describe("Bowling game todas las tiradas a 1'", function () {
        const game = new Game();
        for(let i = 0; i<20; i++) {
            game.roll(1)
        }

        it("Should score 20 points", function () {
            expect(game.score()).toEqual(20);
        })
    })

    describe("Bowling game una tirada de 10 puntos'", function () {
        const game = new Game();
        game.roll(4)
        game.roll(6)
        game.roll(4)
        for(let i = 0; i<17; i++) {
            game.roll(1)
        }

        it("Should score 35 points", function () {
            expect(game.score()).toEqual(35);
        })
    })

    describe("Bowling game un strike'", function () {
        const game = new Game();
        game.roll(10)
        game.roll(6)
        game.roll(3)
        for(let i = 0; i<16; i++) {
            game.roll(1)
        }

        it("Should score 44 points", function () {
            expect(game.score()).toEqual(44);
        })
    })

    describe("Bowling game dos strike'", function () {
        const game = new Game();
        game.roll(10)
        game.roll(10)
        game.roll(3)
        for(let i = 0; i<15; i++) {
            game.roll(1)
        }

        it("Should score 55 points", function () {
            expect(game.score()).toEqual(55);
        })
    })

});
