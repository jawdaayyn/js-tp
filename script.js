const questions = [
  {
    question: "A quel ecrivain doit-on le personnage de Boule-de-Suif ?",
    answers: ["Guy de Maupassant", "Victor Hugo", "Moliere", "Baudelaire"],
    answer: ["Guy de Maupassant"],
    type: "one-choice",
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
  },
  {
    question: "Comment se prenommait la soeur, sculptrice, de Paul Claudel ? ",
    answers: ["Camille", "Lea", "Marie", "Jeanne"],
    answer: ["Camille"],
    type: "one-choice",
  },
  {
    question: "A quel pape a succede Jean-Paul II ?",
    answers: ["Jean-Paul Ier", "Paul VI", "Benoît XVI", "Jean XXIII"],
    answer: ["Jean-Paul Ier"],
    type: "one-choice",
  },
  {
    question: "En geometrie, combien de cotes possede un losange ?",
    answers: ["4", "9", "16", "2"],
    answer: ["4"],
    type: "one-choice",
  },
  {
    question:
      "A combien de jeux Olympiques Philippe Candeloro a-t-il gagne des medailles ?",
    answers: ["2", "5", "1", "3"],
    answer: ["2"],
    type: "one-choice",
  },
  {
    question: "Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?",
    answers: ["Les Pays-Bas", "Autriche", "Allemagne", "Suede"],
    answer: ["Les Pays-Bas"],
    type: "one-choice",
  },
  {
    question: "Quelle est la capitale de Bulgarie ?",
    answers: ["Sofia", "Dinant", "Riga", "Lettonie"],
    answer: ["Sofia"],
    type: "one-choice",
  },
  {
    question: "De quelle couleur est le cheval blanc d'henri IV ?",
    answer: ["Blanc", "blanc", "BLANC"],
    type: "text",
  },
  {
    question: "Quelle est la capitale du Cameroun ? ",
    answers: ["Yaounde", "Dakar", "Kinshasa", "Bamako"],
    answer: ["Yaounde"],
    type: "one-choice",
  },
  {
    question: "Quel pays est dirige par Kim Jong-il ?",
    answers: ["La Coree du Nord", "La Coree du Sud", "Le Taiwan", "La Chine"],
    answer: ["La Coree du Nord"],
    type: "one-choice",
  },
  {
    question: "Cliquez sur les objets qui sont des fruits",
    answers: ["Cerise", "Tomate", "Aubergine", "Banane"],
    answer: ["Cerise", "Tomate"],
    type: "multiple-choice",
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

function loadQuestion(length = 10) {
  const list = randomQuestions(length);
  const currentQuizData = list[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";
  loadAnswers(currentQuizData.answers, currentQuizData.type, list);
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
