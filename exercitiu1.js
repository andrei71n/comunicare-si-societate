const questions = [
  {
    question: "Nonverbalul deține în comunicare o pondere de:",
    answers: [
      { text: "mai puțin de 15%", correct: false },
      { text: "5%", correct: false },
      { text: "25%", correct: false },
      { text: "peste 50%", correct: true },
    ],
  },
  {
    question: "Comunicarea intrapersonală este:",
    answers: [
      { text: "o idee", correct: false },
      { text: "dialogul dintre două persoane", correct: false },
      { text: "este comunicarea cu sine, monologul interior", correct: true },
      {
        text: "dialogul într-un cadru intim de până la 10 persoane",
        correct: false,
      },
    ],
  },
  {
    question: "Limbajul corpului este:",
    answers: [
      { text: "poziția trupului, expresia feței, gesturi", correct: true },
      { text: "unitatea de bază a comunicării", correct: false },
      {
        text: "modul în care utilizăm spațiul personal, social, intim, public, de muncă",
        correct: false,
      },
      {
        text: "a veni la timp sau a întârzia la o întâlnire, a alege sau nu să îți petreci timpul cu cineva",
        correct: false,
      },
    ],
  },
  {
    question: "Expeditorul / Sursa este:",
    answers: [
      {
        text: "procesul prin care receptorul înțelege, decodifică simbolurile transmise de sursă",
        correct: false,
      },
      { text: "cel care recepționează mesajul", correct: false },
      { text: "cel care emite mesajul", correct: true },
      {
        text: "un set de reacții ale receptorului după decodificarea mesajului recepțat",
        correct: false,
      },
    ],
  },
  {
    question: "Feedback-ul este:",
    answers: [
      { text: "o manifestare sonoră specific umană", correct: false },
      {
        text: "parte a răspunsului receptorului care ajunge la sursă",
        correct: true,
      },
      { text: "ansamblul semnelor transmise de emițător", correct: false },
      {
        text: "un mijloc de a încuraja interlocutorul să ia cuvântul sau să continue să vorbească",
        correct: false,
      },
    ],
  },
  {
    question: "Comunicarea este",
    answers: [
      { text: "continuă", correct: true },
      {
        text: "modul în care utilizăm spațiul personal, social, intim, public, de muncă",
        correct: false,
      },
      { text: "data de informaţie", correct: false },
      { text: "abilitatea şi arta de a vorbi răspicat", correct: false },
    ],
  },
  {
    question: "Comunicarea interpersonală este ",
    answers: [
      { text: "monologul interior", correct: false },
      {
        text: "dialogul într-un cadru intim de până la 10 persoane",
        correct: false,
      },
      { text: "o analiză amănunţită bazată pe discutarea", correct: false },
      { text: "dialogul dintre două persoane", correct: true },
    ],
  },
  {
    question: "Toastul este:",
    answers: [
      { text: "un scurt discurs ţinut cu un anumit prilej", correct: true },
      {
        text: "o scurtă cuvântare ocazională, cu o încărcătură afectivă mare",
        correct: false,
      },
      { text: "o analiză amănunţită bazată pe discutarea", correct: false },
      {
        text: "o expunere în care se tratează o problemă în mod ştiinţific şi amănunţit",
        correct: false,
      },
    ],
  },
  {
    question: "Comunicarea publică poate fi:",
    answers: [
      { text: "multipolară", correct: false },
      { text: "acustică", correct: false },
      { text: "artistică", correct: true },
      { text: "bipolară", correct: false },
    ],
  },
  {
    question: "Semnalul este:",
    answers: [
      {
        text: "codificat în „limba”emiţătorului şi transmis prin intermediul unui canal",
        correct: false,
      },
      { text: "recepţionat şi decodificat la destinaţie", correct: true },
      { text: "feedbackul", correct: false },
      { text: "un emiţător", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question2");
const answerButtons = document.getElementById("answer-buttons2");
const nextButton = document.getElementById("next-btn2");
const congrats = document.getElementById("inceput2");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Următoarea întrebare";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `Ai răspuns corect la ${score} din ${questions.length} întrebări.`;
  nextButton.innerHTML = "Începe din nou";
  nextButton.style.display = "block";
  if (score <= 4) congrats.innerHTML = "Ouch, sigur poți mai mult!";
  else if (score <= 7) congrats.innerHTML = "Bravo, dar se putea și mai bine!";
  else congrats.innerHTML = "Felicitări, Te-ai descurcat foarte bine!";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
    congrats.innerHTML = "Exercițiu";
  }
});

startQuiz();
