var questionP = document.querySelector("#question");
var answerText1 = document.querySelector("#answer-1-text");
var answerText2 = document.querySelector("#answer-2-text");
var answerText3 = document.querySelector("#answer-3-text");
var answerText4 = document.querySelector("#answer-4-text");

var answerDiv1 = document.querySelector("#answer-1");
var answerDiv2 = document.querySelector("#answer-2");
var answerDiv3 = document.querySelector("#answer-3");
var answerDiv4 = document.querySelector("#answer-4");

var answerRadio1 = document.querySelector("#answer-1-radio");
var answerRadio2 = document.querySelector("#answer-2-radio");
var answerRadio3 = document.querySelector("#answer-3-radio");
var answerRadio4 = document.querySelector("#answer-4-radio");

var answerCheckbox1 = document.querySelector("#answer-1-checkbox");
var answerCheckbox2 = document.querySelector("#answer-2-checkbox");
var answerCheckbox3 = document.querySelector("#answer-3-checkbox");
var answerCheckbox4 = document.querySelector("#answer-4-checkbox");

var checkButton  = document.getElementById('check');

var result  = document.getElementById('result');

let round = 0;
let points = 0;


let isMultiChoice;
let correctIndices;

loadQuestion();

function loadQuestion(){
  checkButton.innerText = "Check";

  resetAll();
  if(data.length == 0){
    alert("You're finished with all the questions. Refresh the page to try again.");
  }
  let randomIndex = Math.floor(Math.random()*data.length)
  let randomQuestion = data[randomIndex];
  data.splice(randomIndex, 1);

  correctIndices = randomQuestion[5];

  if(correctIndices.length > 1){
    isMultiChoice = true;
    displayOfRadioButtons('none');
    displayOfCheckboxes('');
  }
  else{
    isMultiChoice = false;
    displayOfRadioButtons('');
    displayOfCheckboxes('none');
  }

  questionP.innerText = randomQuestion[0];
  answerText1.innerText = randomQuestion[1];
  answerText2.innerText = randomQuestion[2];
  answerText3.innerText = randomQuestion[3];
  answerText4.innerText = randomQuestion[4];
}

let isReadyForNext = false;
checkButton.addEventListener('click', ()=>{
  if(isReadyForNext){
    loadQuestion();
    checkButton.innerText = "Check";
    isReadyForNext = false;
  }
  else{
    checkButton.innerText = "Next";
    isReadyForNext = true;

    let pickedIndices = [];
    if(isMultiChoice){
      let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

      for (var i = 0; i < checkboxes.length; i++) {
        pickedIndices.push(parseInt(checkboxes[i].value))
      }
    }
    else{
        let pickedElement = document.querySelector('input[type=radio]:checked');
        if(pickedElement){
          pickedIndices.push(parseInt(pickedElement.value));
        }
      
    }

    let pointPerCorrectIndex = 1 / correctIndices.length;
    let gainedPoints = 0;

    
    for(let i=0;i<pickedIndices.length;i++){
      if(correctIndices.includes(pickedIndices[i])){
        gainedPoints+=pointPerCorrectIndex;
      }
      else{
        gainedPoints-=pointPerCorrectIndex;
      }
    }

    console.log(gainedPoints)
    if(gainedPoints<0){
      gainedPoints=0;
    }

    points += gainedPoints;
    round++;

    
    result.innerText = (Math.round(points *10) / 10)+"/"+round;

    console.log("picked: "+pickedIndices);
    console.log("correct: "+correctIndices);
    
    if(correctIndices.includes(1) && pickedIndices.includes(1)){
      answerDiv1.style.background = "green";
    }
    else if(correctIndices.includes(1) && !pickedIndices.includes(1)){
      answerDiv1.style.background = "#999900";
    }
    else if(!correctIndices.includes(1) && pickedIndices.includes(1)){
      answerDiv1.style.background = "#8b0000";
    }

    if(correctIndices.includes(2) && pickedIndices.includes(2)){
      answerDiv2.style.background = "green";
    }
    else if(correctIndices.includes(2) && !pickedIndices.includes(2)){
      answerDiv2.style.background = "#999900";
    }
    else if(!correctIndices.includes(2) && pickedIndices.includes(2)){
      answerDiv2.style.background = "#8b0000";
    }

    if(correctIndices.includes(3) && pickedIndices.includes(3)){
      answerDiv3.style.background = "green";
    }
    else if(correctIndices.includes(3) && !pickedIndices.includes(3)){
      answerDiv3.style.background = "#999900";
    }
    else if(!correctIndices.includes(3) && pickedIndices.includes(3)){
      answerDiv3.style.background = "#8b0000";
    }

    if(correctIndices.includes(4) && pickedIndices.includes(4)){
      answerDiv4.style.background = "green";
    }
    else if(correctIndices.includes(4) && !pickedIndices.includes(4)){
      answerDiv4.style.background = "#999900";
    }
    else if(!correctIndices.includes(4) && pickedIndices.includes(4)){
      answerDiv4.style.background = "#8b0000";
    }

  }
})


function displayOfRadioButtons(style){
  document.querySelectorAll('input[type=radio]').forEach(el => el.style.display = style);
}

function displayOfCheckboxes(style){
  document.querySelectorAll('input[type=checkbox]').forEach(el => el.style.display = style);
}

function resetAll(){
  document.querySelectorAll('input[type=radio]').forEach(el => el.checked = false);
  document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false);

  answerDiv1.style.background = "";
  answerDiv2.style.background = "";
  answerDiv3.style.background = "";
  answerDiv4.style.background = "";
}

answerDiv1.addEventListener('click', ()=>{
  answerRadio1.checked = true;
  answerCheckbox1.checked = !answerCheckbox1.checked;
})
answerDiv2.addEventListener('click', ()=>{
  answerRadio2.checked = true;
  answerCheckbox2.checked = !answerCheckbox2.checked;
})
answerDiv3.addEventListener('click', ()=>{
  answerRadio3.checked = true;
  answerCheckbox3.checked = !answerCheckbox3.checked;
})
answerDiv4.addEventListener('click', ()=>{
  answerRadio4.checked = true;
  answerCheckbox4.checked = !answerCheckbox4.checked;
})
