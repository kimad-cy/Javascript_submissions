document.addEventListener("click", function(event) {
    if (event.target.classList.contains("potential-answer")) {
        let fieldset = event.target.closest("fieldset"); // Get the parent question container
        let answers = fieldset.querySelectorAll(".potential-answer");

        // Remove 'selected' class from all answers in this question
        answers.forEach(answer => answer.classList.remove("selected"));

        // Add 'selected' class only to the clicked answer
        event.target.classList.add("selected");
    }
});


function submit(){
    let score = 0;
    let result = document.getElementById("final-score");
    let correctAnswers = {
        0 : "Jupiter",
        1 : "William Shakespeare",
        2 : "Carbon Dioxide",
        3 : "Paris",
        4 : "Diamond"
    }
    let answers = document.querySelectorAll(".selected");
    let i = 0;
    answers.forEach(answer => {
        if(answer.textContent == correctAnswers[i]){
            score += 1;
            answer.classList = "correct";
        }else{
            answer.classList = "incorrect";
        }
        i+= 1

    })
    result.textContent =  `Your score : ${score} / 5 `;
    window.scrollTo({ top: 0, behavior: "smooth" });
    

}


for(let i =1;i<6;i++){
    let seconds = 30;
    let countdown = document.getElementById(`timer-${i}`);
    let interval = setInterval(updateCountdown,1000);
    function updateCountdown(){
        countdown.innerHTML = `Time left: ${seconds} seconds `;
        seconds --;
        if (seconds < 0){
            clearInterval(interval);
            countdown.innerHTML = "Time's up!";
            disableAnswers(i);
        }
    }
}

function disableAnswers(questionId) {
    const labels = document.querySelectorAll(`.q${questionId}`);
    labels.forEach(label => {
        label.style.pointerEvents = 'none';  // Disable clicking
        label.style.opacity = '0.4';  
    });
}