
try
{

	let nav = document.getElementById('nav');

	let home_Anchor = document.querySelector("a[href='#']").style;

	nav.onmouseenter = function()
	{
		home_Anchor.color = "#000";
		home_Anchor.border = "none";
	}

	let btn = document.getElementsByClassName("btn");

	btn[2].onclick = function()
	{
		window.history.back();
	}

	window.onscroll = function()
	{
		// window.scrollTo(0,0);
	}
}
catch(error){}