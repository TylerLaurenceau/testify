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
  this.quality = this.quality -2;
  if (this.quality === 8){
    this.sellIn = this.sellIn -1;
  }
  if (this.quality < 0){
    this.quality = 0;
    this.sellIn = this.sellIn -1;
  }
  if (this.quality > 7){
    this.quality = this.quality - 2;
  }
  if (this.quality === 6 && this.sellIn === 4){
    this.quality = this.quality +2;
  }
}

GildedRose.prototype.tick = function () {

//______________________________________________________________________________

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
 }
export { GildedRose };
