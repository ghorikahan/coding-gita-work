var input = document.querySelector(".txt");
var btn = document.querySelector(".btn");
var p = document.querySelector('p');

// var arr = [10, 20, 30, 40, 50];

// function displayData() {
//     var index = parseInt(input.value);

//     try {
//         if (index > 4) throw "index out of bound";
//         console.log(arr[index]);
//         p.textContent = arr[index];
//         p.style.color = "green";
//     }
//     catch (error) {
//         console.log(error);
//         p.textContent = error;
//         p.style.color = "red";
//     }
//     finally {
//         input.value = "";
//     }
// }

btn.addEventListener("click", alphaCheck);


function alphaCheck() {
    var index = input.value;

    try {
        if (index >= 0) throw "number is not allowed";
        if (index.length > 1) throw "more then one character is not allowed";
        if (index >= 'A' && index <= 'Z') throw "capital letter is not allowed";
        p.textContent = index;
        p.style.color = "green";
    }
    catch (error) {
        console.log(error);
        p.textContent = error;
        p.style.color = "red";
    }
    finally {
        input.value = "";
    }
}