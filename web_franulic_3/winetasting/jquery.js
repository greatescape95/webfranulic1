$(document).ready(function(){
$("#tour").mouseover(function(){
$("#wine-text").slideUp(1500,"swing");
$("#oil-text").slideUp(1500,"swing");
$("#tour-text").slideDown(1500,"swing");
$("#wine p").fadeTo("slow",0.5);
$("#olives p").fadeTo("slow",0.5);
$("#tour p").fadeTo("slow",1.0);
});
$("#olives").mouseover(function(){
$("#tour-text").slideUp(1500,"swing");
$("#wine-text").slideUp(1500,"swing");
$("#oil-text").slideDown(1500,"swing");
$("#wine p").fadeTo("slow",0.5);
$("#tour p").fadeTo("slow",0.5);
$("#olives p").fadeTo("slow",1.0);
});
$("#wine").mouseover(function(){
$("#oil-text").slideUp(1500,"swing");
$("#tour-text").slideUp(1000,"swing");
$("#wine-text").slideDown(500,"swing");
$("#olives p").fadeTo("slow",0.5);
$("#tour p").fadeTo("slow",0.5);
$("#wine p").fadeTo("slow",1.0);
});
});

