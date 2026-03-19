// var p = document.querySelector('p');
// var btn = document.querySelector(".btn");
// var card = document.querySelector(".card");

// btn.addEventListener("click", loadData)
// function createCard(data) {
//     console.log(data);
//     var div = document.createElement('div');

//     var img = document.createElement('img');
//     img.setAttribute("src", data.strCategoryThumb);

//     var p1 = document.createElement('p');
//     p1.textContent = `id: ${data.idCategory}`;

//     var p2 = document.createElement('p');
//     p1.textContent = data.strCategory;

//     var p3 = document.createElement('p');
//     p3.textContent = data.strCategoryDescription;

//     div.appendChild(img);
//     div.appendChild(p1);
//     div.appendChild(p2);
//     div.appendChild(p3);
//     card.appendChild(div);
//     console.log(card);
// }

// function loadData() {
//     fetch("https://themealdb.com/api/json/v1/1/search.php?f=y") 
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data);
//             for (let i = 0; i <= 13; i++) {
//                 createCard(data.categories[i]);
//             }
//             data.categories.slice(0, 5).forEach((element, index) => {
//                 createCard(data.categories[index]);
//             });
//         })
//         .catch((error) => {
//             p.textContent = "you got an error";
//             p.style.color = "green";
//         })
// }

var p = document.querySelector('p');
var btn = document.querySelector(".btn");
var card = document.querySelector(".card");

btn.addEventListener("click", loadData)
function createCard(data) {
    console.log(data);
    var div = document.createElement('div');

    var img = document.createElement('img');
    img.setAttribute("src", data.strMealThumb);

    var p1 = document.createElement('p');
    p1.textContent = `id: ${data.idMeal}`;

    var p2 = document.createElement('p');
    p1.textContent = data.strInstructions;

    var p3 = document.createElement('p');
    p3.textContent = data.strCategoryDescription;

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    card.appendChild(div);
    console.log(card);
}

function loadData() {
    fetch("https://themealdb.com/api/json/v1/1/search.php?f=y")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            for (let i = 0; i <= 13; i++) {
                createCard(data.categories[i]);
            }
            data.categories.slice(0, 5).forEach((element, index) => {
                createCard(data.categories[index]);
            });
        })
        .catch((error) => {
            p.textContent = "you got an error";
            p.style.color = "green";
        })
}