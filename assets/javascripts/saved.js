$(document).ready(function() {
    var jobsArray = JSON.parse(localStorage.getItem('JOBS')) || [];

    var newsArray = JSON.parse(localStorage.getItem('ARTICLES')) || [];

    var toggle = true;

    for (var i = 0; i < jobsArray.length; i++) {
        var jobsCard = $('<div class="card-panel">');
        jobsCard.append(jobsArray[i]);
        $("#jobTab").append(jobsCard);
        $(".saveBtn").remove();
    }

    for (var l = 0; l < newsArray.length; l++) {
        var articleCard = $('<div class="card-panel">');
        articleCard.append(newsArray[l]);
        $("#articleTab").append(articleCard);
        $(".saveBtn").remove();
    }

     // displays jobs on toggle
     $('#jobButton').click(function () {
        if (toggle === false) {
            $('#articleTab').hide()
            $('#jobTab').show()
            toggle = true;
        }
    })
    //displays articles on toggle
    $('#articleButton').click(function () {
        if (toggle === true) {
            $('#jobTab').hide()
            $('#articleTab').show()
            toggle = false;
        }
    })


    var screenSize = window.matchMedia("(min-width: 993px)")

    function mediaQuery(screenSize) {
        if (screenSize.matches) {
            $('#articleTab').show()
            $('#jobTab').show()
        }
    }
    screenSize.addListener(mediaQuery);
})