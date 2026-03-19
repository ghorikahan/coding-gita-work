let gameSequence=[];
let userSequence=[];
let btns=["yellow","red","purple","green"]
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started")
        started=true
        levelup()
    }
    
})

function buttonflash(btn){
   btn.classList.add("flash")
   setTimeout(()=>{
    btn.classList.remove("flash")
   },250)
}

function userflash(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
     btn.classList.remove("userflash")
    },250)
 }
function levelup(){
   userSequence=[]
    level++;
    h2.innerText=`level: ${level}`
    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx]
    let randbtn =document.querySelector(`.${randColor}`)
    // console.log(randIndx);
    // console.log(randColor);
    // console.log(randbtn)
    gameSequence.push(randColor);
    console.log(gameSequence)
    buttonflash(randbtn)
}

function checkAns(idx){
  //console.log('current level:',level)
//   let idx=level-1;
  if(userSequence[idx]===gameSequence[idx]){
    if(userSequence.length===gameSequence.length){
       setTimeout(levelup,1000)
    }
   }
  else{
    
    h2.innerText=` your Score is:${level}\nGame Over: press any key to exit`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="";
    
    },500)
    reset()
  }
}


function btnPress(){
   let btn=this;
  userflash(btn)  
   userColor=btn.getAttribute("id")
   
   userSequence.push(userColor);
   checkAns(userSequence.length-1);
   
}

let allBtns=document.querySelectorAll(".btn")

for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false
    gameSequence=[];
    userSequence=[]
    level=0
}




