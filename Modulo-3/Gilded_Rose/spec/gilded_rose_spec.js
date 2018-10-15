describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([{name: "foo",sellIn: 0,quality: 0}]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  describe("Aged Brie", function() {
    const gildedRose = new Shop([{name: "Aged Brie",sellIn: 2,quality: 0}]);
    const items = gildedRose.updateQuality();
    it("decrease the sellIn", function() {
      expect(items[0].name).toEqual("Aged Brie");
      expect(items[0].sellIn).toEqual(1);
    });
    it("increase the quality", function() {
      expect(items[0].quality).toEqual(1);
    });
    it("day 2", function (){
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(2);
    });
    it("day 3", function (){
      gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(4);
    });
  });

  describe("TAFKL80ETC concert tickets", function() {
    it("reducir sellIn en 1 y aumentar calidad en 1", function() {
      const gildedRose = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert',sellIn: 15,quality: 20}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(14);
      expect(items[0].quality).toEqual(21);
    });
    it("reducir sellIn en 1 y aumentar calidad en 2", function() {
      const gildedRose = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert',sellIn: 10,quality: 20}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].quality).toEqual(22);
    });
    it("reducir sellIn en 1 y aumentar calidad en 3", function() {
      const gildedRose = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert',sellIn: 5,quality: 20}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(4);
      expect(items[0].quality).toEqual(23);
    });
    it("tickets are now worthless", function() {
      const gildedRose = new Shop([{name: 'Backstage passes to a TAFKAL80ETC concert',sellIn: 0,quality: 20}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });
  });

  describe("Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([{name: "Sulfuras, Hand of Ragnaros",sellIn: 0,quality: 80}]);
    const items = gildedRose.updateQuality();
    it("should not change", function() {
      expect(items[0].name).toEqual("Sulfuras, Hand of Ragnaros");
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(80);
    });
  });

  describe("Conjured Mana Cake", function() {
    it("Should degrade by 2", function() {
      const gildedRose = new Shop([{name: "Conjured Mana Cake",sellIn: 3,quality: 6}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Conjured Mana Cake");
      expect(items[0].sellIn).toEqual(2);
      expect(items[0].quality).toEqual(4);
    });

    it("Should degrade by 4", function() {
      const gildedRose = new Shop([{name: "Conjured Mana Cake",sellIn: 0,quality: 6}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Conjured Mana Cake");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(2);
    });
  });

  describe("Normal item", function() {
    it("should degrade normally", function() {
      const gildedRose = new Shop([{name: "Normie Sword",sellIn: 20,quality: 30}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Normie Sword");
      expect(items[0].sellIn).toEqual(19);
      expect(items[0].quality).toEqual(29);
    });

    it("should degrade twice as fast", function() {
      const gildedRose = new Shop([{name: "Normie Sword",sellIn: 0,quality: 30}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Normie Sword");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(28);
    });

    it("should not go lower than 0", function() {
      const gildedRose = new Shop([{name: "Normie Sword",sellIn: 0,quality: 1}]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Normie Sword");
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    });
  });

});
