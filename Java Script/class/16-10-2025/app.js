// // // console.dir(document.querySelector('h1'));


// // // console.dir(document.querySelector("#description"));


// // // console.dir(document.querySelectorAll(".oldImg"))

// // let links=document.querySelectorAll('.box a')

// // for(i=0;i<links.length;i++){
// //     links[i].style.color="purple"
// // }


// // let para1=document.createElement('p');
// // para1.innerText="Hey I'm red!"
// // const body=document.querySelector('body');
// // body.prepend(para1)
// // para1.classList.add("red")

// // let h3=document.createElement('h3');
// // h3.innerText="I'm a blue h3!";
// // body.prepend(h3)
// // h3.classList.add("blue")

// // let div=document.createElement("div");
// // body.prepend(div)
// // div.classList.add("div")

// // let h1=document.createElement('h1');
// // h1.innerText="I'm in a div"
// // div.appendChild(h1);

// // let para2=document.createElement('p');
// // para2.innerText="ME TOO!";
// // div.appendChild(para2)

// let input=document.createElement('input');

// let body=document.querySelector('body');
// body.appendChild(input);
// let button=document.createElement('button');
// button.innerText="Click me";
// body.appendChild(button);
// input.placeholder="username"
// button.setAttribute("id","btn");
// console.dir(button)

// let btn=document.querySelector("#btn");

// let h1=document.createElement('h1');
// h1.innerText="DOM PRACTICE" 
// h1.setAttribute("class","h1")
// document.querySelector('body').append(h1)


// let para=document.createElement('p');
// para.innerHTML="Apn College <b>Delta</b> Practice";
// document.querySelector('body').append(para)

const btn=document.querySelector("button");
console.dir(btn)

// btn.onclick=function(){
//     console.log("Button was clicked")
// }

function sayHello(){
    alert('Hello!!')
}

// btn.onclick=sayHello
// btn.onmouseenter=function(){
//     console.log("you entered a button")
// }

// btn.addEventListener("click",function(){
//     alert("Hello!");
//     alert("Apna College")
// })
btn.addEventListener("dblclick",function(){
    console.log("you double clicked me")
})