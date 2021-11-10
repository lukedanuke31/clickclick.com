//the single-funtionpart
var button = document.querySelector('.value-btn');
var button2 = document.querySelector('.value-btn2');
// add more buttons above this line
var counter = document.querySelector('.counter');

button.addEventListener('click', function(){
  counter.value = parseInt(counter.value) + 1; 
}, false);
button2.addEventListener('click', function(){
  counter.value = parseInt(counter.value) - 1; 
}, false)
// cashin area
var cashin = document.querySelector('.submit-clear');
var total = document.querySelector('.total-ammount');

cashin.addEventListener('click', function(){
  total.value = parseInt(counter.value); 
  counter.value = counter.value - counter.value;
}, true)
//total