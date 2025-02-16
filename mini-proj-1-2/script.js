document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const amount = document.getElementById('amount').value;
    const type = document.getElementById('type').value;

    // Construct API URL dynamically (excluding "any" values)
    let url = `https://opentdb.com/api.php?amount=${amount}`;
    if (category !== "any") url += `&category=${category}`;
    if (difficulty !== "any") url += `&difficulty=${difficulty}`;
    if (type !== "any") url += `&type=${type}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const quizContainer = document.getElementById('quiz-container');
            quizContainer.innerHTML = '';

            const correctAnswers = data.results.map(q => q.correct_answer);

            if (data.results.length === 0) {
                quizContainer.innerHTML = "<p>No questions found. Try a different category or difficulty.</p>";
                return;
            }

            data.results.forEach((question, index) => {
                const questionElement = document.createElement('div');
                questionElement.innerHTML = `
                    <h3>${index + 1}. ${question.question}</h3>
                    ${getAnswersHtml(question,index)}
                `;
                quizContainer.appendChild(questionElement);
            });

            const submit_answer = document.createElement('button');
            submit_answer.textContent = 'Submit Answers';
            submit_answer.classList.add("final-button");
            quizContainer.appendChild(submit_answer);

            submit_answer.addEventListener('click', function () {
                let score = 0;
    
                data.results.forEach((question, index) => {
                    const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
    
                    if (selectedAnswer && selectedAnswer.value === correctAnswers[index]) {
                        score++; // Incrémenter si la réponse est correcte
                    }
                });
    
                // Afficher le score
                let result = document.createElement('p');
                result.textContent =  `Your score : ${score}/${data.results.length} `;
                result.classList.add("final-result");
                quizContainer.insertBefore(result, quizContainer.firstChild);
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        })
        .catch(error => console.log('Error fetching trivia questions:', error));


    
});

function getAnswersHtml(question,index) {
    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort(() => Math.random() - 0.5); // Shuffle answers

    return answers.map(answer => `
        <label>
            <input type="radio" name="q${index}" value="${answer}">
            ${answer}
        </label><br>
    `).join('');
}

