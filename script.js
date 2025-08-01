import { questionSets } from './questions.js';

// --- Particle Animation ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}


const mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(173, 216, 230, 0.5)'; // Light blue particles
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function initParticles() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'rgba(173, 216, 230, 0.5)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animateParticles() {
    requestAnimationFrame(animateParticles);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}

initParticles();
animateParticles();

window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80);
    initParticles();
});


// --- Quiz Logic ---
let currentLanguage = '';
let questions = [];
let currentIndex = 0;
let score = 0;

// Main containers
const homeScreen = document.getElementById('home-screen');
const quizContainer = document.getElementById('quiz-container');

// Screen elements within the quiz container
const languageScreen = document.getElementById('language-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

// Button elements
const enterQuizBtn = document.getElementById('enter-quiz-btn');
const startQuizBtn = document.getElementById('start-quiz-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

// Quiz elements
const questionElem = document.getElementById('question');
const questionNumberElem = document.getElementById('question-number');
const answersElem = document.getElementById('answers');
const explanationElem = document.getElementById('explanation');
const progressBar = document.getElementById('progress-bar');
const currentScoreElem = document.getElementById('current-score');

// Result elements
const resultContent = document.getElementById('result-content');
const resultIconContainer = document.getElementById('result-icon-container');
const resultTitle = document.getElementById('result-title');
const finalScoreElem = document.getElementById('score');
const resultMessageElem = document.getElementById('result-message');

// Event Listeners
enterQuizBtn.addEventListener('click', showQuizContainer);
startQuizBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', goHome);

// Screen Flow Functions
function showQuizContainer() {
  homeScreen.classList.add('hide');
  quizContainer.classList.remove('hide');
  languageScreen.classList.remove('hide');
  quizScreen.classList.add('hide');
  resultScreen.classList.add('hide');
}

function goHome() {
    quizContainer.classList.add('hide');
    homeScreen.classList.remove('hide');
}

// Quiz Logic Functions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startQuiz() {
  currentLanguage = document.getElementById('language-select').value;
  const limit = parseInt(document.getElementById('question-limit').value);
  questions = [...questionSets[currentLanguage]];
  shuffle(questions);
  questions = questions.slice(0, limit); // Limit number of questions

  currentIndex = 0;
  score = 0;
  currentScoreElem.innerText = score;

  languageScreen.classList.add('hide');
  quizScreen.classList.remove('hide');
  showQuestion();
}


function showQuestion() {
  resetState();
  const currentQuestion = questions[currentIndex];

  questionNumberElem.innerText = `Question ${currentIndex + 1} of ${questions.length}`;
  questionElem.innerText = currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  shuffle(shuffledAnswers);

  shuffledAnswers.forEach(answer => {
    const btn = document.createElement('button');
    btn.innerText = answer.text;
    btn.classList.add('answer-btn');
    btn.onclick = () => selectAnswer(btn, answer.correct, currentQuestion.explanation);
    answersElem.appendChild(btn);
  });

  updateProgress();
}

function resetState() {
  nextBtn.classList.add('hide');
  answersElem.innerHTML = '';
  explanationElem.classList.add('hide');
  explanationElem.innerText = '';
}

function selectAnswer(button, isCorrect, explanation) {
  Array.from(answersElem.children).forEach(btn => {
    btn.disabled = true;
  });

  if (isCorrect) {
    button.classList.add('correct');
    score++;
    currentScoreElem.innerText = score;
  } else {
    button.classList.add('wrong');

    const currentQuestion = questions[currentIndex];
    const correct = currentQuestion.answers.find(ans => ans.correct);
    Array.from(answersElem.children).forEach(btn => {
      if (btn.innerText === correct.text) {
        btn.classList.add('correct');
      }
    });
  }

  if (explanation) {
    explanationElem.innerText = explanation;
    explanationElem.classList.remove('hide');
  }

  nextBtn.classList.remove('hide');
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function updateProgress() {
  const percent = ((currentIndex + 1) / questions.length) * 100;
  progressBar.style.width = `${percent}%`;
}

function showResult() {
  quizScreen.classList.add('hide');
  resultScreen.classList.remove('hide');
  finalScoreElem.innerText = `${score} / ${questions.length}`;

  resultContent.classList.remove('result-high-score', 'result-low-score');

  const percentage = (score / questions.length) * 100;

  if (percentage >= 75) {
    resultContent.classList.add('result-high-score');
    resultIconContainer.innerHTML = '<i class="fas fa-trophy"></i>';
    resultTitle.innerText = "Excellent Work!";
    if (percentage === 100) {
      resultMessageElem.innerText = "Flawless Victory! You're a true code master.";
      launchConfetti();
    } else {
        resultMessageElem.innerText = "You really know your stuff. Well done!";
    }
  } else {
    resultContent.classList.add('result-low-score');
    resultIconContainer.innerHTML = '<i class="fas fa-book-reader"></i>';
    resultTitle.innerText = "Keep Going!";
     if (percentage >= 50) {
        resultMessageElem.innerText = "Good effort! A little more practice and you'll be an expert.";
     } else {
        resultMessageElem.innerText = "Every master was once a beginner. Keep learning and try again!";
     }
  }
}