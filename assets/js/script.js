const buttons = document.querySelector(".buttons");
const question = document.querySelector(".code-quiz").children[1];

let li1 = document.createElement("button");
let li2 = document.createElement("button");
let li3 = document.createElement("button");
let li4 = document.createElement("button");

class questionClass
{
    constructor(question, answer, fakes)
    {
        this.question = question;
        this.answer = answer;
        this.fakes = fakes;
    }
    questionList(x)
    {
        return this.answer + this.fakes;
    }
}

class questionHTML
{
    constructor(question, answer, fakes)
    {
        this.question = question;
        this.answer = answer;
        this.fakes = fakes;
    }
    questionList(x)
    {
        return this.answer + this.fakes;
    }
}

const questionOne = new questionClass(
    "What year did Neil Armstrong and Buzz Aldrin land their Apollo Lunar Module on the Moon and become the " +
    "first people to step onto the Moon's surface?",
    ["1969"],
    ["1999", "1936", "1977"]);

const questionTwo = new questionClass(
    "Who was the last leader of the Soviet Union before its collapse in 1991?",
    ["Mikhail Gorbachev"],
    ["Joseph Stalin", "Winston Churchill", "Donald Trump"]);

const questionThree = new questionClass(
    "What was said to be something only US president Richard Nixon could do?",
    ["Go to China"],
    ["Wear a tan suit", "Balance the budget", "Beat Harry Truman"]);

function start()
{
    buttons.removeEventListener("click", start);
    buttons.removeChild(buttons.firstElementChild);
    question.textContent = questionOne.question;
    li1.textContent = questionOne.answer;
    li2.textContent = questionOne.fakes[0];
    li3.textContent = questionOne.fakes[1];
    li4.textContent = questionOne.fakes[2];
    buttons.appendChild(li1);
    buttons.appendChild(li2);
    buttons.appendChild(li3);
    buttons.appendChild(li4);
    buttons.children[0].addEventListener("click", reset);
    buttons.children[1].addEventListener("click", reset);
    buttons.children[2].addEventListener("click", reset);
    buttons.children[3].addEventListener("click", reset);
}

function nextQuestion()
{
    question.textContent = questionTwo.question;
    li1.textContent = questionTwo.answer;
    li2.textContent = questionTwo.fakes[0];
    li3.textContent = questionTwo.fakes[1];
    li4.textContent = questionTwo.fakes[2];
    buttons.appendChild(li1);
    buttons.appendChild(li2);
    buttons.appendChild(li3);
    buttons.appendChild(li4);
    buttons.children[0].addEventListener("click", reset);
    buttons.children[1].addEventListener("click", reset);
    buttons.children[2].addEventListener("click", reset);
    buttons.children[3].addEventListener("click", reset);
}

function reset()
{
    buttons.children[0].removeEventListener("click", reset);
    buttons.children[1].removeEventListener("click", reset);
    buttons.children[2].removeEventListener("click", reset);
    buttons.children[3].removeEventListener("click", reset);
    buttons.removeChild(buttons.lastElementChild);
    buttons.removeChild(buttons.lastElementChild);
    buttons.removeChild(buttons.lastElementChild);
    li1.textContent = "Start!";
    buttons.children[0].addEventListener("click", start);
}

buttons.children[0].addEventListener("click", start);