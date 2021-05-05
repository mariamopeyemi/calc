const 
zero = document.querySelector("#zero"),
one = document.querySelector("#one"),
two = document.querySelector("#two"),
three = document.querySelector("#three"),
four = document.querySelector("#four"),
five = document.querySelector("#five"),
six = document.querySelector("#six"),
seven = document.querySelector("#seven"),
eight = document.querySelector("#eight"),
nine = document.querySelector("#nine"),
add = document.querySelector("#add"),
substract = document.querySelector("#substract"),
multiply = document.querySelector("#multiply"),
divide = document.querySelector("#divide"),
dot = document.querySelector("#dot"),
ac = document.querySelector("#ac"),
clear = document.querySelector("#clear"),
equate = document.querySelector("#equate");


let question =  "",
answer = 0;

const qDisplay = document.querySelector('#display-question'),
        aDisplay = document.querySelector("#display-answer");


zero.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("0");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }
    
});

one.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("1");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

two.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("2");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

three.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("3");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

four.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("4");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

five.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("5");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

six.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("6");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

seven.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("7");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

eight.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("8");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

nine.addEventListener("click", () => {   
    if (question.length <= 17) {
        question = question.concat("9");
    }     
    else if (question.length > 17){
        display-error("input limit reached");
    }

});

dot.addEventListener("click", () => {   
    if (question.length <= 16) {
        question = question.concat(".");
    }     
    else if (question.length > 16){
        display-error("input limit reached");
    }

});


add.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("+");
    }
     if (question[question.length - 1] !== "+") {
         if (question.length <= 16) {
            question = question.concat("+");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
});


substract.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("-");
    }
     if (question[question.length - 1] !== "-") {
         if (question.length <= 16) {
            question = question.concat("-");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
});

multiply.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("*");
    }
     if (question[question.length - 1] !== "*") {
         if (question.length <= 16) {
            question = question.concat("*");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
});

divide.addEventListener("click", () => {
    if (question === "") {
        question = answer.toString().concat("/");
    }
     if (question[question.length - 1] !== "/") {
         if (question.length <= 16) {
            question = question.concat("/");
        }
        else if (question.length > 16) {
            displayError("input limit reached");
        } 
        
    }
});

ac.addEventListener("click", () =>{
    answer= 0;
    question= "";
    aDisplay.textContent = answer;
    qDisplay.textContent = question;

});

clear.addEventListener("click", () =>{
    question = question.slice(0, -1);
});

setInterval ( () => {
    qDisplay.textContent = question;
}, 1);

equate.addEventListener("click", () => {

    try{
    answer = eval(question);
    console.log(answer);
    question = "";
    qDisplay.textContent = answer;
    aDisplay.textContent = answer;

    } catch (err) {
        displayError(err);

    }
});
