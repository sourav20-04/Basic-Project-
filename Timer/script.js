const hour=document.getElementById('hour');
const min=document.getElementById('min');
const sec=document.getElementById('sec');
const disp=document.getElementById('disp')

const start=document.getElementById('start');
const reset=document.getElementById('reset');
const pause=document.getElementById('pause');
let Interval=null;
let total=0;


const totalvalue=()=>{
  total=Number(hour.value)*3600+Number(min.value)*60+Number(sec.value);
  
}

const timer=()=>{
  totalvalue();
   total--;

   if (total>=0) {
       let hr=Math.floor(total/3600);
       let mt=Math.floor(total/60-hr*60);
       let sc=total-((hr*3600)+(mt*60));

       hour.value=hr;
       min.value=mt;
       sec.value=sc;
   } else {
     disp.innerText="Time is over"
   }
  console.log(total);
}

start.addEventListener('click',()=>{
   clearInterval(Interval);
   Interval= setInterval(timer,1000);
   disp.innerText="Timer started"

})


reset.addEventListener('click',()=>{
    clearInterval(Interval);
    hour.value=0;
    min.value=0;
    sec.value=0;
    disp.innerText='Timer'
})

