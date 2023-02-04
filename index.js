const choice0 = document.getElementById("choice0");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const btn0 = document.getElementById("btn0");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const questionText = document.getElementById("question-text")
const ProgressText = document.getElementById("progress");

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);
submitBtn.addEventListener("click", submit);
btn0.addEventListener("click", function () { Answered(1) });
btn1.addEventListener("click", function () { Answered(2) });
btn2.addEventListener("click", function () { Answered(3) });
btn3.addEventListener("click", function () { Answered(4) });

let currentQuestion = 0;

function Answered(index) {

	questions[currentQuestion].Answered = index;
	questions[currentQuestion].Score = 0;
	if (questions[currentQuestion].Answer == index) {
		questions[currentQuestion].Score = 1;
	}
	ProgressText.innerHTML = "Question  " + (currentQuestion + 1) + " of " + questions.length + " Answered " + String.fromCharCode(64 + index);// + " Score " + questions[currentQuestion].Score;
}
function DisplayQuiz(index) {
	questionText.innerHTML = questions[index].question;
	choice0.innerHTML = "A: " + questions[index].answers[0];
	choice1.innerHTML = "B: " + questions[index].answers[1];
	choice2.innerHTML = "C: " + questions[index].answers[2];
	choice3.innerHTML = "D: " + questions[index].answers[3];
	if (questions[index].Answered > 0) {
		ProgressText.innerHTML = "Question  " + (index + 1) + " of " + questions.length + " Answered " + String.fromCharCode(64 + questions[index].Answered)
	} else {
		ProgressText.innerHTML = "Question  " + (index + 1) + " of " + questions.length
	}
}

function StartQuiz() {
	currentQuestion = 0;
	DisplayQuiz(currentQuestion);
}

function next() {
	if (currentQuestion < (questions.length - 1)) {
		currentQuestion++;
	}
	DisplayQuiz(currentQuestion);
}

function prev() {
	if (currentQuestion > 0) {
		currentQuestion--;
	}
	DisplayQuiz(currentQuestion);
}

function submit() {
	let Score = 0;
	for (let i = 0; i < questions.length; i++) {
		Score += questions[i].Score;
	}
	let ScoreP = 100 * Score / questions.length;
	document.getElementById("ChoicenBut").innerHTML = "Correct Answers " + Score + " Out of " + (questions.length) + "<br><br><b> Score in % = " + ScoreP.toFixed(2) + "</b>";
	questionText.innerHTML = "<h3>Congratulations on submitting the Quiz!</h3> "
	ProgressText.innerHTML = "";
}