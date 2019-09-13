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
    }

]

$(document).ready(function () {
    $("#quiz").hide();
    $("#score").hide();

    
})

$(document).on("click", "#startbutton", function() {

    $("#start").hide();
    $("#quiz").show();
    $("#question").append("<p id='question-" + 0 + "'>" + pairs[0].question + "</p>");
    for (var j = 0; j < pairs[0].answers.length; j++) {
        $("#answers").append("<a class= 'btn btn-primary' id='option-" + j + "'>" + pairs[0].answers[j].answer + "</a> <br>");
    }
    pairs[0].displayed = true;
})

function NextQuestion() {
    

}
// $(document).on("click", ".answer", function() {
//     for ( var i = 0; i < pairs.length ; i++) {
//         console.log ($("#question-"+i)

        
//     }

// })