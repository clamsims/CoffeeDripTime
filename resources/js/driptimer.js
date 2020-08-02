//selection for the start timer button
const startTimer = document.getElementById('startbutton');

//selection for the timer display
const clockTimer = document.getElementById('stopwatch');

// selection for the display of coffee amounts to add
const coffeeStep = document.getElementById('stepguide');

// selection for changing classes on each step
const dripOne = document.getElementById('drop1');
const dripTwo = document.getElementById('drop2');
const dripThree = document.getElementById('drop3');
const dripFour = document.getElementById('drop4');
const coffeeCup = document.getElementById('cup');

//event listener to start the function cycle
startTimer.addEventListener("click", stepOne);

//step by step functions, changing every 30 seconds
function stepOne (){
  coffeeStep.innerHTML = "Pour 50ml of water into your dripper";
  startTimer.style.display = "none";
  dripOne.classList.add('completedstep');
  dripOne.classList.remove('incompletestep');
  setTimeout(stepTwo, 30000);
  timer();
}
function stepTwo (){
  coffeeStep.innerHTML = "Now add another 100ml of water";
  dripTwo.classList.add('completedstep');
  dripTwo.classList.remove('incompletestep');
  setTimeout(stepThree, 30000);
}
function stepThree(){
  coffeeStep.innerHTML = "Pour over another 50ml of water";
  dripThree.classList.add('completedstep');
  dripThree.classList.remove('incompletestep');
  setTimeout(stepFour, 30000);
}
function stepFour(){
  coffeeStep.innerHTML = "Add a final 50ml of water";
  dripFour.classList.add('completedstep');
  dripFour.classList.remove('incompletestep');
  setTimeout(stepFive, 10000);
}
function stepFive(){
  coffeeStep.innerHTML = "Wait for your coffee to brew and add milk and sugar if desired.";
  coffeeCup.classList.remove('hidden');
  clockTimer.innerHTML = "";
}

//stopwatch counter
let seconds = 0;
let time;

function stopWatch (){
    seconds++;
    clockTimer.innerHTML = seconds + "s";
    if (seconds === 90){
      clearTimeout(time);
      clockTimer.innerHTML = "Nearly done";
    }else{
    timer();
  }
}
function timer(){
  time = setTimeout( stopWatch, 1000);
}
