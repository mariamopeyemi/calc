const zero= document.querySelector("#zero"),
        one= document.querySelector("#one"),
        two= document.querySelector("#two"),
        three= document.querySelector("#three"),
        four= document.querySelector("#four"),
        five= document.querySelector("#five"),
        six= document.querySelector("#six"),
        seven= document.querySelector("#seven"),
        eight= document.querySelector("#eight"),
        nine= document.querySelector("#nine"),
        add= document.querySelector("#add"),
        substract= document.querySelector("#substract"),
        multiply= document.querySelector("#multiply"),
        divide= document.querySelector("#divide"),
        dot= document.querySelector("#dot"),
        C= document.querySelector("#clear"),
        ac= document.querySelector("#ac"),
        equate= document.querySelector("#equate"),
        qDisplay= document.querySelector("#display-question"),
        aDisplay= document.querySelector("#display-answer");

        let question="",
            answer=0;

        zero.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("0");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        one.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("1");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        two.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("2");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        three.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("3");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        four.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("4");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        five.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("5");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        six.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("6");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        seven.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("7");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        eight.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("8");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
        nine.addEventListener("click", () => {
            if(question.length<=17){
                question= question.concat("9");
            }
            else if(question.length > 17){
                display-error("Can not add more digits");
            }
        });
       dot.addEventListener("click", () => {
            if(question.length<=16){
                question= question.concat(".");
            }
            else if(question.length > 16){
                display-error("Can not end with a dot");
            }
        });
        add.addEventListener("click", ()=>{
            if(question==="" ){
                question.toString().concat("+");
            }
            if(question[question.length-1]!=="+"){
                if(question.length<17){
                    question=question.concat("+");
                }
                else if(question.length>16){
                    display-error("Imput limit reached");
                }
            }
        })
        substract.addEventListener("click", ()=>{
            if(question===""){
                question.toString().concat("-");
            }
            if(question[question.length - 1]!==("-")){
                if(question.length<17){
                    question=question.concat("-");
                }
                else if(question.length>16){
                    display-error("Imput limit reached");
                }
            }
        })
        multiply.addEventListener("click", ()=>{
            if(question===""){
                question.toString().concat("*");
            }
            if(question[question.length - 1]!==("*")){
                if(question.length<17){
                    question=question.concat("*");
                }
                else if(question.length>16){
                    display-error("Imput limit reached");
                }
            }
        })
        divide.addEventListener("click", ()=>{
            if(question===""){
                question.toString().concat("/");
            }
            if(question[question.length - 1]!==("/")){
                if(question.length<17){
                    question=question.concat("/");
                }
                else if(question.length>16){
                    display-error("Imput limit reached");
                }
            }
        })
        equate.addEventListener("click", ()=> {
            try {
                answer=eval(question);
                question="";
            } catch (error) {
                displayError("I am your mistake")
            }
        })
        ac.addEventListener("click", ()=>{
            answer=0,
            question="";
        })
        clear.addEventListener("click", ()=>{
            question=question.substring(0, question.length - 1);
        })
        setTimeout(() => {
            display-error("Imput limit reached");
        }, 3);
        setInterval(() => {
            qDisplay.textContent=question;
            aDisplay.textContent=answer;
        }, 1);
        