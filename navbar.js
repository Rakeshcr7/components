$(document).ready(() => {
    //handling focus
    $("input").focus(function () {
        $(this).addClass("colored-border")
    });
    $("input").focusout(function () {
        $(this).removeClass("colored-border")
    });
    $("form").submit(() => {
        alert("User searched a item")
    })
})