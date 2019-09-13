var pairs = [
    {
        question: "2 + 2 =",
        answers: [
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
            {
                answer: 4,
                status: false,
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
    }

]

$(document).ready(function () {
    $("#quiz").hide();
    $("#score").hide();

    
})

$(document).on("click", "#startbutton", function() {

    $("#start").hide();
    $("#quiz").show();
    $("#question").append(pairs[0].question);
    for (var j = 0; j < pairs[0].answers.length; j++) {
        $("#answers").append("<a class= 'btn btn-primary answer' id='option-" + j + "'>" + pairs[0].answers[j].answer + "</a> <br>");
    }
    pairs[0].displayed = true;
})





$(document).on("click", ".answer", function() {
    $("#question").empty();
    $("#answers").empty();
    $("#quiz").show();
    $("#question").append(pairs[1].question);
    for (var j = 0; j < pairs[1].answers.length; j++) {
        $("#answers").append("<a class= 'btn btn-primary answer' id='option-" + j + "'>" + pairs[1].answers[j].answer + "</a> <br>");
    }
    pairs[1].displayed = true;
})
// for ( var i = 0; i < pairs.length ; i++) {
//     if (pairs[i].displayed = false) {
//         $("#question").append(pairs[i].question);
//         for (var j = 0; j < pairs[i].answers.length; j++) {
//             $("#answers").append("<a class= 'btn btn-primary' id='option-" + j + "'>" + pairs[i].answers[j].answer + "</a> <br>");
//         }
//         pairs[i].displayed = true;
//     }   
    
// }