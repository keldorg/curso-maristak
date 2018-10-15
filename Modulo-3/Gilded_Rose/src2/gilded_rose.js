const classes = {
    'Aged Brie': AgedBrie,
    'Sulfuras, Hand of Ragnaros': Sulfuras,
    'Backstage passes to a TAFKAL80ETC concert': Backstage
}
class Shop {
    constructor(items=[]){
        this.items = [];
        for (let item of items) {
            let Clase
            if (item.name.includes('Conjured')) {
                Clase = ConjuredItem
            } else {
                Clase = (classes[item.name] ? classes[item.name]: NormalItem)
            }
            this.items.push(new Clase(item))
        }
    }
    updateQuality() {
        for (var i = 0; i < this.items.length; i++) {
            this.items[i].processItem()
        }

        return this.items;
    }

}
