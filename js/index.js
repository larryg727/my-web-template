/**
 * Created by larryg on 5/17/17.
 */

$(document).ready(function () {
    "use strict";

    var totalWidth = $(".nav").width();
    var navNavMenuCenter = totalWidth/2 - 620;

    //sets nav width to a dynamic variable that equals the rest of the page - the company logo n name



    // scroll function to stick the nav bar to the top as its scrolled by.
   $(window).scroll(function(){
        if ($(document).scrollTop() > 360){
            $(".nav, #navImg, #navList").addClass("fixNav");
            if(navNavMenuCenter > 0){
                $("#navList").css("margin-left", navNavMenuCenter);
            }
        }else {
            $(".nav, #navImg, #navList").removeClass("fixNav");
            $("#navList").css("margin-left", "0");
        }
    });


});