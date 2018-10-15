class Backstage extends Item {
    constructor(data){
        super(data.name, data.sellIn, data.quality);
    }

    processItem() {
        this.sellIn--;
        if (this.sellIn >= 10) {
            this.quality++;
        } else if (this.sellIn >= 5) {
            this.quality += 2;
        } else if (this.sellIn >= 0) {
            this.quality += 3;
        } else {
            this.quality = 0;
        }
        if (this.quality > 50) {
            this.quality = 50;
        }
    }
}
