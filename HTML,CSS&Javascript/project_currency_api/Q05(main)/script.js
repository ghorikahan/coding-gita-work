var input = document.querySelector("#input");
var select = document.querySelector(".select");
var ans = document.querySelector(".ans");
var btn = document.querySelector(".convert-btn");
var text = "INR";
var ansText;

document.addEventListener("click", (e) => {
    if (e.target.className == "country" && input.value != "") {
        // console.log(e.target.textContent);
        text = e.target.textContent;
        checkResponse(text);
    }
})

btn.addEventListener("click", () => {
    checkResponse(text);
})

var x = 0;
document.querySelector(".select").addEventListener("click", () => {
    if (x == 0) {
        document.querySelector(".data").style.display = "flex";
        document.querySelector(".data").style.flexWrap = "wrap";

        x = 1;
    }
    else {
        // document.querySelector(".data").style.display = "block";
        x = 0;
    }
    console.log("ok");
})

function checkResponse(text) {

    console.log(text);
    fetch("https://api.frankfurter.app/latest")
        .then((response) => response.json())
        .then((data1) => {
            // document.querySelector(".data").textContent = "data1" + data1.data;
            console.log(data1.rates);
            for (let i in data1.rates) {
                console.log(data1.rates[i]);
                if (text == i && input.value != "") {
                    ansText = data1.rates[i] * input.value;
                    console.log(ansText);
                    ans.textContent = ansText + " " + text;
                }
            }
        })
}