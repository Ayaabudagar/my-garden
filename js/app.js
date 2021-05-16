'use static'
let flowersArray = [];
let table = document.getElementById ('table');
function Flowers ( name ,category , season ) {
    this.Name = name
    this.Category = category
    this.Season = season
    Flowers.flowersArray.push(this);

}
let form = document.getElementById ('form');
form.addEventListener ('save', handlerSave);

function handlerSave (event) {
    event.preventDefult();
    const Name = event.target.Name.value;
    const Category = parseInt (event.target.Category.value);
    const Season = event.target.Season.value;
    let newFlower = new Flower ( name ,category , season );
    newFlower.render();



}
Flowers.prototype.render = function(){
    let tablerow = document.createElement ('tr')
   table.appendChild(table);
    let flowerName = document.createElement('td');
   tablerow.appendChild( flowerName );
    flowerName.textContent = this.name
    let flowerCategory = document.createElement('td');
    tablerow.appendChild( flowerCategory );
    flowerCategory .textContent = this.category
    let flowerSeason = document.createElement('td');
    tablerow.appendChild( flowerSeason );
    flowerSeason .textContent = this.season


}
function save () {
    let flowerInfo = JSON.stringify(Flowers.flowersArray);
    localStorage.setItem('flowerInfo', flowerInfo);

}
save ();
function getInfo () {
    let flowerInfo = localStorage.getItem ('flowerInfo');
    // let flowerInfo = JSON.parse (flowerInfo);
    Flowers.flowersArray = flowerInfo ;
}
getInfo ();



