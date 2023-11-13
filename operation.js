$(document).ready(function () {
    console.log("Hello");
    $(".nav-right-block").click(
        function () {
            console.log("Clicking");
            if($(".top-line").hasClass('X-shape')){
                $(".top-line").removeClass( 'X-shape');
                $(".top-line").css({"transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity":"1"});
                $(".middle-line").css({"opacity":"1"});
                $(".bottom-line").css({"transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "opacity":"1"});
                $(".full-screen-menu").css({"transform" : "translate3d(0px, -100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","opacity":"0"});
                $(".overlay-link-wrapper").css({"opacity":"0"});
                $(".menu-overlay-info-row").css({"opacity":"0"});
            }
            else{
                $(".top-line").addClass('X-shape');
                $(".top-line").css({"transform" : "translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)", "opacity":"0.64"});
                $(".middle-line").css({"opacity":"0"});
                $(".bottom-line").css({"transform" : "translate3d(0px, -10px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)", "opacity":"0.64"});
                $(".full-screen-menu").css({"transform" : "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)","opacity":"1"});
                $(".overlay-link-wrapper").css({"opacity":"1"});
                $(".menu-overlay-info-row").css({"opacity":"1"});
            }
            
        }
    );
    $(".month-btn").click(
        function(){
            if(!$(".month-content").hasClass('w--tab-active')){
                $(".annual-content").removeClass('w--tab-active');
                $(".month-content").addClass('w--tab-active');
                $(".annual-content").css({"opacity": "0", "transition": "none", "pointer-events" : "none"});
                $(".month-content").css({"opacity": "1", "transition": "opacity 2s ease 0s", "pointer-events" : "all"});
                $(".month-btn").addClass('w--current');
                $(".annual-btn").removeClass('w--current');
                $(".month-btn").attr({"aria-selected": "true"});
                $(".annual-btn").attr({"aria-selected": "false"});
                $(".month-btn").removeAttr("tabindex");
                $(".annual-btn").attr({"tabindex": "-1"});
                
            }   
        }
    );
    $(".annual-btn").click(
        function(){
            console.log("Clicking");
            $(".month-content").removeClass('w--tab-active');
            $(".annual-content").addClass('w--tab-active');
            $(".month-content").css({"opacity": "0", "transition": "none", "pointer-events" : "none"});
            $(".annual-content").css({"opacity": "1", "transition": "opacity 2s ease 0s","pointer-events" : "all"});
            $(".annual-btn").addClass('w--current');
            $(".month-btn").removeClass('w--current');
            $(".annual-btn").attr({"aria-selected": "true"});
            $(".month-btn").attr({"aria-selected": "false"});
            $(".annual-btn").removeAttr("tabindex");
            $(".month-btn").attr({"tabindex": "-1"});
        }
    );
});

function extend(i, height){
    if (document.querySelectorAll(".faq-content")[i].style.height !== "0px"){
        document.querySelectorAll(".faq-button-icon")[i].style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)";
        document.querySelectorAll(".faq-content")[i].style.height = "0px";
    }
    else{
        document.querySelectorAll(".faq-button-icon")[i].style.transform = "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)";
        document.querySelectorAll(".faq-content")[i].style.height = height;
    }
    

    
}

// transition: 1s;