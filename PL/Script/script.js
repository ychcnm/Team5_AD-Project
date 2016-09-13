$(function () {
    $("#user_avatar").on("mouseover", function () {
        var status = $(".top_tooltip").css("display");
        if (status == "block") {
            $(".top_tooltip").css("display", "none");
        } else {
            $(".top_tooltip").css("display", "block");
        }
    });
    $(".top_tooltip").on("mouseover", function () {
        $(".top_tooltip").css("display", "block");
    }).on("mouseout", function () {
        $(".top_tooltip").css("display", "none");
    });
    $("#search").on("mouseover", function () {
        $(this).css("background-color", '#f9f9f8');
    }).on("mouseout", function () {
        $(this).css("background-color", '');
    });
    $(".user_options").on("mouseover", 'li', function () {
        $(this).css("background-position", '0 -16px');
    }).on("mouseout", 'li', function () {
        $(this).css("background-position", '0 0');
    });
    $("#t_buttons").on("mouseover", 'li', function () {
        $(this).find('span').css("background-position", '0 -32px');
    }).on("mouseout", 'li', function () {
        $(this).find('span').css("background-position", '0 0');
    });
    $("#menu_ul").on("click", "li", function () {
        var selected = $(this);
        selected.addClass("selected");
        var title = $(this).attr("id");
        window.location = title + '.aspx';
    });
});