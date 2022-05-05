

$(document).ready(function(){
    
    $(".burger-icon").on("click",function(){
        $("header ul").toggleClass("open");
        
        return false
    });

    $("#blog").on("click",function(){
        $("#pop-up").slideDown();
        setTimeout(closePop,5000);
        
        return false
    });

    $("#pop-up").on("click",function(){
        closePop();
    });

});

// addClass on blog click
//call a timer function rmvs after 5s
//on pop up add event listener so when clicked remove class
//

function closePop(){
    $("#pop-up").fadeOut();
        
        return false
}
