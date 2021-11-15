var totalClicks = 0;
var clicks = 0;

function updateClickCount() {
  document.getElementById("clickCount").innerHTML = clicks;
}

function updateTotal(){
  totalClicks = totalClicks + clicks;
  document.getElementById("total").innerHTML = totalClicks;
  clicks = 0;
  document.getElementById("clickCount").innerHTML = clicks;
}