describe("Gilded Rose", function() {


    describe("Item 'Aged brie'", function () {
      const gildedRose = new Shop([ {
          name: 'Aged Brie',
          sellIn: 10,
          quality: 10
      } ]);
      const items = gildedRose.updateQuality();

      it("Debería de actualizar el producto correctamente", function () {
          expect(items[0].name).toEqual("Aged Brie");
          expect(items[0].sellIn).toEqual(9);
          expect(items[0].quality).toEqual(11);
      })
    })

    describe("Item '+5 Dexterity Vest'", function () {
        const gildedRose = new Shop([ {
            name: '+5 Dexterity Vest',
            sellIn: 10,
            quality: 10
        } ]);
        const items = gildedRose.updateQuality();

        it("Debería de actualizar el producto correctamente", function () {
            expect(items[0].name).toEqual("+5 Dexterity Vest");
            expect(items[0].sellIn).toEqual(9);
            expect(items[0].quality).toEqual(9);
        })
    })

    describe("Item 'Sulfuras, Hand of Ragnaros'", function () {
        const gildedRose = new Shop([ {
            name: 'Sulfuras, Hand of Ragnaros',
            sellIn: 0,
            quality: 80
        } ]);
        const items = gildedRose.updateQuality();

        it("Debería de actualizar el producto correctamente", function () {
            expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
            expect(items[0].sellIn).toEqual(0);
            expect(items[0].quality).toEqual(80);
        })
    })

});
