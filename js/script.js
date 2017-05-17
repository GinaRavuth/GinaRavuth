$(document).ready(function() {
    $(".about").css({
        opacity: 0
    }).animate({
        opacity: 1,
        top: 0
    }, {
        duration: 900
    });

    $("#ordino").click(function() {
        $("#port-content").show("slow");
        $("#port-content").load("./html/_ordino.html");

         $(".portfolio").hide("slow");

        $(".about").css({
            "display": "none"
        });
        $(".contact").css({
            "display": "none"
        });
    });

    $("#portfolio-link").click(function () {
        $(".portfolio").show("slow");

        $(".about").css({
            "display": "none"
        });
        $(".contact").css({
            "display": "none"
        });
    });

    $("#contact-link").click(function () {
        $(".contact").show("slow");
        
        $(".about").css({
            "display": "none"
        });
        $(".portfolio").css({
            "display": "none"
        });
    });

    $("#about-link").click(function () {
        $(".about").show("slow");

        $(".contact").css({
            "display": "none"
        });
        $(".portfolio").css({
            "display": "none"
        });
                $("#port-content").hide("slow");
    });

});

