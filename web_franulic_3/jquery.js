/* pictures homepage */ 

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

/* social icons */
	function changeImageFb(){
	    var image = document.getElementById('fb');
	    if(image.src.match("active")){
		image.src = "images/icon_fb.png";}
		else{
	    image.src = "images/icon_fb_active.png";}
    }
    function changeImageInst(){
	    var image = document.getElementById('instagram');
	    if(image.src.match("active")){
	    image.src = "images/icon_instagram.png";}
	    else{
	    image.src = "images/icon_instagram_active.png";}
	}
	function changeImageGoogle(){
	    var image = document.getElementById('google');
		if(image.src.match("active")){
		image.src = "images/icon_google.png";}
		else{
		image.src = "images/icon_google_active.png";}
	}
    function changeImageMail(){
		var image = document.getElementById('mail');
		if(image.src.match("active")){
		image.src = "images/icon_mail.png";}
		else{
		image.src = "images/icon_mail_active.png";}
		}
	function changeImageTa(){
		var image = document.getElementById('ta');
		if(image.src.match("active")){
		image.src = "images/icon-ta.png";}
		else{
		image.src = "images/icon-ta-active.png";}
		}
	
	/* big menu */	 
	
	    $(document).ready(function(){
            $("#big-menu-icon").click(function(){
                $("#big-menu-screen").show(400,"swing");
                $("#big-menu-icon").hide(400,"swing");
                $(".x-icon").show(400,"swing");
            });
            $("#big-menu-close").click(function(){
                $("#big-menu-screen").hide(400,"swing");
                $("#big-menu-icon").show(400,"swing");
                $(".x-icon").hide(400,"swing");
            });
        });
   
		 
		/* gallery */ 
   
	    $(document).ready(function(){
	        $(".thumbs li img").click(function(){
	            var Imagesrc = $(this).attr('src');
				$('#grey').css("background-color", "#ebebeb");
	            $("#column-hidden-1").hide(50,"swing");
	            $("#column-hidden-2").hide(50,"swing");
	            $('.MainImage').fadeOut(100, function(){
	            $('.MainImage').attr('src', Imagesrc);
				$(".big-picture").show(100,"swing");
	            $('.MainImage').fadeIn(200);
				
	            });
	        });
	    });
		
		/* datepicker */ 

      $(document).ready(function() {
         $("#datepicker").datepicker();
      });
	  
	  /* scroll */ 
  
      $(document).ready(function(){
          $("a").on('click', function(event) {
              if (this.hash !== "") {
              event.preventDefault();
              var hash = this.hash;
              $('html, body').animate({
              scrollTop: $(hash).offset().top
              }, 1000, "swing", function(){
              window.location.hash = hash;
              });
              } 
          });
      });
    
   

