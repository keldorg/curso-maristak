class NormalItem extends Item {
    constructor(data){
        super(data.name, data.sellIn, data.quality);
    }

    processItem() {
        this.sellIn--;
        this.quality = (this.sellIn < 0 ? this.quality - 2: this.quality - 1)
        this.quality = (this.quality < 0 ? 0 : this.quality)
    }
}
