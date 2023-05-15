const questions = [
  {
    question: "A quel ecrivain doit-on le personnage de Boule-de-Suif ?",
    answers: ["Guy de Maupassant", "Victor Hugo", "Moliere", "Baudelaire"],
    answer: ["Guy de Maupassant"],
    type: "one-choice",
    hint: "Guy",
  },
 {
    question: "Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?",
    answers: ["Les Pays-Bas", "Autriche", "Allemagne", "Suede"],
    answer: ["Les Pays-Bas"],
    type: "one-choice",
    hint: "Guy",
  },
  {
    question: "Quelle est la capitale de Bulgarie ?",
    answers: ["Sofia", "Dinant", "Riga", "Lettonie"],
    answer: ["Sofia"],
    type: "one-choice",
    hint: "Guy",
  },
  {
    question: "De quelle couleur est le cheval blanc d'henri IV ?",
    answer: ["Blanc", "blanc", "BLANC"],
    type: "text",
    hint: "Guy",
  },
  {
    question: "Quelle est la capitale du Cameroun ? ",
    answers: ["Yaounde", "Dakar", "Kinshasa", "Bamako"],
    answer: ["Yaounde"],
    type: "one-choice",
    hint: "Guy",
  },
  {
    question: "Quel pays est dirige par Kim Jong-il ?",
    answers: ["La Coree du Nord", "La Coree du Sud", "Le Taiwan", "La Chine"],
    answer: ["La Coree du Nord"],
    type: "one-choice",
    hint: "Guy",
  },
  {
    question: "Cliquez sur les objets qui sont des fruits",
    answers: ["Cerise", "Tomate", "Aubergine", "Banane"],
    answer: ["Cerise", "Tomate"],
    type: "multiple-choice",
    hint: "Guy",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;
const randomQuestions = (length) => {
  let list = [];
  while (list.length < length) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    if (!list.includes(randomQuestion)) {
      list.push(randomQuestion);
    }
  }
  return list;
};

function showHint(hint) {
  const hintElement = document.getElementById("hint");
  hintElement.innerText = "Hint: " + hint;
}

function loadQuestion(length = 10) {
  const list = randomQuestions(length);
  const currentQuizData = list[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  loadAnswers(currentQuizData.answers, currentQuizData.type, list);

  const hintButton = document.createElement("button");
  hintButton.innerText = "Hint";
  hintButton.addEventListener("click", () => showHint(currentQuizData.hint));
  optionsElement.appendChild(hintButton);
}

function loadAnswers(answers, type, list) {
  switch (type) {
    case "one-choice":
      answers.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, list, type));
        optionsElement.appendChild(button);
      });
      break;
    case "multiple-choice":
      answers.forEach((option) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option;
        optionsElement.appendChild(checkbox);
        const label = document.createElement("label");
        label.innerText = option;
        optionsElement.appendChild(label);
        const br = document.createElement("br");
        optionsElement.appendChild(br);
      });
      const button = document.createElement("button");
      button.innerText = "Valider";
      button.addEventListener("click", () => checkAnswer(null, list, type));
      optionsElement.appendChild(button);
      break;
    case "text": {
      const input = document.createElement("input");
      input.type = "text";
      optionsElement.appendChild(input);
      const button = document.createElement("button");
      button.innerText = "Valider";
      button.addEventListener("click", () =>
        checkAnswer(input.value, list, type)
      );
      optionsElement.appendChild(button);
      break;
    }
    default:
      break;
  }
}
function checkAnswer(answer, list, type) {
  const checkedInputs = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const checkedValues = Array.from(checkedInputs).map((input) => input.value);
  const scoreSpan = document.getElementById("score");
  switch (type) {
    case "one-choice":
      if (answer === list[currentQuestion].answer[0]) {
        score++;
      }
      break;
    case "multiple-choice":
      if (
        checkedValues.length === list[currentQuestion].answer.length &&
        list[currentQuestion].answer.every((a) => checkedValues.includes(a))
      ) {
        score++;
      }
      break;
    case "text":
      if (list[currentQuestion].answer.includes(answer)) {
        score++;
      }
      break;
    default:
      break;
  }

  scoreSpan.innerText = score + "/" + length;

  currentQuestion++;
  if (currentQuestion < list.length) {
    loadQuestion();
  } else {
    showResults(list.length);
  }
}

function showResults(length) {
  questionElement.innerText = `You scored ${score} out of ${length} questions.`;
  optionsElement.innerHTML = "";
}

loadQuestion();
