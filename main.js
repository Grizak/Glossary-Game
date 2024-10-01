let glossary = [];
let currentQuestion = {};
let score = 0;

function startGame() {
    const glossaryInput = document.getElementById("glossaryInput").value;
    glossary = glossaryInput.split("\n").map(line => {
        const [term, translation] = line.split(" - ");
        return { term, translation };
    });
    
    document.getElementById("quizSection").style.display = "block";
    document.getElementById("glossaryInput").style.display = "none";
    document.getElementById("startbtn").style.display = "none";
    askQuestion();
}

function askQuestion() {
    currentQuestion = glossary[Math.floor(Math.random() * glossary.length)];
    document.getElementById("question").innerText = `What is the translation of: ${currentQuestion.term}?`;
}

function checkAnswer() {
    const userAnswer = document.getElementById("answerInput").value.trim();
    const feedback = document.getElementById("feedback");

    if (userAnswer.toLowerCase() === currentQuestion.translation.toLowerCase()) {
        feedback.innerText = "Correct!";
        score++;
    } else {
        feedback.innerText = `Incorrect! The correct answer was: ${currentQuestion.translation}`;
    }

    document.getElementById("answerInput").value = '';
    askQuestion();
}
