let faqComponents = document.querySelectorAll(".FAQ-QUESTIONS");
let answerCards = document.querySelectorAll(".hidden-answer");
let buttonDivs = document.querySelectorAll(".button-div");
let questionTexts = document.querySelectorAll(".question-text");
let illustrationBox = document.querySelector(".illustration-box");

for (let i = 0; i <= faqComponents.length - 1; i++) {
    faqComponents[i].addEventListener("click", function () {
        for (let k = 0; k <= faqComponents.length - 1; k++) {
            if (k != i) {
                questionTexts[k].classList.remove("question-text-clicked");
                buttonDivs[k].classList.remove("button-div-clicked");
                answerCards[k].classList.remove("hidden-answer-click");
            }
        }
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

