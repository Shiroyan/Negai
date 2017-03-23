/**
 * Created by Siro on 2017/3/18.
 */


$(document).ready(function () {

    function myLog(m) {
        console.log(m);
    };

    $(".wishes").on("click",function () {
        var h = $(this).height();
        myLog("Wishes click");
        $(this).find('.cover').css({height:h + "px"}).slideToggle(300);
    });

    $(".ok").on("click",function () {
        myLog("ok click");
    });
})