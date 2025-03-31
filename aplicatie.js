const quizData = [
  {
    question: "Autorul știrii este anonim?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Autorul știrii este autorizat să vorbească pe subiectul propus de material (este o sursă oficială, autorizată, cu pregătire de specialitate pe tema vizată de articol)?",
    options: [
      { text: "Da", score: 1 },
      { text: "Nu", score: -1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Site-ul sau sursa media pe care a fost promovată știrea sunt cunoscute?",
    options: [
      { text: "Da", score: 1 },
      { text: "Nu", score: -1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Știrea este creată și prezentată tendențios, cu susținerea unilaterală a unei anumite perspective subiective?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Știrea face abstracție de diversitatea punctelor de vedere și a aspectelor problemei, punând accentul pe o singură abordare/ perspectivă?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Informația promovată aduce autorului sau unor grupuri de interese câștig economic, politic sau de altă natură?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question: "Lipsesc confirmările din surse autorizate, oficiale?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Informația este prezentată dintr-o perspectivă subiectivă, cu “argumente” emoționale? Mesajul face apel excesiv la emoțiile cititorului?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Informația este prezentată complet diferit și cu argumente obiective de către alte surse media?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Este informația prezentată la modul impersonal (se crede, se aude, se spune, există “specialiști” care susțin că….)",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question: "Sunt denigrate în text punctele de vedere contrare?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Este textul agresiv (scris cu majuscule, limbaj dur, atitudine intolerantă)?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Lipsesc dovezile evidente că “specialiștii” la care se face referire în material au făcut afirmațiile pretinse de material?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
  {
    question:
      "Se pot constata abateri, aproximări, re-interpretări, reformulări abuzive ale mesajelor formulate de autorități/ specialiști/ surse oficiale?",
    options: [
      { text: "Da", score: -1 },
      { text: "Nu", score: 1 },
      { text: "Nu sunt sigur", score: 0 },
    ],
  },
];

let currentQuestionIndex = 0;
let score = 0;
let nuSuntSigurCount = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const resultElement = document.getElementById("result");
const restartButton = document.getElementById("restart-btn");

restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nuSuntSigurCount = 0;
  restartButton.style.display = "none";
  resultElement.innerText = "";
  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("btn");
    button.addEventListener("click", () =>
      selectAnswer(option.score, option.text)
    );
    optionsContainer.appendChild(button);
  });
}

function selectAnswer(scoreValue, optionText) {
  score += scoreValue;
  if (optionText === "Nu sunt sigur") {
    nuSuntSigurCount++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  optionsContainer.innerHTML = "";
  questionElement.innerText = "";

  let message = "";
  if (nuSuntSigurCount >= quizData.length - 4) {
    message = "Nerelevant";
  } else if (score <= 5) {
    message = "Material cu grad mic de credibilitate";
  } else {
    message = "Material cu grad de credibilitate ridicat";
  }

  resultElement.innerText = message;
  restartButton.style.display = "block";
}

function restartQuiz() {
  startQuiz();
}

startQuiz();
