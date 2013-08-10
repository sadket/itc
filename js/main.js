$(function(){
    $(".dev-proposal-text").filter(":nth-child(n+4)").hide();
    $(".dev-proposal-heading").on("click",function(){
        $(this).toggleClass("active").siblings(".dev-proposal-heading").removeClass("active").end().next().slideToggle(200).siblings(".dev-proposal-text").slideUp(200);
    });
});