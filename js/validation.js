/*
-   website 6 "ECorp Employment"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/validation
*/
try
{
	/*
		=================================================================
		| |
		=================================================================
	*/ 
	let submit_btn = document.getElementsByClassName("submit_btn")

	let form = document.querySelectorAll("form")
	
	function active_form(index)
	{
		for (let i = 0; i < form.length; i++)
		{
			form[i].style.display = "none"
		}
		form[index].style.display = "block"
	}
	active_form(0)
	/*
		{ the end }======================================================
	*/ 
}
catch(error)
{
	console.log(` js/aside ${error}`)
}
