
			var text;

			if($( window ).width() >= 769)
			{
				text = ["napis-7","napis-8","napis-9","napis-10","napis-11","napis-12"];
			}
			else
			{
				text = ["napis-1","napis-2","napis-3","napis-4","napis-5","napis-6"];

			}

			var i =0;
			var opacity = 0;	
			text.forEach(setOpacity);
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
						if (i+1<text.length)
						{
							opacity =0;
							while (opacity<=1)
							{
								setOpacity(text[i]);
								setOpacity(text[i+1]);
								opacity += 0.05;
							}
						}
						i+=2;
					}, 1000
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

			$(document).ready(function() 
			{ 	
			  $(window).scroll(function() 
			  {	
				if ($(window).scrollTop() > 50) 
				{
					if ($(window).width() >= 769)
					{
					}
					else
					{
						$('header').addClass('header-fixed');
					}
				}
				if ($(window).scrollTop() < 50) 
				{
					if ($(window).width() >= 769)
					{
					}
					else
					{
						$('header').addClass('header-fixed');
					}
				}
			  });
			});

			parse();
