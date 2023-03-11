let startDiv = document.getElementById('start');
let questionDiv = document.getElementById('question');

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
    startDiv.setAttribute('class', 'hidden');
    questionDiv.setAttribute('class', 'visible');
    nextQuestion();
}

function nextQuestion()
{

}

function reset()
{

}
