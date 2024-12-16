    const display = document.getElementById('display');
    const playBtn = document.getElementById('play');
    const stopBtn = document.getElementById('stop');
    const reloadBtn = document.getElementById('reload');
  
    let hours=0;
    let minutes=0;
    let seconds=0;
    let timer=null;


function stopwatch() {
    seconds++
   if (seconds==60) {
      seconds=0;
      minutes++
      if (minutes==60) {
        minutes=0;
        hours++
      }
   }
   let h=hours<10?"0"+hours:hours;
   let m=minutes<10?"0"+minutes:minutes;
   let s=seconds<10?"0"+seconds:seconds;

   display.innerHTML=`${h}:${m}:${s}`;
}


function start() {
    if (timer!==null) {
        
        clearInterval(timer)
    }
   timer= setInterval(stopwatch, 1000);
}


function stop() {
    clearInterval(timer)
}

function reload() {
   clearInterval(timer)
   hours=0;
   minutes=0;
   seconds=0;
   display.innerHTML="00:00:00"
   
}

playBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
reloadBtn.addEventListener('click',reload)