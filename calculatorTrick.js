const stepButton = document.getElementById("stepButton");
const steplist = document.getElementById("steplist");
const numDigits = document.getElementById("textDigitsInput");
const numDigitsSubmitButton = document.getElementById("submitDigitsInput");
const numDigitsDiv = document.getElementById("numDigitsInput")

const inputBoxesSubmit = document.getElementById("inputBoxesSubmit");
const inputBoxes = document.getElementById("inputBoxes");

const yesNoButton = document.getElementById("yesno");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const errorMessage = document.getElementById("errormessage");

var stepNum = 0;

let numberDigits;

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
var num7 = 0;
var num8 = 0;

var total;

var delayTime = 4000;



stepButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("hi")
    stepNum += 1;
    if (stepNum == 1){
        steplist.innerHTML = "Multiply that Single Digit Number By Any other Single Digit Number.";
    }
    else if (stepNum == 2){
        steplist.innerHTML = "Keep Multiplying By Random Single Digit Numbers Until You Reach 7-9 digits";
    }
    else if (stepNum == 3){
        steplist.innerHTML = "Now You Have Generated A Totally Random Number, Mentally Circle One of Those Digits.";
    }
    else if (stepNum == 4){
        steplist.innerHTML = "How many Total Digits are In Your Answer?";
        numDigitsDiv.style.display = "block";
    }
    else if (stepNum == 5){
        errorMessage.innerHTML = "";
        steplist.innerHTML = "Type In All The Other " + (numberDigits-1).toString() + " Digits That You Did Not Circle, In ANY Order";
        numDigitsDiv.style.display = "none";

        inputBoxes.style.display = "block";

        if (numberDigits == 7){
            document.getElementById("num1").style.display = "none";
            document.getElementById("num2").style.display = "none";
        }
        else if (numberDigits == 8){
            document.getElementById("num1").style.display = "none";
        }
    }
    else{
        inputBoxes.style.display = "none";
        stepButton.style.display = "none";
        steplist.innerHTML = "Think of Your Number...Focus..."
       
        if (total % 9 == 0) {
            setTimeout(function() {
                steplist.innerHTML = "It's a 9, isn't it?";
            }, delayTime);
            setTimeout(function(){
                yesNoButton.style.display = "flex";
            }, delayTime+1500);
        }

        else {
            answer = 9 - (total % 9);
            setTimeout(function() {
                steplist.innerHTML = "You are thinking of " + answer;
            }, delayTime);
        }
    }

});

numDigitsSubmitButton.addEventListener("click", (e) =>{
    e.preventDefault();

    if (isNaN(numDigits.value) == true){
        console.log("not a valid digit")
        errorMessage.innerHTML = "Not a Valid Integer"
    }
    else if (numDigits.value <= 6){
        console.log("keep multiplying until")
        errorMessage.innerHTML = "Keep Multiplying Until You Reach 7-9 Digits!"
    }
    else if (numDigits.value >= 10){
       console.log("You Have Generated Too Many Digits. Refresh!")
       errorMessage.innerHTML = "You Have Generated Too Many Digits. Refresh This Page"
    }
    else{
    numberDigits = numDigits.value;
    console.log(numberDigits);
    numDigits.value = "";
    }
});

inputBoxesSubmit.addEventListener("click", (e) =>{
    e.preventDefault();
    
    num1num2check()
    validDigitCheck()

    console.log(num1);
    console.log(num2);

    total = num1+num2+num3+num4+num5+num6+num7+num8;
    console.log(total);

});

yesButton.addEventListener("click", (e) => {
    yesNoButton.style.display = "none";
    steplist.innerHTML = "Thank you for playing!";
});

noButton.addEventListener("click", (e) => {
    yesNoButton.style.display = "none";
    steplist.innerHTML = "I thought so..."
    setTimeout(function(){
        steplist.innerHTML = "You tried to trick me..."
    }, delayTime - 3000);
    setTimeout(function(){
        steplist.innerHTML = "You're thinking of a 0!"
    }, delayTime + 1000);
});


function num1num2check(){
    if (document.getElementById("num1").value.trim() == "" || document.getElementById("num2").value == ""){
        console.log('no num1 value')
        num1 = 0;
    }
    else{
        console.log('num1 has value')
        num1 = parseInt(document.getElementById("num1").value);
    }

    if (document.getElementById("num2").value.trim() == "" || document.getElementById("num2").value == null){
        console.log('no num2 value');
        num2 = 0;
    }
    else{
        num2 = parseInt(document.getElementById("num2").value);
    }
}

function validDigitCheck(){
if (isNaN(document.getElementById("num3").value) == true|| isNaN(document.getElementById("num4").value) == true || isNaN(document.getElementById("num5").value) == true || isNaN(document.getElementById("num6").value) == true || (document.getElementById("num7").value) == true || isNaN(document.getElementById("num8").value) == true){
    errorMessage.innerHTML = "One of Your Inputs Was Not a Valid Digit";
}
else if (document.getElementById('num3').value.trim() == "" || document.getElementById('num4').value.trim() == "" || document.getElementById('num5').value.trim() == "" || document.getElementById('num6').value.trim() == "" || document.getElementById('num7').value.trim() == "" || document.getElementById('num8').value.trim() == ""){
    errorMessage.innerHTML = "Please enter All Digits You Did Not Circle";
}
else{
errorMessage.innerHTML = "";
num3 = parseInt(document.getElementById("num3").value);
num4 = parseInt(document.getElementById("num4").value);
num5 = parseInt(document.getElementById("num5").value);
num6 = parseInt(document.getElementById("num6").value);
num7 = parseInt(document.getElementById("num7").value);
num8 = parseInt(document.getElementById("num8").value);
}
}