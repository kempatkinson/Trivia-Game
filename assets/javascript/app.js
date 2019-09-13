$(document).ready(function () {
    var pairs = [
        {
            question: "2 + 2",
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
                    answer: 2,
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
        console.log(pairs[i])
        for (var j = 0; j < pairs[i].answers.length; j++) {
            console.log(pairs[i].answers[j])


        }
        
    }


})


$(document).on("click", "#startbutton", function() {

    $("#start").empty();
    

})