function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.nameIsNormal = function (){
  this.quality = this.quality - 1;
  this.sellIn = this.sellIn - 1;
  if (this.sellIn <= 0){
    this.quality = this.quality - 1;
  }
  if (this.quality === -1){
    this.quality = this.quality + 1;
  }
}

GildedRose.prototype.nameIsAgedBrie = function (){
  this.quality = this.quality + 1;
  this.sellIn = this.sellIn - 1;
  if (this.sellIn <= 0){
    this.quality = this.quality + 1;
  }
  if (this.quality > 50){
    this.quality = 50;
  }
}

GildedRose.prototype.nameIsBackstage = function (){
  this.quality = this.quality + 1;
  this.sellIn = this.sellIn - 1;
  if (this.quality === 11){
    this.quality = this.quality +1;
  }
  if (this.sellIn === 10){
    this.quality = this.quality -1;
  }
  if (this.sellIn === 4){
    this.quality = this.quality +1;
  }
  if (this.sellIn === 0){
    this.quality = this.quality +1;
  }
  if (this.quality > 50){
    this.quality = 50;
  }
  if (this.sellIn < 0){
    this.quality = 0;
  }
}

GildedRose.prototype.nameIsCake = function (){
  
}

GildedRose.prototype.tick = function () {

  if (this.name === "normal"){
    this.nameIsNormal();
    return;
  }

  if (this.name === "Aged Brie"){
    this.nameIsAgedBrie();
    return;
  }

  if (this.name === "Backstage passes to a TAFKAL80ETC concert"){
    this.nameIsBackstage();
    return;
  }

  if (this.name === "Conjured Mana Cake"){
    this.nameIsCake();
    return;
  }


        if (this.name === "normal" || this.name === "Conjured Mana Cake"){
        if (this.quality > 0){
         this.quality = this.quality - 1;
    }
 }
  else {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.sellIn < 11) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
        if (this.sellIn < 6) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
      }
    }
  }
  if (this.name === 'Conjured Mana Cake' && this.quality === 9){
    this.quality = this.quality - 1;
  }
  if (this.name != 'Sulfuras, Hand of Ragnaros') {
    this.sellIn = this.sellIn - 1;
  }
  if (this.sellIn < 0) {
    if (this.name != 'Aged Brie') {
      if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.quality > 0) {
          if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.quality = this.quality - 1;
          }
        }
      } else {
        this.quality = this.quality - this.quality;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
  if (this.name === 'Conjured Mana Cake' && this.quality === 7){
      this.quality = this.quality -1;
    }
}
export { GildedRose };
