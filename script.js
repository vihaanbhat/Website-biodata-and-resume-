window.onload = function() {
    alert("Welcome to my website!");
};
$(document).ready(function(){
    $("h1").click(function(){
        $(this).fadeOut(1000).fadeIn(1000);
    });
});