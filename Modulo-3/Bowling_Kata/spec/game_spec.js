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

});
