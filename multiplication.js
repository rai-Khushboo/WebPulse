
const num1 = Math.ceil(Math.random() * 10);//to get number between 0 and 9 we have multiplied it by 10
//and the ceil function is used to give real numbers b/w 0 and 9

const num2 = Math.ceil(Math.random() * 10)

const questionE1 = document.getElementById('question');

questionE1.innerText = `What is ${num1} multiply by ${num2}?`;

const formEl = document.getElementById('form');

const scoreEL = document.getElementById('score');

let score = JSON.parse(localStorage.getItem
    ("score"));
//It's updating the value of score inside the localstorage.
// In case of score set it as zero
if (!score) {
    score = 0;
}

scoreEL.innerText = `score: ${score}`;

const inputEl = document.getElementById('input');

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;//+ sign is added to make it as a number from string.
    console.log(userAns, typeof userAns);
    //comparing userans and correct ans
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
        //correct answer increases the score
        console.log(score);
    } else {
        //IN case of incorrect answer decrease the score
        score--;
        updateLocalStorage();
        console.log(score);
    }

});
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
