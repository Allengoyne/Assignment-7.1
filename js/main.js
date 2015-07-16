
//these are the functions
function getAvg(items){
   return items.map(function(item){
     return item.price;
   }).reduce(function(total, value){
     return total + value;
   }) / items.length;
};


function getBetween(start, end){
return items.filter(function(item){
  return item.price > start && item.price < end
  }).map(function(item){
   return item.price + ': ' + item.title + "\n";
 }).reduce(function(html, item){
   return html + item;
 });
};

// this is question 3
var sterling = items.filter(function(item){
 return item.currency_code === "GBP";
 }).map(function(item){
    return item.title  +  ' costs '  +  item.price  +  ' GBP ';
   }).reduce(function(html, item){
     return html + item;
   });



// function getSterling(){
//   return items.filter(function(item){
//     return item.currency_code + item.title + item.price;
//   })
//   .map(function(item){
//     return item.currency_code === "GBP";
//   })
// }

//this is question 4


var wood = items.filter(function(item){
 var hasWood = item.materials.filter(function(material){
   return material === 'wood';
 });
   return hasWood.length;
}).map(function(item){
  return item.title + ': ' + item.price.toFixed(2) + "\n";
}).reduce(function(html, item){
  return html + item;
});

// number 5

var materials = items.filter(function(item){
  return materials = item.materials >= 8
}).map(function(item){
  return item.title + item.materials;
  // }).reduce(function(html, item){
    return html + item;
})

//number 6

var sellers = items.filter(function(item){
 return item.who_made === "i_did";
});



///these are the variables
var answer1 = getAvg(items).toFixed(2);
var answer2 = getBetween(12.00, 18.00);




////to the DOM....
document.getElementById('answer1').innerHTML = answer1
document.getElementById('answer2').innerHTML = answer2
document.getElementById("answer3").innerHTML = sterling;

document.getElementById("answer4").innerHTML = wood;
document.getElementById("answer6").innerHTML = sellers.length + " are made by their sellers";
document.getElementById("answer5").innerHTML = materials;
