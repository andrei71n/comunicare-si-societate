const questions = [
  {
    question: "Decodificarea se referă la:",
    answers: [
      { text: "ansamblul semnelor transmise de emiţător", correct: false },
      {
        text: "partea răspunsului receptorului care ajunge la sursă",
        correct: false,
      },
      {
        text: "procesul prin care receptorul înţelege, decodifică simbolurile transmise de sursă",
        correct: true,
      },
      {
        text: "un set de reacţii ale receptorului după decodificarea mesajului receptat.",
        correct: false,
      },
    ],
  },
  {
    question: "Nu reprezintă parametri ai limbajului verbal:",
    answers: [
      { text: "stimulii vocali (intensitate, înălţime)", correct: false },
      {
        text: "semnalele mimicii (încruntare, îmbujorare, mirare, surpriză)",
        correct: true,
      },
      {
        text: "calităţile vocii (ritm, rezonanţă, viteză de vorbire)",
        correct: false,
      },
      {
        text: "caracteristicile vocale (râs, plâns, şoptit, oftat)",
        correct: false,
      },
    ],
  },
  {
    question:
      "Zâmbetul este un instrument care facilitează comunicarea, deoarece:",
    answers: [
      {
        text: "poate fi dispreţuitor, răutăcios, batjocoritor",
        correct: false,
      },
      {
        text: "se referă la pauzele făcute pentru a da interlocutorului posibilitatea să se exprime",
        correct: false,
      },
      {
        text: "contribuie substanţial la formarea climatului de încredere şi deschidere între interlocutori",
        correct: true,
      },
      {
        text: "ne ajută să percepem prim-planul, apoi planul secund şi, în cele din urmă, fundalul",
        correct: false,
      },
    ],
  },
  {
    question: "În comunicare, tăcerea:",
    answers: [
      {
        text: "comunică ceva: aprobare, dezaprobare, discreţie, raţiune, păstrarea unei taine, admiraţie",
        correct: true,
      },
      {
        text: "nu comunică nimic, este un spațiu vid al comunicării",
        correct: false,
      },
      {
        text: "contribuie substanţial la formarea climatului de încredere şi deschidere între interlocutori",
        correct: false,
      },
      {
        text: "ne ajută să ne apropiem afectiv de interlocutor, să-l înțelegem și să-l cunoaștem mai bine",
        correct: false,
      },
    ],
  },
  {
    question: "Comunicarea:",
    answers: [
      {
        text: "se încheie definitiv o dată cu preluarea sau receptarea mesajului",
        correct: false,
      },
      {
        text: "nu se încheie o dată cu preluarea sau receptarea mesajului",
        correct: true,
      },
      {
        text: "contribuie substanţial la potențarea conflictelor dintre oameni",
        correct: false,
      },
      {
        text: "este un proces unilateral, egoist, întrucât omului îi este dat să fie prin excelență singur",
        correct: false,
      },
    ],
  },
  {
    question: "J.J. Van  Cuilenburg definește comunicarea drept:",
    answers: [
      { text: "proces de manipulare", correct: false },
      { text: "sistem complex, care trebuie înţeles holistic", correct: false },
      {
        text: "proces prin care un emiţător transmite informaţie receptorului prin intermediul unui canal, cu scopul de a produce receptorului anumite efecte",
        correct: true,
      },
      {
        text: "fapt situat la intersecţia dintre comunicarea autentică şi reprezentarea realităţii",
        correct: false,
      },
    ],
  },
  {
    question: "Nevoia de comunicare nu poate rezulta din faptul că",
    answers: [
      {
        text: "avem nevoie unii de alţii pentru siguranţa noastră, pentru confortul nostru, pentru prietenie şi dragoste",
        correct: false,
      },
      { text: "suntem fiinţe sociale", correct: false },
      {
        text: "avem nevoie unii de alţii pentru a ne maturiza prin dialog",
        correct: false,
      },
      {
        text: "suntem ființe singuratice, condamnate la egoism și izolare",
        correct: true,
      },
    ],
  },
  {
    question: "Nu este un scop esențial al comunicării:",
    answers: [
      { text: "să fim înţeleşi", correct: false },
      { text: "să  fim acceptaţi", correct: false },
      { text: "să provocăm o reacţie", correct: false },
      { text: "să ne impunem punctul de vedere", correct: true },
    ],
  },
  {
    question:
      "După criteriul mijloacelor fizice şi a analizatorului căreia se adresează stimulul mesajului putem identifica următoarele tipuri de comunicare:",
    answers: [
      { text: "acustică, tactilă, chimică, vizuală", correct: true },
      { text: "dictatorială și nedictatorială", correct: false },
      { text: "asertivă, agresivă, pasivă", correct: false },
      { text: "pozitivă, negativă", correct: false },
    ],
  },
  {
    question: "Este un blocaj de natură culturală în comunicare:",
    answers: [
      {
        text: "incapacitatea de a se interoga asupra evidentului",
        correct: false,
      },
      { text: "incapacitatea de a defini lucrurile", correct: false },
      { text: "dificultatea de a schimba modelul de gândire", correct: false },
      {
        text: "dorinţa de a se conforma modelelor sociale, dorinţa de apartenenţă",
        correct: true,
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const congrats = document.getElementById("inceput");

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
    congrats.innerHTML = "Răspunde-ți următoarelor întrebări:";
  }
});

startQuiz();
