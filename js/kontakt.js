			var text = ["opacity_text"];
			var opacity = 0;

			function setOpacity(item)
			{
				document.getElementById(item).style.opacity=opacity;
			}

			function core()
			{		
				window.setInterval
				(
					function()
					{
						if (opacity<=1)
						{
							text.forEach(setOpacity);
							opacity += 0.05;
						}
					}, 100
				);
			}

			core();

				
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
				
			parse();
				
			$(document).ready(function() 
			{ 
			  $(window).scroll(function() 
			  {
				if ($(window).scrollTop() > 50) 
				{
					$('header').addClass('header-fixed');
				}
				if ($(window).scrollTop() < 50) 
				{
					$('header').removeClass('header-fixed');
				}
			  });
			});