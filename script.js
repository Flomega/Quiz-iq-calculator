const questions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" },
    { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "Who discovered penicillin?", answer: "Alexander Fleming" },
    { question: "What is the tallest mountain in the world?", answer: "Mount Everest" },
    { question: "Who is the author of '1984'?", answer: "George Orwell" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What element does 'O' represent on the periodic table?", answer: "Oxygen" },
    { question: "What year did the Titanic sink?", answer: "1912" },
    { question: "Who painted 'The Starry Night'?", answer: "Vincent van Gogh" },
    { question: "What is the smallest planet in our solar system?", answer: "Mercury" },
    { question: "Who is known as the 'Father of Computers'?", answer: "Charles Babbage" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the longest river in the world?", answer: "Nile River" },
    { question: "Which country is known as the Land of the Rising Sun?", answer: "Japan" },
    { question: "Who wrote 'The Catcher in the Rye'?", answer: "J.D. Salinger" },
    { question: "What is the largest mammal in the world?", answer: "Blue Whale" },
    { question: "What is the currency of the United Kingdom?", answer: "Pound Sterling" },
    { question: "What is the tallest building in the world?", answer: "Burj Khalifa" },
    { question: "Which planet is known for its rings?", answer: "Saturn" },
    { question: "What is the main ingredient in guacamole?", answer: "Avocado" },
    { question: "Who developed the theory of relativity?", answer: "Albert Einstein" },
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "Which ocean is the largest?", answer: "Pacific Ocean" },
    { question: "What is the chemical symbol for silver?", answer: "Ag" },
    { question: "What is the fastest land animal?", answer: "Cheetah" },
    { question: "Who is known as the King of Pop?", answer: "Michael Jackson" },
    { question: "Which country is famous for tulips and windmills?", answer: "Netherlands" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who wrote 'Pride and Prejudice'?", answer: "Jane Austen" },
    { question: "What is the largest desert in the world?", answer: "Antarctic Desert" },
    { question: "Which planet is closest to the sun?", answer: "Mercury" },
    { question: "What is the smallest bone in the human body?", answer: "Stapes" },
    { question: "Who invented the telephone?", answer: "Alexander Graham Bell" },
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "What is the chemical symbol for helium?", answer: "He" },
    { question: "Who wrote 'The Great Gatsby'?", answer: "F. Scott Fitzgerald" },
    { question: "Which element has the atomic number 1?", answer: "Hydrogen" },
    { question: "What is the hardest natural substance on Earth?", answer: "Diamond" },
    { question: "Which planet is known as the Morning Star?", answer: "Venus" },
    { question: "Who painted 'The Persistence of Memory'?", answer: "Salvador Dalí" },
    { question: "What is the main language spoken in Brazil?", answer: "Portuguese" },
    { question: "What is the capital of South Korea?", answer: "Seoul" },
    { question: "Which organ in the human body produces insulin?", answer: "Pancreas" },
    { question: "What is the capital of Spain?", answer: "Madrid" },
    { question: "Who wrote 'The Hobbit'?", answer: "J.R.R. Tolkien" },
    { question: "What is the most abundant gas in Earth's atmosphere?", answer: "Nitrogen" },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter" },
    { question: "What is the name of the galaxy we live in?", answer: "Milky Way" },
    { question: "Who discovered gravity?", answer: "Isaac Newton" },
    { question: "What is the currency of Japan?", answer: "Yen" },
    { question: "What is the chemical symbol for potassium?", answer: "K" },
    { question: "Who was the first President of the United States?", answer: "George Washington" }
];

let selectedQuestions = [];
let score = 0;
let currentQuestionIndex = 0;

document.getElementById('startBtn').addEventListener('click', startQuiz);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

function startQuiz() {
    selectedQuestions = [];
    score = 0;
    currentQuestionIndex = 0;

    // Randomly select 10 questions
    while (selectedQuestions.length < 10) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const question = questions[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
    }

    showQuestion();
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('restartBtn').style.display = 'block';
}

function showQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        showResult();
        return;
    }

    const question = selectedQuestions[currentQuestionIndex];
    const quizDiv = document.getElementById('quiz');
    quizDiv.innerHTML = `
        <div class="question">${question.question}</div>
        <input type="text" id="answer" placeholder="Your answer" />
        <button onclick="checkAnswer()">Submit Answer</button>
    `;
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const userAnswer = answerInput.value.trim();
    const question = selectedQuestions[currentQuestionIndex];

    if (userAnswer.toLowerCase() === question.answer.toLowerCase()) {
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong. The correct answer is: ${question.answer}`);
    }

    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your final score is: ${score} out of ${selectedQuestions.length}`;
}

function restartQuiz() {
    startQuiz();
    document.getElementById('result').innerHTML = '';
}
