const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter"
  },
  // Add more questions here...
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = '';

  currentQuizData.options.forEach((option) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];

  if (answer === currentQuizData.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.innerText = `You scored ${score} out of ${quizData.length} questions.`;
  optionsElement.innerHTML = '';
  submitButton.style.display = 'none';
}

loadQuestion();
