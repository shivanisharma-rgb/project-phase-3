// Create elements
let startBtn = document.getElementById("startBtn");
let quizBox = document.getElementById("quizBox");
let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let nextBtn = document.getElementById("nextBtn");
let scoreEl = document.getElementById("score");

let questions = [];
let currentIndex = 0;
let score = 0;

// Fetch API
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data => {
            questions = data.results;
            startBtn.classList.add("hide");
            quizBox.classList.remove("hide");
            showQuestion();
        });
}

function showQuestion() {
    resetState();
    let currentQ = questions[currentIndex];

    questionEl.innerHTML = currentQ.question;

    let answers = [...currentQ.incorrect_answers];
    answers.push(currentQ.correct_answer);
    answers.sort(() => Math.random() - 0.5);

    answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.innerHTML = answer;
        btn.addEventListener("click", () => selectAnswer(btn, answer, currentQ.correct_answer));
        answersEl.appendChild(btn);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    answersEl.innerHTML = "";
}

function selectAnswer(button, answer, correct) {
    if (answer === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    quizBox.classList.add("hide");
    scoreEl.innerText = "Your Score: " + score;
}