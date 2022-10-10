

let aboutOffset = $("#about").offset().top;
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    if (windowScroll >= aboutOffset) {
        $("#main-nav").css("backgroundColor" , "rgba(0,0,0,0.5)");
        $("#main-nav").css("transition" , "background-color 2s");
        $("#go-top").css("display" , "block");

    }
    else{
        $("#main-nav").css("backgroundColor" , "transparent");
        $("#main-nav").css("transition" , "background-color 2s");
        $("#go-top").css("display" , "none");
    }
})

$("#go-top").click(function(){
    $("html , body").animate({scrollTop:0},1000);
})

$("a[href^='#']").click(function(){
    let sectionId = $(this).attr("href");
    let sectionOffset = $(sectionId).offset().top;
    $("html , body").animate({scrollTop : sectionOffset},1000);
})

let colorChooserWidth = $(".color-chooser").outerWidth(true);
$(".side-bar").css("left" , `-${colorChooserWidth}`);

$("#sidebar-toggle").click(function(){
    if ($(".side-bar").css("left") < "0") {
        $(".side-bar").animate({left:0},1000); 
        
    }
    else{
        $(".side-bar").animate({left :`-${colorChooserWidth}`} , 1000);
        
    }
})

$(".color-item").click(function(){
    let myColor = $(this).css("backgroundColor");
    $(".change-colors").css("color" , myColor);
})

 $(document).ready(function(){
 
    $(".block").fadeOut(1000 , function(){
        $(".blocks").fadeOut(500 , function(){
            $(".loading").fadeOut(500 , function(){

                $("body").css("overflow","auto");
                $(".loading").remove();
            })
        })
    })

    })
   


