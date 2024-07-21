import { questionSet } from "./questionSet.js";

const question = document.getElementById("question");
const option1 = document.getElementById("op1");
const option2 = document.getElementById("op2");
const option3 = document.getElementById("op3");
const option4 = document.getElementById("op4");
const buttons = document.getElementById("keys");
const options = [option1, option2, option3, option4];
let number = 0;
let correct = 0;
let wrong = 0;
question.textContent = questionSet[number].Q;
for(let i=0;i<4;i++){
    options[i].textContent = questionSet[number].O[i];
   }
addlistner();
function changeQ(){
addlistner();
if(number<(questionSet.length-1)){
number++;
options.forEach(option => option.classList.remove("correct","wrong"));
question.textContent = questionSet[number].Q;
for(let i=0;i<4;i++){
    options[i].textContent = questionSet[number].O[i];
   }
   clearTimeout(intervalid);
}
else{
    const htmlcontent = document.getElementById("card");
    htmlcontent.innerHTML = ` <h1> Game Over!</h1><br>
                              <h2> Correct Answers: ${correct}</h2>
                              <h2> Wrong Answers: ${wrong} </h2>
                              <h2> Success Rate: ${((correct/(number+1))*100).toFixed(2)}% </h2>
    `;
    if((((correct/(number+1))*100).toFixed(2))<50){
        htmlcontent.innerHTML += `<h1 style="color:red;"> Try Harder! 😞 </h2> `;
    }
    else if((((correct/(number+1))*100).toFixed(2))<80){
        htmlcontent.innerHTML += `<h1 style="color:orange;"> Well Done! 👍 </h2> `;
    }
    else{
            htmlcontent.innerHTML += `<h1 style="color:lightgreen;"> Congratulations! 🎉 </h2> `;
        }
    
}
}
function handleOptionClick(event) {
    let selectedOption = event.target;
    if (selectedOption.innerText === questionSet[number].A) {
        correct++;
        selectedOption.textContent = "Correct 👌";
        selectedOption.classList.add("correct");
        removelistner();
      let intervalid = setTimeout(changeQ,1000);
    } else {
        wrong++;
        selectedOption.textContent = "Wrong 👎";
        selectedOption.classList.add("wrong");
        removelistner();
        let intervalid = setTimeout(changeQ,1000);
    }
}

function addlistner(){
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", handleOptionClick);
}
}
function removelistner(){
    for (let i = 0; i < options.length; i++) {
        options[i].removeEventListener("click", handleOptionClick);
    }
}