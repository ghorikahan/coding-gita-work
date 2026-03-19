var startBtn = document.querySelector(".startbtn");
var endBtn = document.querySelector(".endbtn");
var div = document.querySelector(".container");
var para = document.querySelector(".para");

function displayJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
            var image = document.createElement("img");
            var para2 = document.createElement("p");
            image.setAttribute("src", "https://api.chucknorris.io/img/avatar/chuck-norris.png")
            div.appendChild(image);
            // para.textContent = data.value;
            div.appendChild(para2);
            para2.textContent = data.value;
            console.log(data.value);
        })
}

startBtn.addEventListener("click", displayJoke);