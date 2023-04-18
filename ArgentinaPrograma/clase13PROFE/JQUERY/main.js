 $("h1").hide();

//----------------------------------------------------------

 $(document).ready(function(){

 });

//-----------------------------------------------------

$(function(){

    $("p").css({"background-color": "red"})

 });

//------------------------------------------------------------

$(function(){

    $("#segundo").css({"background-color": "red"})

 });

//-----------------------------------------------------

$(function(){

    $(".primero").css({"background-color": "red"})

 });

//----------------------------------------------------

$(function(){

    $("button").click(function(){
        alert("Hola");

    });

 });

 //----------------------------------------------------

 $(function(){

    $("button").click(function(){
        
        $("#segundo").hide();

    });

 });

 //----------------------------------------------------


 $(function(){

    $("#btn-hide").click(function(){
        
        $("#segundo").hide();

    });

    $("#btn-show").click(function(){
        
        $("#segundo").show();

    });

 });

 //----------------------------------------------------

 $(function(){

    $("#btn-hide").dblclick(function(){
        
        $("#segundo").hide();

    });

    $("#btn-show").dblclick(function(){
        
        $("#segundo").show();

    });

 });

 //---------------------------------------------------

 $(function(){

    $(".primero").mouseenter(function(){
        
        $("#segundo").hide();

    });

    $(".primero").mouseleave(function(){
        
        $("#segundo").show();

    });

 });

 //---------------------------------------------------

 $(function(){

    $(".primero").mouseenter(function(){
        
        $("#segundo").fadeOut();

    });

    $(".primero").mouseleave(function(){
        
        $("#segundo").fadeIn();

    });

 });

 //-------------------------------------------------

 $(function(){

    $(".primero").mouseenter(function(){
        
        $("#segundo").slideDown();

    });

    $(".primero").mouseleave(function(){
        
        $("#segundo").slideUp();

    });

 });

 //-------------------------------------------------

 $(function(){

    $(".primero").animate({width: "300px"});
    
    $(".primero").mouseenter(function(){
        
        $("#segundo").slideDown();

    });

    $(".primero").mouseleave(function(){
        
        $("#segundo").slideUp();

    });

 });

 //-----------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        alert($("#segundo").text());

    });

});

//---------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        alert($("#segundo").html());

    });

});

//---------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        alert($("#segundo").attr("title"));

    });

});

//------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").text("Hola");

    });

});

//-------------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").html("Hola <strong>Mundo</strong>");

    });

});

//------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").append("Hola <strong>Mundo</strong>");

    });

});

//-----------------------------------------------------


$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").prepend("Hola <strong>Mundo</strong>");

    });

});

//----------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").after("<p>Hola <strong>Mundo</strong></p>");

    });

});

//----------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").before("<p>Hola <strong>Mundo</strong></p>");

    });

});

//----------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#segundo").remove();

    });

});

//---------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("#btn-show").empty();

    });

});

//---------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("h1").addClass("red");

    });

});

//---------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("h1").addClass("blue");

    });

});

//--------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("h1").addClass("blue");

    });

    
    $("#btn-show").click(function(){
        
        $("h1").removeClass("blue");

    });


});

//------------------------------------------------------

$(function(){

    
    
    $("#btn-hide").click(function(){
        
        $("h1").toggleClass("blue");

    });

    
   


});

//------------------------------------------------------
