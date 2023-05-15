const questions = [
  {
    question: "A quel ecrivain doit-on le personnage de Boule-de-Suif ?",
    answers: ["Guy de Maupassant", "Victor Hugo", "Moliere", "Baudelaire"],
    answer: ["Guy de Maupassant"],
    type: "one-choice",
    hint: "C'est un ecrivain francais du 19eme siecle",
  },
  {
    question:
      "Avec quel chanteur Carole Fredericks & Michael Jones ont-il forme un trio ?",
    answers: [
      "J.-J. Goldman",
      "Bernard Lavilliers",
      "Michel Berger",
      "Maxime Le Forestie",
    ],
    answer: ["J.-J. Goldman"],
    type: "one-choice",
    hint: "C'est un chanteur francais",
  },
  {
    question:
      "Quel conseil regional est preside par Segolene Royal depuis 2004 ?",
    answers: [
      "Poitou-Charentes",
      "Ile de France",
      " Grand Est",
      "Pays de la Loire",
    ],
    answer: ["Poitou-Charentes"],
    type: "one-choice",
    hint: "C'est une region francaise",
  },
  {
    question: "Comment se prenommait la soeur, sculptrice, de Paul Claudel ? ",
    answers: ["Camille", "Lea", "Marie", "Jeanne"],
    answer: ["Camille"],
    type: "one-choice",
    hint: "C'est un prenom feminin francais",
  },
  {
    question: "A quel pape a succede Jean-Paul II ?",
    answers: ["Jean-Paul Ier", "Paul VI", "Benoît XVI", "Jean XXIII"],
    answer: ["Jean-Paul Ier"],
    type: "one-choice",
    hint: "C'est un pape",
  },
  {
    question: "En geometrie, combien de cotes possede un losange ?",
    answers: ["4", "9", "16", "2"],
    answer: ["4"],
    type: "one-choice",
    hint: "C'est un nombre",
  },
  {
    question:
      "A combien de jeux Olympiques Philippe Candeloro a-t-il gagne des medailles ?",
    answers: ["2", "5", "1", "3"],
    answer: ["2"],
    type: "one-choice",
    hint: "C'est un nombre",
  },
  {
    question: "Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?",
    answers: ["Les Pays-Bas", "Autriche", "Allemagne", "Suede"],
    answer: ["Les Pays-Bas"],
    type: "one-choice",
    hint: "C'est un pays europeen",
  },
  {
    question: "Quelle est la capitale de Bulgarie ?",
    answers: ["Sofia", "Dinant", "Riga", "Lettonie"],
    answer: ["Sofia"],
    type: "one-choice",
    hint: "C'est une ville europeenne",
  },
  {
    question: "De quelle couleur est le cheval blanc d'henri IV ?",
    answer: ["Blanc", "blanc", "BLANC"],
    type: "text",
    hint: "C'est une couleur",
  },
  {
    question: "Quelle est la capitale du Cameroun ? ",
    answers: ["Yaounde", "Dakar", "Kinshasa", "Bamako"],
    answer: ["Yaounde"],
    type: "one-choice",
    hint: "C'est une ville africaine",
  },
  {
    question: "Quel pays est dirige par Kim Jong-il ?",
    answers: ["La Coree du Nord", "La Coree du Sud", "Le Taiwan", "La Chine"],
    answer: ["La Coree du Nord"],
    type: "one-choice",
    hint: "C'est un pays asiatique",
  },
  {
    question: "Cliquez sur les objets qui sont des fruits",
    answers: ["Cerise", "Tomate", "Aubergine", "Banane"],
    answer: ["Cerise", "Tomate", "Banane"],
    type: "multiple-choice",
    hint: "Ce sont des fruits",
  },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;
let currentQuizz = [];

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

function loadQuizz(length = 10) {
  currentQuizz = randomQuestions(length);
  const hintButton = document.createElement("button");
  hintButton.textContent = "Hint";
  hintButton.addEventListener("click", () =>
    showHint(currentQuizz[currentQuestion].hint)
  );
  document.getElementById("hint").appendChild(hintButton);
  loadQuestion();
}

function loadQuestion() {
  questionElement.innerText = currentQuizz[currentQuestion].question;
  optionsElement.innerHTML = "";
  loadAnswers();
}

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function loadAnswers() {
  const answers = currentQuizz[currentQuestion].answers;
  const randomizedAnswers = shuffleArray(answers);

  switch (currentQuizz[currentQuestion].type) {
    case "one-choice":
      randomizedAnswers.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
      });
      break;
    case "multiple-choice":
      randomizedAnswers.forEach((option) => {
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
      button.addEventListener("click", () => checkAnswer(null));
      optionsElement.appendChild(button);
      break;
    case "text": {
      const input = document.createElement("input");
      input.type = "text";
      optionsElement.appendChild(input);
      const button = document.createElement("button");
      button.innerText = "Valider";
      button.addEventListener("click", () => checkAnswer(input.value));
      optionsElement.appendChild(button);
      break;
    }
    default:
      break;
  }
}

function checkAnswer(answer) {
  const checkedInputs = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  const checkedValues = Array.from(checkedInputs).map((input) => input.value);
  const scoreSpan = document.getElementById("score");
  switch (currentQuizz[currentQuestion].type) {
    case "one-choice":
      if (answer === currentQuizz[currentQuestion].answer[0]) {
        score++;
      }
      break;
    case "multiple-choice":
      if (
        checkedValues.length === currentQuizz[currentQuestion].answer.length &&
        currentQuizz[currentQuestion].answer.every((a) =>
          checkedValues.includes(a)
        )
      ) {
        score++;
      }
      break;
    case "text":
      if (currentQuizz[currentQuestion].answer.includes(answer)) {
        score++;
      }
      break;
    default:
      break;
  }

  scoreSpan.innerText = score + "/" + currentQuizz.length;

  currentQuestion++;
  if (currentQuestion < currentQuizz.length) {
    loadQuestion();
  } else {
    showResults(currentQuizz.length);
  }
}

function showResults(length) {
  questionElement.innerText = `You scored ${score} out of ${length} questions.`;
  optionsElement.innerHTML = "";
}

loadQuizz();
