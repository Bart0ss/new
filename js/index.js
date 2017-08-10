			window.setInterval
			(
				function()
				{
				 gotoNext();
				}, 1000
			);
			
			document.onkeydown = checkKey;
			
			function checkKey(e) 
			{
				e = e || window.event;

				if (e.keyCode == '37') 
				{
					gotoPrevious();
			
				}
				else if (e.keyCode == '39') 
				{
					gotoNext();
				}
			}
			
			var pathstring =  "url(images/";
			var background_array = ["strona_glowna_slider.jpg","stopka.jpg","paralax.jpg"];
			var background_counter = 0;
			
			function setBackground()
			{	
				var doc = document.getElementById("slider");
				doc.style.backgroundImage = pathstring + background_array[background_counter] + ')';
				doc.style.backgroundPosition = "center";	
		
			}
			
			function gotoNext()
			{
				if (background_counter == background_array.length -1)
				{
					background_counter=0;
					setBackground();
				}
				else if (background_counter < background_array.length)
				{
					background_counter++;
					setBackground();
				}
			}	
			function gotoPrevious()
			{
				if (background_counter > 0)
				{
					background_counter--;
					setBackground();
				}
				else if (background_counter == 0)
				{
					background_counter = background_array.length -1;
					setBackground();
				}
			}
				
			$('#map').click(function ()
			{
			   $('#map iframe').css("pointer-events", "auto");
			});

			$( "#map" ).mouseleave(function()
			{
			  $('#map iframe').css("pointer-events", "none"); 
			});
			

			function  url()
			{
				window.location.href = "index.html";
			}
			var isShown;
				
			if($( window ).width() >= 769)
			{
				isShown=false;
			}
			else
			{
				isShown=true;
			}
			
			function parse()
			{
				if (!isShown)
				{
					var cusid_ele = document.getElementsByClassName('menu');
					for (var i = 0; i < cusid_ele.length; ++i) 
					{
						var item = cusid_ele[i];  
						item.style.display = "inherit";
					}
					isShown=true;
				}
				else
				{
					var cusid_ele = document.getElementsByClassName('menu');
					for (var i = 0; i < cusid_ele.length; ++i) 
					{
						var item = cusid_ele[i];  
						item.style.display = "none";
					}
					isShown=false;
				}
			}
				
			$(document).ready(function() 
			{ 
			  $(window).scroll(function() 
			  {
				if ($(window).scrollTop() > 30) 
				{
					$('header').addClass('header-fixed');
				}
				if ($(window).scrollTop() < 30) 
				{
					$('header').removeClass('header-fixed');
				}
			  });
			});

			parse();
			