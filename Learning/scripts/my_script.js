$(document).ready(function(){
	(function($){
		jQuery.fn.extend({				
		bannerContainer:function(options){
		var defaults = {
			slideName: '.sliderName',			
			animationTime:1500,
			waitingTime:5000,
			slideNames: true
			};
		alert('pj');
			var options = $.extend(true, {}, defaults, options);
			
			var x = 1;		
			var li_count = $(".ul li").size();
			
			//By Default First Slide Visible		
			$(".ul>li:nth-child("+ 1 +")").css('display','list-item');			

			
			//Navigation Check
			function navCheck(){				
				if(options.navigation == true){
					if(x > 1){
						$(options.navLeft).show();
					}
					else{
						$(options.navLeft).hide();
					}				
					if(x < li_count){
					$(options.navRight).show();
					}
					else{
						$(options.navRight).hide();
					}				
				}
				else if(options.navigation == false){
					$(options.navLeft).hide();
					$(options.navRight).hide();
				}
			}	
			navCheck();
			
								
			
			//Add Bullet Point
			if(options.slideNames == false){
				$(options.slideName).hide();
			}
			
			for(i = 1; i <= li_count; i++){	
				var slide_title = $(".ul>li:nth-child(" + i + ")>a").attr('name');
				$(options.slideName).append("<li value=" + i + " id='number_" + i + "'>"+ slide_title +"</li>");			
				$(".ul>li:nth-child("+ i +")").attr('id',i);			
			}		
			$(options.slideName+" li#number_1").addClass('active');			
			
			//Click action on Bullet
			function slideClick(number_click){				
				if(x == parseInt(number_click) + 1){					
					return;			
					}				
				x = number_click;
			}
				
			//Hide And Show Funciton
			function hideShow(x){
				$(options.slideName+" li").removeClass('active');
				$(options.slideName+" li#number_"+x).addClass('active');				
				
				$(".ul>li").fadeOut(options.animationTime);
				$(".ul>li#"+x).fadeIn(options.animationTime);					
				navCheck();				
			};		
			
			
			//Automatic Loop						
			function loop(){
				x++;		
				
				//Title Slide
				$(options.slideName+" li").click(function(){					
					var number_click = $(this).attr('value');											
					slideClick(number_click);					
				});
				
				//Default Slide Loop				
				setTimeout(function(){					
					//alert(options.slideName+" li#number_"+x);										
					hideShow(x);					
					if(x >= li_count){
						x=0;
						}						
					loop();
				}, options.waitingTime);
			};			
			loop();
		}		
		});
		
	})(jQuery);
});