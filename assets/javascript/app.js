$(document).ready(function () {
    $("#quiz").hide();
    $("#score").hide();
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
            ]
        }

    ]
    
    for ( var i = 0; i < pairs.length ; i++) {
        $("#question").append("<p id='question-" + i + "'>" + pairs[i].question + "</p>");
        for (var j = 0; j < pairs[i].answers.length; j++) {
            $("#answers").append("<a class= 'btn btn-primary' id='option-" + j + "'>" + pairs[i].answers[j].answer + "</a> <br>");
        }
        
    }
})


$(document).on("click", "#startbutton", function() {

    $("#start").hide();
    $("#quiz").show();

})

// $(document).on("click", ".answer", function() {
//     for ( var i = 0; i < pairs.length ; i++) {
//         console.log ($("#question-"+i)

        
//     }

// })