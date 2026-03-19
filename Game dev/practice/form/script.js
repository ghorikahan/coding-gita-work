var nameInput = document.querySelector('#name-input');
var emailInput = document.querySelector('#email-input');
var ageInput = document.querySelector('#age-input');
var addressInput = document.querySelector('#address-input');
var submitBtn = document.querySelector('#submit');

nameInput.style.border = "2px solid red";
emailInput.style.border = "2px solid red";
ageInput.style.border = "2px solid red";
addressInput.style.border = "2px solid red";

submitBtn.addEventListener('click', () => {
    if (nameInput.value == "" || emailInput.value == "" || ageInput.value == "") {
        alert("first complete the form ");
    }
    if (nameInput.value != "" || emailInput.value != "" || ageInput.value != "") {
        submitBtn.style.color = "green";
    }



    const newName = nameInput.value;
    const newEmail = emailInput.value;
    const newAge = ageInput.value;

    console.log("name",newName);
    console.log("E-mail",newEmail);
    console.log("Age",newAge);


    sessionStorage.setItem("name", newName);
    sessionStorage.setItem("email", newEmail);
    sessionStorage.setItem("age", newAge); 
});

function email(){
    if(emailInput.textContent != "@gmail.com"){
        alert(Enter valid Email address);
    }
}

var name1 = "kahan@123k";

name1 = name1.split("");
// console.log(typeof(name1));

function nameCheck(){
    name1.forEach(element => {
        if(element != '!' && element != '@' && element != '+' && element != '*' && element != '-' && element != '`'){
            console.log("the character is" + element);
        }
        else{
            // alert("the following name contains special character");
            // break;
            // continue;
            console.log("the particular character is a special character"+ element);
        }
    });
    return;
}

nameCheck();
