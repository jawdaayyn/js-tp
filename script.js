const questions = [
  {
    question: "A quel écrivain doit-on le personnage de Boule-de-Suif ?",
    answers: ["Guy de Maupassant", "Victor Hugo", "Molière", "Baudelaire"],
  },
  {
    question:
      "Avec quel chanteur Carole Fredericks & Michael Jones ont-il formé un trio ?",
    answers: [
      "J.-J. Goldman",
      "Bernard Lavilliers",
      "Michel Berger",
      "Maxime Le Forestie",
    ],
  },
  {
    question:
      "Quel conseil régional est présidé par Ségolène Royal depuis 2004 ?",
    answers: [
      "Poitou-Charentes",
      "Ile de France",
      " Grand Est",
      "Pays de la Loire",
    ],
  },
  {
    question: "Comment se prénommait la soeur, sculptrice, de Paul Claudel ? ",
    answers: ["Camille", "Léa", "Marie", "Jeanne"],
  },
  {
    question: "A quel pape a succédé Jean-Paul II ?",
    answers: ["Jean-Paul Ier", "Paul VI", "Benoît XVI", "Jean XXIII"],
  },
  {
    question: "En géométrie, combien de côtés possède un losange ?",
    answers: ["4", "9", "16", "2"],
  },
  {
    question: "A quelle saison le boeuf est-il le plus fécond ?",
    answers: ["Aucune", "Printemps", "Automne", "Hiver"],
  },
  {
    question: "Quel club un golfeur utilise-t-il sur le green ?",
    answers: ["Un putter", "Un bois", "Un wedge", "Un hybride"],
  },
  {
    question: "De quelle couleur sont les jonquilles ?",
    answers: ["Jaunes", "Violettes", "Bleues", "Blanches"],
  },
  {
    question:
      "En quelle année Angela Merkel a-t-elle été nommée chancelière d'Allemagne ?",
    answers: ["2005", "2002", "1998", "2007"],
  },
  {
    question: "Quel est le prénom de MC Solaar ?",
    answers: ["Claude", "Samir", "Thibault", "Anthony"],
  },
  {
    question: "Quel sport associe-t-on au Quinze de France ?",
    answers: ["Le rugby", "Le football", "Le handball", "Le tennis de table"],
  },
  {
    question: "Qu'appelle-t-on le 9e art ?",
    answers: [
      "La bande dessinée",
      "Les jeux vidéos",
      "L'architecture",
      "La poésie",
    ],
  },
  {
    question: "Quel sport appelle-t-on soccer aux Etats-Unis ?",
    answers: ["Le football", "Le rugby", "Le tennis", "Le handball"],
  },
  {
    question:
      "A combien de jeux Olympiques Philippe Candeloro a-t-il gagné des médailles ?",
    answers: ["2", "5", "1", "3"],
  },
  {
    question: "Avec la Belgique et le Luxembourg, quel pays forme le Benelux ?",
    answers: ["Les Pays-Bas", "Autriche", "Allemagne", "Suède"],
  },
  {
    question: "Quelle est la capitale de Bulgarie ?",
    answers: ["Sofia", "Dinant", "Riga", "Lettonie"],
  },
  {
    question: "Quelle est la capitale du Cameroun ? ",
    answers: ["Yaoundé", "Dakar", "Kinshasa", "Bamako"],
  },
  {
    question: "Quel pays est dirigé par Kim Jong-il ?",
    answers: ["La Corée du Nord", "La Corée du Sud", "Le Taiwan", "La Chine"],
  },
];

const randomQuestions = (length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(questions[Math.floor(Math.random() * questions.length)]);
  }
  return list;
};

const createQuizz = (length = 3) => {
  const list = randomQuestions(length);
  console.log(list);
};
