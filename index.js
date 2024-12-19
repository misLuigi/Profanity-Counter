let swearCount = document.getElementById("swear-count");
console.log(swearCount);
let entriesSec = document.getElementById("entries-section");
console.log(entriesSec);

let count = 0

function increment() {
  count ++;
  swearCount.textContent = count;
}

let date = new Date();
let latestDateString = date.toLocaleDateString('en-US',{month: 'long', year: 'numeric', day: 'numeric'});
let latestTimeString = date.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
console.log(latestDateString);
console.log(latestTimeString);

function save() {
  entriesSec.textContent += " - " + count;
  swearCount.textContent = 0;
  count = 0;
}
