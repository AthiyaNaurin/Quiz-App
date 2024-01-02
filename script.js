const quizData = [
    {
       question: "What is the capital of France?",
       answers: ["Paris", "Berlin", "Madrid", "Rome"],
       correctAnswer: "Paris"
    },
    {
       question: "Which language has the most speakers?",
       answers: ["English", "Spanish", "Mandarin", "Hindi"],
       correctAnswer: "Mandarin"
    },
    {
       question: "What is the largest planet in our solar system?",
       answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
       correctAnswer: "Jupiter"
    },
    {
       question: "What is the closest star to the Sun?",
       answers: ["Proxima Centauri", "Sun", "Alpha Centauri", "Beta Centauri"],
       correctAnswer: "Proxima Centauri"
    },
    {
       question: "What is the official language of the European Union?",
       answers: ["English", "German", "French", "Esperanto"],
       correctAnswer: "Esperanto"
    }
   ];
   
   let score = 0;
   let currentQuestionIndex = 0;
   
   function loadQuestion() {
    const question = quizData[currentQuestionIndex].question;
    const answers = quizData[currentQuestionIndex].answers;
   
    document.getElementById("question").textContent = question;
   
    for (let i = 0; i < answers.length; i++) {
       const answerElement = document.getElementById(`answer${i + 1}`);
       answerElement.textContent = answers[i];
       answerElement.addEventListener("click", checkAnswer);
    }
   }
   
   function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
   
    if (selectedAnswer === correctAnswer) {
       score++;
    }
   
    currentQuestionIndex++;
   
    if (currentQuestionIndex < quizData.length) {
       loadQuestion();
    } else {
       showScore();
    }
   }
   
   function showScore() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("scoreText").textContent = `Your score is ${score} out of ${quizData.length}`;
   }
   
   window.onload = function() {
    loadQuestion();
   };