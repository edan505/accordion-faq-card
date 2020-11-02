let faqComponents = document.querySelectorAll(".FAQ-QUESTIONS");
let answerCards = document.querySelectorAll(".hidden-answer");
let buttonDivs = document.querySelectorAll(".button-div");
let questionTexts = document.querySelectorAll(".question-text");
let illustrationBox = document.querySelector(".illustration-box");

for (let i = 0; i <= faqComponents.length - 1; i++) {
    faqComponents[i].addEventListener("click", function () {
       
        questionTexts[i].classList.toggle("question-text-clicked");
        buttonDivs[i].classList.toggle("button-div-clicked");
        answerCards[i].classList.toggle("hidden-answer-click");
        if (!answerCards[i].classList.contains("hidden-answer-click")){
            illustrationBox.classList.remove("illustration-box-clicked");
        } else {
            illustrationBox.classList.add("illustration-box-clicked");
        }
    });
}

