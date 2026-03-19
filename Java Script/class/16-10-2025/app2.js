// let btn=document.querySelector("button");
// let h3=document.querySelector('h3');
// let div=document.querySelector("div");
// btn.addEventListener("click",function(){
//     let color=getRandomColor()
//     h3.innerText=color
//     div.style.backgroundColor=color
// })

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`
//     return color
// }

// let p=document.querySelector("p");

// p.addEventListener("click",function(){
//     console.log("paragraph was clicked")
// })

// let box=document.querySelector(".box");

// box.addEventListener("mouseenter",function(){
//     console.log("Mouse inside box")
// })

// let btn=document.querySelector("button")
// let p=document.querySelector("p");
// let h1=document.querySelector("h1")
// let h3=document.querySelector("h3");

// btn.addEventListener("click",function(){
//    this.style.backgroundColor="blue"
// })

// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);


// const input=document.querySelector("input");
// const btn=document.querySelector("button")
// input.addEventListener("keydown",function(event){
//     console.log(event)
// })

//  let form=document.querySelector("form");
// form.addEventListener("submit",function(event){
//   event.preventDefault();
//     console.dir(form)
//     let user=this.elements[0];
//     let pass=this.elements[1];
   
//     // let inp=document.querySelector("#user");
//     // let pass=document.querySelector("#pass");
//     //  console.log(inp.value)
//     //  console.log(pass.value)
//      alert(`Hi ${user.value},your password is set to ${pass.value}`)
    
    
//})


// let user=document.querySelector("#user");
// user.addEventListener("input",function(){
//     console.log("input changed");
//     console.log("final value:",user.value)
// })

// let inp=document.querySelector("#text");

// let p=document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value)
//     p.innerText=inp.value
// })

// let btn=document.querySelector("#button")

// btn.addEventListener("mouseleave",function(){
//     btn.style.backgroundColor="red"

//     setTimeout(()=>{
//        btn.style.backgroundColor=""
//     },600)
// })


// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event) => {
//   output.textContent = "Scroll event fired!";
//   setTimeout(() => {
//     output.textContent = "Waiting on scroll events...";
//   }, 1000);
// });

// const btn=document.querySelector("#button");
 
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green"

//     setTimeout(()=>{
//         btn.style.backgroundColor=""
//     },2000)
// })

const input=document.querySelector("input");
const heading=document.querySelector("h2");

input.addEventListener("change",function(){
   const username=input.value;
   let allowedusername=[]
   for(let i=0;i<username.length;i++){
    if((username[i]>="a"&&username[i]<="z")||(username[i]>="A"&&username[i]<="Z")||(username[i]==" ")){
        allowedusername.push(username[i])
    }
   }
   heading.innerText=allowedusername.join("")
})