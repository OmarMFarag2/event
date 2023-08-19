let prevIndex = -1;

$("#x").click(function () {

    $("#menu").animate({ left: -$("#menu").outerWidth() }, 500)
    $("#content").animate({ marginLeft: 0 }, 500)

})

$("#show").click(function () {

    $("#menu").animate({ left: 0 }, 500)
    $("#content").animate({ marginLeft: $("#menu").outerWidth() }, 500)
})

$("#duration h2").click(function () {
    let index = $(this).attr("data-index");

    if (prevIndex != -1 && prevIndex != index) {
        $("#duration p").eq(prevIndex).slideUp(700)
    }

    $("#duration p").eq(index).slideToggle(700)
    prevIndex = index;
})

function timer() {

    let date = new Date("10 october 2021 9:56:00");
    date = (date.getTime() / 1000);

    let now = new Date();
    now = (now.getTime() / 1000);

    timeDifference = (date - now);

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))


    $(".d").html(`${days} D`);
    $(".h").html(`${hours} h`);
    $(".m").html(`${mins} m`);
    $('.s').html(`${secs} s`)


    setInterval(function () { timer(); }, 1000);
}

$("#menu a").click(function () {
    var id = $(this).attr("href");

    var offset = $(id).offset().top;

    $("html , body").animate({ scrollTop: offset }, 1000);
})
let charsLeft = 100;
$("#msg").keyup(function () {
    let chars = $(this).val();
    if(chars.length>=100)
    {
        $("#msg").val(chars.slice(0,99))
        $(".counter").html("No")
    }
    else
        $(".counter").html(`${charsLeft - chars.length}`)
})
$(document).ready(
     timer()
)
