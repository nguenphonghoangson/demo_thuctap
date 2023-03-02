window.onload = function() {
    /* Add your logic here */
}
const myQuestions = [
    {
        question: 'Javascript is _________ language.',
        answers: {
            a: 'Programming',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting'
        },
        multi: false,
        correctAnswer: 'd'
    },
    {
        question:
        'Which of the following is a valid type of function javascript supports?',
        answers: {
            a: 'named function',
            b: 'anonymous function',
            c: 'both of the above',
            d: 'none of the above'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question:
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
        answers: {
            a: 'getIndex()',
            b: 'location()',
            c: 'indexOf()',
            d: 'getLocation()'
        },
        multi: false,
        correctAnswer: 'c'
    },
    {
        question: 'Which one of the following is valid data type of JavaScript',
        answers: {
            a: 'number',
            b: 'void',
            c: 'boolean',
            d: 'nothing'
        },
        multi: false,
        correctAnswer: 'c'
    }
];
// console.log(myQuestions);
var main=document.querySelector('.main')
var container=document.querySelector('.container')
var i=0;
var score=0
var answers=[]
var prev=document.querySelector('#pre')
var next=document.querySelector('#next')
var submit=document.querySelector('#submit')
var event=document.getElementsByName('event')
showButton=(i)=>{
    if(i==0){
        prev.style.display = "none";
    }
    else prev.style.display = "inline-block";
    if (i === myQuestions.length-1) {
        next.style.display = "none";
        submit.style.display = "inline-block";
      } else {
        next.style.display = "inline-block";
        submit.style.display = "none";
      }
}
renderUi=(i,myQuestions)=>{
    main.innerHTML=` `
    main.innerHTML+=`
    <div class="main">
    <p>Question ${i}: ${myQuestions[i].question}</p>
    <form action="#">
        <input type="radio" id="a" name="answers" value="a">
        <label for="a">a. ${myQuestions[i].answers.a} </label><br>
        <input type="radio" id="b" name="fav_language" value="b">
        <label for="b">b. ${myQuestions[i].answers.b} </label><br>
        <input type="radio" id="c" name="answers" value="c">
        <label for="c">c. ${myQuestions[i].answers.c} </label><br>
        <input type="radio" id="d" name="answers" value="d">
        <label for="d">d. ${myQuestions[i].answers.d} </label><br>
    </form>
    </div>
    
    <p>${i+1} out of ${myQuestions.length}</p>`
    checkedRadioButton(i,answers)
    showButton(i)

}
function saveAnswer(index,answers){
    var ele = document.getElementsByName('answers');
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                console.log(ele[i].value)
                answers[index]=ele[i].value
            }
        }
}
function checkedRadioButton(index,answers){
    var ele = document.getElementsByName('answers');
    for(let i = 0; i < ele.length; i++) {
        if(ele[i].value==answers[index]){
            ele[i].checked=true;
            console.log(`slo`)
        }
    }
       

}
renderUi(i,myQuestions)
prev.onclick=function (){
    saveAnswer(i,answers)
    renderUi(i==0?0:--i,myQuestions)
}
next.onclick=function(){
    saveAnswer(i,answers)
    renderUi(i==myQuestions.length-1?myQuestions.length-1:++i,myQuestions)
}
submit.onclick=function(){
    saveAnswer(i,answers)
    for(let i=0;i<myQuestions.length;i++){
        if(myQuestions[i].correctAnswer===answers[i]){
            score++
        }
    }
    main.innerHTML=`<h1 class="title">Điểm của bạn là: ${score}</h1>`
    prev.style.display = "none";
    next.style.display = "none";
    submit.style.display = "none";
}


