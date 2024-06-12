const questions = [
  {
    question: "Solve for x: 2x + 3 = 7",
    answer: "2"
  },
  {
    question: "Solve for y: 3y - 4 = 8",
    answer: "4"
  },
  {
    question: "Identify the slope of the equation y = 5x + 2",
    answer: "5"
  },
  // Add more questions here
];

let currentQuestionIndex = 0;
let score = 0;

// Event listener for the "Start Quiz" button
document.getElementById('start-quiz').addEventListener('click', startQuiz);

// Event listener for the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', submitAnswer);

// Event listener for the "Next Question" button
document.getElementById('next-question').addEventListener('click', nextQuestion);

// Event listener for the "Restart Quiz" button
document.getElementById('restart-quiz').addEventListener('click', restartQuiz);

function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('question-screen').style.display = 'block';
  currentQuestionIndex = 0; // Reset question index
  score = 0; // Reset score
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const answerElement = document.getElementById('answer');
  const feedbackElement = document.getElementById('feedback');
  const currentQuestion = questions[currentQuestionIndex];
  
  questionElement.innerText = currentQuestion.question;
  answerElement.value = '';
  feedbackElement.style.display = 'none';
  document.getElementById('submit-answer').style.display = 'block';
  document.getElementById('next-question').style.display = 'none';
}

function submitAnswer() {
  const answerElement = document.getElementById('answer');
  const feedbackElement = document.getElementById('feedback');
  const currentQuestion = questions[currentQuestionIndex];
  
  if (answerElement.value === currentQuestion.answer) {
    score++;
    feedbackElement.innerText = 'Correct!';
    feedbackElement.className = 'correct';
  } else {
    feedbackElement.innerText = 'Incorrect. The correct answer is ' + currentQuestion.answer;
    feedbackElement.className = 'incorrect';
  }
  feedbackElement.style.display = 'block';
  document.getElementById('submit-answer').style.display = 'none';
  document.getElementById('next-question').style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById('question-screen').style.display = 'none';
  document.getElementById('results-screen').style.display = 'block';
  document.getElementById('score').innerText = score;
}

function restartQuiz() {
  document.getElementById('results-screen').style.display = 'none';
  document.getElementById('welcome-screen').style.display = 'block';
  currentQuestionIndex = 0; // Reset question index
  score = 0; // Reset score
}
