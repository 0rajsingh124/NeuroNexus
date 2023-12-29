let quizData = [];

function addQuestion() {
    const question = document.getElementById('question').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    const option3 = document.getElementById('option3').value;
    const correctAnswer = document.getElementById('correctAnswer').value;

    const newQuestion = {
        question,
        options: [option1, option2, option3],
        correctAnswer
    };

    quizData.push(newQuestion);

    displayQuiz();
}

function displayQuiz() {
    const quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    quizData.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                <li>${question.options[0]}</li>
                <li>${question.options[1]}</li>
                <li>${question.options[2]}</li>
            </ul>
            <p>Correct Answer: ${question.correctAnswer}</p>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById('quizForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Quiz submitted:', quizData);
});
