// function loadData() {
//     try {
//         fetch("https://www.theealdb.com/api/json/v1/1/categories.php")
//             .then((response) => response.json())
//             .then((Data) => {
//                 console.log(Data);
//             });
//     }
//     catch (error) {
//         para.textContent = "you got the error";
//     }
//     finally{
//         para.textContent = "you got finally";
//     }
//     fetch("https://www.theealdb.com/api/json/v1/1/categories.php")
//     .then((response)=>response.json())
//     .then((data)=>{console.log(data)})
//     .catch((error)=>{console.log("you got an error")})
//     .finally(()=>{
//         para.style.color = "red";
//     });
//     console.log("you called me");
//     para.style.color = "green";
// }


var btn = document.querySelector('.btn');
var para = document.querySelector('p');


function createCard(data) {
    console.log(data)
    var div = document.createElement('div');

    var img = document.createElement('img');
    img.setAttribute("src", data.strMealThumb);

    var p1 = document.createElement('p');
    p1.textContent = `id: ${data.idMeal}`;

    var p2 = document.createElement('p');
    p1.textContent = data.strCategory;

    var p3 = document.createElement('p');
    p3.textContent = data.strInstructions;

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    // card.appendChild(div);
    console.log(card);

}

function loadData() {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

        })
        .catch((error) => {
            console.log("you got an error");
        })
}

btn.addEventListener("click", loadData);

