$(window).on("load", function() {
    "use strict";

    //  ==================== BUTTONS SCROLLING ANIMATION ====================


     document.querySelectorAll('.an-down').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });



    $("nav ul ul").parent().addClass("has_menu");
    

    $('[data-toggle="tooltip"]').tooltip(); 

    
    //  ==================== TABS FUNCTIONALITY ====================

    
    $('.srvs-list li').on("click", function(){
      var tab_id = $(this).attr('data-tab');
      $('.srvs-list').removeClass('active animated fadeOut');
      $('.srvz-img').removeClass('active animated fadeOut');
      $(this).addClass('active animated fadeIn');
      $("#"+tab_id).addClass('active animated fadeIn');
    });
    

    //  ==================== MOBILE MENU FUNCATIONALITY ====================

    $(".navigations ul ul").parent().addClass("menu-item-has-children");
    $(".navigations ul li.menu-item-has-children > a").on("click", function() {
      $(this).parent().toggleClass("active").siblings().removeClass("active");
      $(this).next("ul").slideToggle();
      $(this).parent().siblings().find("ul").slideUp();
      return false;
    });

    //  ==================== SEARCH  ====================

    $(".search-btn").on("click", function(){
      $(".search_sec").addClass("active");
      return false;
    });
    $(".close-search").on("click", function(){
      $(".search_sec").removeClass("active");
      return false;
    });

    //  ==================== MENU BAR ====================

    $(".menu-bar").on("click", function(){
      $(this).toggleClass("active");
      $(".responsive_mobile_menu").toggleClass("active");
      return false;
    });

    if ($(window).width() < 480) {
      $(".menu-bar").on("click", function(){
        $(".responsive_mobile_menu .menu-bar").toggleClass("active");
      });
    };

    $(".responsive_mobile_menu .menu-bar").on("click", function(){
      $(".menu-bar").removeClass("active");
    });


    //  ==================== SCROLLING FUNCTION ====================

    $(window).on("scroll", function() {
        var scroll = $(window).scrollTop();
        if (scroll > 30) {
            $(".bottom-header, .right-sime .menu-bar, .bbtm-header").addClass("fixed animated slideInDown");
            $(".scrollTop").addClass("active");
        } else if (scroll < 30) {
            $(".bottom-header, .right-sime .menu-bar, .bbtm-header").removeClass("fixed animated slideInDown")
            $(".scrollTop").removeClass("active");
        }
    });

    //  ==================== SCROLL TO TOP  ====================

    $(".scrollTop").on("click", function(){
        $("html, body").animate({scrollTop : 0},1000);
        return false;
    });

    //  ==================== LANG SELECT DROPDOWN MENU ====================

    $(".custom-select.hvrr").on("mouseover", function(){
      $(".select-selected").addClass(".select-arrow-active");
      $(".select-items").removeClass("select-hide");
    });
    $(".custom-select.hvrr").on("mouseleave", function(){
      $(".select-selected").removeClass(".select-arrow-active");
      $(".select-items").addClass("select-hide");
    });

    //  ==================== MENU FUNCTIONALITIES ====================

    if ($(window).width() > 1200) {
      $(".right-sime .menu-bar, .side_menu .menu-bar").on("click", function(){
        $(".side_menu .menu-bar").parent().toggleClass("active");
        $(".head-sided .right-sime .menu-bar").parent().toggleClass("active");
        $("body").toggleClass("no-scroll");
        $("header.hp_4, header.hp_3").toggleClass("novib");
        $(".mm_menu").toggleClass("active");
        $(".responsive_mobile_menu").removeClass("active");
      });
    }; 

    $(".menu_m ul ul").parent().addClass("active");


    //  ==================== BACKGROUND VIDEO IFRAME ====================


    $(".play-vid").on("click", function(){
      $(".light-overlay iframe, .abt-img iframe").addClass("active");
    });

    //  ==================== SETTING DIV POSITION DYNAMIC ====================

    var gap = $(".max-cont").offset().left;
    $(".rooms-carousel .slick-prev").css({
      "left": gap
    });
    $(".rooms-carousel .slick-next").css({
      "right": gap
    });


    var n =  new Date();
    var today = n.getDate();
    document.getElementById("cr-date").innerHTML = today;
    document.getElementById("tm-date").innerHTML = today + 1;
    


});


