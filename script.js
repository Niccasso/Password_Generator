var numbers = document.getElementById("option1");
var numberSymbols = document.getElementById("option2");
var sectionOneSymbols = document.getElementById("option3");
var sectionTwoSymbols = document.getElementById("option4");
var generate = document.getElementById("generate");
var length = document.getElementById("length");
var output = document.getElementById("output");

var selectedOptions = [[], [], [], []];
var alphabet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var password = "";

function randomize(){
    if (length.value > 32){
        length.value = 32;
    } else if (length.value < 10){
        length.value = 10;
    }

    for (var i = 0; i < length.value; i++){
        password+=alphabet[0][Math.floor(Math.random() * alphabet[0].length)];
    }
}

function create(){
    output.innerHTML = "";
    if (selectedOptions[0][0] === 1){
        alphabet[0]+="0123456789";
    }
    if (selectedOptions[1][0] === 1){
        alphabet[0]+="!@#$%^&*()";
    }
    if (selectedOptions[2][0] === 1){
        alphabet[0]+="`,./;'[]-=";
    }
    if (selectedOptions[3][0] === 1){
        alphabet[0]+="~<>?:{}|_+";
    }

    randomize();

    console.log(password);

    alphabet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    output.appendChild(document.createTextNode(password));
    password = ""
}

function selectOne(){
    if (numbers.checked === true){
        selectedOptions[0].push(1);
    } else if (numbers.checked === false){
        selectedOptions[0].pop();
    }
}

function selectTwo(){
    if (numberSymbols.checked === true){
        selectedOptions[1].push(1);
    } else if (numberSymbols.checked === false){
        selectedOptions[1].pop();
    }
}

function selectThree(){
    if (sectionOneSymbols.checked === true){
        selectedOptions[2].push(1);
    } else if (sectionOneSymbols.checked === false){
        selectedOptions[2].pop();
    }
}

function selectFour(){
    if (sectionTwoSymbols.checked === true){
        selectedOptions[3].push(1);
    } else if (sectionTwoSymbols.checked === false){
        selectedOptions[3].pop();
    }
}

numbers.addEventListener("click", selectOne);
numberSymbols.addEventListener("click", selectTwo);
sectionOneSymbols.addEventListener("click", selectThree);
sectionTwoSymbols.addEventListener("click", selectFour);
generate.addEventListener("click", create);


