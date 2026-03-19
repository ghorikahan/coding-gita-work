var input = document.querySelector("#input");
var select = document.querySelector("#select");
var ans = document.querySelector(".ans");
var btn = document.querySelector(".btn");
var text = "INR" ;
var ansText ;


document.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.className == "cuntry" && input.value != ""){
        console.log(e.target.textContent) ;
        text = e.target.textContent;    
        
        check(text);
    }
    if(e.target.className == "cuntry"){
        console.log(e.target.textContent) ;
        ans.textContent = "To :  " + e.target.textContent;
        text = e.target.textContent;

    }
})


// document.addEventListener("keypress",(e)=>{
//     if(e.key == "Enter" && input.value != ""){
//         text = input.value;
//         check(text);
//     }
// })



btn.addEventListener("click",()=>{
    check(text)
})
 

var w = 0;
document.querySelector(".select").addEventListener("click",()=>{
    if(w == 0){
        document.querySelector(".data").style.display = "flex";
        w = 1;
    }
    else{
        document.querySelector(".data").style.display = "none";
        w = 0 ;
    }
    
    console.log("0okok")
})






function check (text){

    ans.textContent = "...."


    console.log(text)

    fetch("https://api.frankfurter.app/latest")
    .then((response)=>response.json())
    .then((data)=>{
        document.querySelector(".date").textContent = "Date :  " + data.date;
        console.log(data.rates)
        for(let i in data.rates){
            if(text == i){
                ansText = data.rates[i] * input.value;
                console.log(ansText)
                ans.textContent = ansText + "  " + text;
            }
            
        }
    })
}