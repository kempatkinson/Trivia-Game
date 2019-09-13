var pairs = [
    {
        question: "2 + 2 =",
        answers: [
            {
                answer: 1,
                status: false,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 22,
                status: false,
            },
            {
                answer: 4,
                status: true,
            },
        ],
        displayed: false
    },
    {
        question: "2 + 3 =",
        answers: [
            {
                answer: 5,
                status: true,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 3,
                status: false,
            },
            {
                answer: 4,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "1 + 2 =",
        answers: [
            {
                answer: 1,
                status: false,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 3,
                status: true,
            },
            {
                answer: 4,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "1 + 1 =",
        answers: [
            {
                answer: 1,
                status: false,
            },
            {
                answer: 2,
                status: true,
            },
            {
                answer: 3,
                status: false,
            },
            {
                answer: 4,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "1 + 0 =",
        answers: [
            {
                answer: 0,
                status: false,
            },
            {
                answer: 1,
                status: true,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 3,
                status: false,
            },

        ],
        displayed: false
    },
    {
        question: "2 * 2 =",
        answers: [
            {
                answer: 1,
                status: false,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 3,
                status: false,
            },
            {
                answer: 4,
                status: true,
            },
        ],
        displayed: false
    },
    {
        question: "2 + 5 =",
        answers: [
            {
                answer: 7,
                status: true,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 205,
                status: false,
            },
            {
                answer: 25,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "5 + 6 + 2 =",
        answers: [
            {
                answer: 562,
                status: false,
            },
            {
                answer: 58,
                status: false,
            },
            {
                answer: 13,
                status: true,
            },
            {
                answer: 8,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "10 + 1 =",
        answers: [
            {
                answer: 101,
                status: false,
            },
            {
                answer: 10,
                status: false,
            },
            {
                answer: 11,
                status: true,
            },
            {
                answer: 4,
                status: false,
            },
        ],
        displayed: false
    },
    {
        question: "0 + 0 =",
        answers: [
            {
                answer: 0,
                status: true,
            },
            {
                answer: 1,
                status: false,
            },
            {
                answer: 2,
                status: false,
            },
            {
                answer: 3,
                status: false,
            },

        ],
        displayed: false
    },

]

$(document).ready(function () {
    $("#quiz").hide();
    $("#score").hide();
})

$(document).on("click", "#startbutton", function () {

    $("#start").hide();
    $("#quiz").show();
    $("#question").append(pairs[0].question);
    for (var j = 0; j < pairs[0].answers.length; j++) {
        $("#answers").append("<a class= 'btn btn-primary answer' id='option-" + j + "'>" + pairs[0].answers[j].answer + "</a> <br>");
    }
    pairs[0].displayed = true;
    run();
})

var correctcount = 0;
var wrongcount = 0;

$(document).on("click", ".answer", function () {
    for (var i = 0; i < pairs.length; i++) {
        if (pairs[i].displayed == true) {
            // log if answer is corect
            for (j = 0; j < pairs[i].answers.length; j++) {
                if (this.id == ("option-" + (j))) {
                    if (pairs[i].answers[j].status == true) {
                        correctcount++;
                        console.log("Correct:" + correctcount);

                    } else if (pairs[i].answers[j].status == false) {
                        wrongcount++;
                        console.log("Wrong:" + wrongcount);
                    }
                }
            }
            pairs[i].displayed = false;
            //set new question
            $("#question").empty();
            $("#answers").empty();

            // if there is a valid question in front of current index
            if ((i + 1) < pairs.length) {
                $("#question").append(pairs[i + 1].question);
                for (var j = 0; j < pairs[i + 1].answers.length; j++) {
                    $("#answers").append("<a class= 'btn btn-primary answer' id='option-" + j + "'>" + pairs[i + 1].answers[j].answer + "</a> <br>");
                }
                pairs[i + 1].displayed = true;
                run();
                break;

            } else {
                $("#quiz").hide();
                $("#score").show();
                $("#correct").text(correctcount)
                $("#false").text(wrongcount)
            }
        }

    }
})

function decrement() {
    //  Decrease number by one.
    number--;
    //  Show the number in the #show-number tag.
    $("#timer").html("<h2>" + number + "</h2>");
    //  Once number hits zero...
    if (number === 0) {
        // find where it is
        for (var i = 0; i < pairs.length; i++) {
            if (pairs[i].displayed == true) {
                //add wrong
                wrongcount++;

                //switch question off
                pairs[i].displayed = false;

                //empty question answers
                $("#question").empty();
                $("#answers").empty();

                //check for next question and append it
                if ((i + 1) < pairs.length) {
                    $("#question").append(pairs[i + 1].question);
                    for (var j = 0; j < pairs[i + 1].answers.length; j++) {
                        $("#answers").append("<a class= 'btn btn-primary answer' id='option-" + j + "'>" + pairs[i + 1].answers[j].answer + "</a> <br>");
                    }
                    pairs[i + 1].displayed = true;
                    run();
                    break;

                } else {
                    $("#quiz").hide();
                    $("#score").show();
                    $("#correct").text(correctcount)
                    $("#false").text(wrongcount)
                }
            }

        }
    }
}

var intervalId;
function run() {
    number = 30;
    $("#timer").html("<h2>" + number + "</h2>");
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

}