

const buttonResult1 = document.querySelector('.result-btn1')

const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');


buttonResult1.addEventListener('click', adding); 

function adding(){
    let a = number1.value;
    let b = number2.value;

    let result1 = Number(a) + Number(b);
    alert(result1)


}




const buttonResult2 = document.querySelector('.result-btn2')

const number3 = document.querySelector('.number3');
const number4 = document.querySelector('.number4');


buttonResult2.addEventListener('click', removing); 

function removing(){
    let a = number3.value;
    let b = number4.value;

    let result2 = Number(a) - Number(b);
    alert(result2)


}






const buttonResult3 = document.querySelector('.result-btn3')

const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');


buttonResult3.addEventListener('click', dividing); 

function dividing(){
    let a = number5.value;
    let b = number6.value;

    let result3 = Number(a) / Number(b);
    alert(result3)

}



const buttonResult4 = document.querySelector('.result-btn4')

const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');


buttonResult4.addEventListener('click', multiplying); 

function multiplying(){
    let a = number7.value;
    let b = number8.value;

    let result4 = Number(a) * Number(b);
    alert(result4);


}





const buttonResult5 = document.querySelector('.result-btn5')

const sqrNumber = document.querySelector('.sqr-number');



buttonResult5.addEventListener('click', sqrFinder); 

function sqrFinder(){
    
    let a = Number(sqrNumber.value)

    let  result5 = Math.sqrt(a)

    alert(result5);


}


const buttonResult6 = document.querySelector('.result-btn6')

const stepNumber1 = document.querySelector('.step-number1');
const stepNumber2 = document.querySelector('.step-number2');


buttonResult6.addEventListener('click', step); 

function step(){
    let a = Number(stepNumber1.value);
    let b = Number(stepNumber2.value);

    let result6 = Math.pow(a, b)
    alert(result6)

}



const buttonResult7 = document.querySelector('.result-btn7')

const percentNumber1 = document.querySelector('.percent-number1');
const percentNumber2 = document.querySelector('.percent-number2');


buttonResult7.addEventListener('click', percent); 

function percent(){
    let a = Number(percentNumber1.value);
    let b = Number(percentNumber2.value);

    let result7 = b * a / 100
    alert(result7)

}