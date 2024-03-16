// for a givan array with prices of 5 items [250,645,300,900,50] All the items have 10% off on them.Change the array to 
// store final price after applying offer.

let items = [250,645,300,900,50];

for(let i=0; i<items.length; i++) {
    let offer = items[i]/10;
    items[i] -=offer;
}
console.log(items);