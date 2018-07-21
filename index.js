const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]


const questionContainer = document.querySelector('.question-container')
let question;

function appendQuestion(question) {
  const questionContainer = document.querySelector('.question-container')
  questionContainer.innerText = question.questionText
}

function askQuestionThen(time) {
  question = questions[0]
  appendQuestion(question)
  return new Promise((resolve, reject) => {
    setTimeOut(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(q) {
  return new Promise((resolve, reject) => {
    questionContainer.innerText = ''
    toggleTrueAndFalseButtons()
  })
}

function askQuestionThenRemoveQuestion(time) {
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    if (btn.classList.contains('hide')) {
      btn.classList.remove('hide')
    } else {
    btn.classList.add('hide')
    }
  })
}

function displayQuestionOnClick() {
  let clickMe = document.querySelector('.waves-light')
  return clickMe.addEventListener('click', () => {
    askQuestionThenRemoveQuestion(5000)
  })
}
