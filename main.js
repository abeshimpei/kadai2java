let time = document.getElementById('time')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let reset = document.getElementById('reset')

let startTime;
let elapsed = 0; 
let timeId;
let timeTodd = 0;

function updateTimeText(){

  let ms = elapsed % 1000;
  let s = Math.floor(elapsed % 60000 / 1000);
  let m = Math.floor(elapsed / 60000);
  let h = Math.floor(elapsed / 360000);
  
  let msStr = ms.toString().slice(0,1);
 
  
  time.textContent = h + ':' + m + ':' + s + ':' + msStr;
 
};

function countUp(){

  timeId = setTimeout(function(){
    
    elapsed = Date.now() - startTime + timeTodd;
    updateTimeText();
    countUp();
  }, 10);
}

start.addEventListener('click', function(){
 
  start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  
  startTime = Date.now();
  countUp();
  
});

stop.addEventListener('click', function(){
  
  start.disabled = false;
  stop.disabled = true;
  
  clearTimeout(timeId);
  timeTodd += Date.now() - startTime;
  
});

reset.addEventListener('click', function(){
  
  start.disabled = false;
  reset.disabled = true;
  
  clearTimeout(timeId);
  elapsed = 0;
  timeTodd =0;
  updateTimeText();
  
});