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
    question: "A quelle saison le boeuf est-il le plus fecond ?",
    answers: ["Aucune", "Printemps", "Automne", "Hiver"],
    answer: ["Aucune"],
    type: "one-choice",
  },
  {
    question: "Quel club un golfeur utilise-t-il sur le green ?",
    answers: ["Un putter", "Un bois", "Un wedge", "Un hybride"],
    answer: ["Un putter"],
    type: "one-choice",
  },
  {
    question: "De quelle couleur sont les jonquilles ?",
    answers: ["Jaunes", "Violettes", "Bleues", "Blanches"],
    answer: ["Jaunes"],
    type: "one-choice",
  },
  {
    question:
      "En quelle annee Angela Merkel a-t-elle ete nommee chanceliere d'Allemagne ?",
    answers: ["2005", "2002", "1998", "2007"],
    answer: ["2005"],
    type: "one-choice",
  },
  {
    question: "Quel est le prenom de MC Solaar ?",
    answers: ["Claude", "Samir", "Thibault", "Anthony"],
    answer: ["Claude"],
    type: "one-choice",
  },
  {
    question: "Quel sport associe-t-on au Quinze de France ?",
    answers: ["Le rugby", "Le football", "Le handball", "Le tennis de table"],
    answer: ["Le rugby"],
    type: "one-choice",
  },
  {
    question: "Qu'appelle-t-on le 9e art ?",
    answers: [
      "La bande dessinee",
      "Les jeux videos",
      "L'architecture",
      "La poesie",
    ],
    answer: ["La bande dessinee"],
    type: "one-choice",
  },
  {
    question: "Quel sport appelle-t-on soccer aux Etats-Unis ?",
    answers: ["Le football", "Le rugby", "Le tennis", "Le handball"],
    answer: ["Le football"],
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
    question: "What is the capital of France?",
    answers: ["Paris", "London", "Rome", "Marseille"],
    answer: ["Paris", "Marseille"],
    type: "multiple-choice",
  },
];

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

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
let scoreElement = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

function loadQuestion(length = 10) {
  const list = randomQuestions(length);
  const currentQuizData = list[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = "";

  currentQuizData.answers.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.addEventListener("click", () => checkAnswer(option, list));
    optionsElement.appendChild(button);
  });
}

function checkAnswer(answer, list) {
  switch (list[currentQuestion].type) {
    case "one-choice":
      answer === list[currentQuestion].answer[0] ? score++ : "";
      scoreElement = score;
      break;
    default:
      break;
  }

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
