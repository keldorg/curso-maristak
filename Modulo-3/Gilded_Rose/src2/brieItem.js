class AgedBrie extends Item {
    constructor(data){
        super(data.name, data.sellIn, data.quality);
    }

    processItem() {
        this.sellIn--;
        if (this.sellIn >= 0) {
            this.quality++;
        } else {
            this.quality += 2;
        }
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}
