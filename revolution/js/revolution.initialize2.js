

// ========================= Revolution SLier Initialization ==================================

var tpj=jQuery;

var revapi476;
tpj(document).ready(function() {
if(tpj("#rev_slider_476_3").revolution == undefined){
revslider_showDoubleJqueryError("#rev_slider_476_3");
}else{
revapi476 = tpj("#rev_slider_476_3").show().revolution({
sliderType:"standard",
jsFileLocation:"../../revolution/js/",
sliderLayout:"auto",
dottedOverlay:"none",
delay:8000,
navigation: {
keyboardNavigation:"off",
keyboard_direction: "horizontal",
mouseScrollNavigation:"off",
mouseScrollReverse:"default",
onHoverStop:"off",
tabs: {
    enable: true,
    style: 'metis',
    width: 50,
    height: 30,
    direction: 'vertical',
    span: true,
    hide_under:600,
    hide_onleave:false,
    space: 22,
    h_align:"right",
    v_align:"center", 
    h_offset:40, 
    v_offset:50,
    tmp: '<div class="tp-tab-wrapper"><div class="tp-tab-number">{{param1}}</div></div>'
},
 touch: {
    touchenabled: "on",
    swipe_threshold: 75,
    swipe_min_touches: 1,
    swipe_direction: "horizontal",
    drag_block_vertical: false
},
arrows: {
    style:"",
    enable:false,
    style: 'hesperiden',
    hide_onmobile:true,
    hide_onleave:false,
    tmp:'',
    left: {
        h_align:"left",
        v_align:"center",
        h_offset:20,
        v_offset:0
    },
    right: {
        h_align:"right",
        v_align:"center",
        h_offset:20,
        v_offset:0
    }
}

},
visibilityLevels:[1240,1024,778,480],
gridwidth:1336,
gridheight:960,
lazyType:"none",
parallax: {
origo:"enterpoint",
speed:400,
levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
},
shadow:0,
spinner:"spinner3",
stopLoop:"off",
stopAfterLoops:-1,
stopAtSlide:-1,
shuffle:"off",
autoHeight:"off",
hideThumbsOnMobile:"off",
hideSliderAtLimit:0,
hideCaptionAtLimit:0,
hideAllCaptionAtLilmit:0,
debugMode:false,
fallbacks: {
simplifyAll:"off",
nextSlideOnWindowFocus:"off",
disableFocusListener:false,
}
});
            }
}); /*ready*/
