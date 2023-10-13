/*
-   website 6 "Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/aside
*/
try
{
	/*
		=================================================================
		| ASIDE BUTTON | onclick active section or disable other section
		=================================================================
	*/ 
	let aside_btn = document.getElementsByClassName("aside_btn")
	
	var n = 0
	/*
		----------------------------------------------------------------
		[ DISABLE SECTION ] disable all section 
		----------------------------------------------------------------
	*/
	function disable_section(index)
	{
		for (let i = 0; i < aside_btn.length; i++)
			if (aside_btn[i] != index)
				aside_btn[i].classList.remove('btn_active')
	}
	/*
		---------------------------------------------------------------
		[ ACTIVE SECTION ] active according to index & call disable
		---------------------------------------------------------------
	*/
	function active_section(index)
	{
		disable_section(index)

		aside_btn[index].classList.add('btn_active')
	}
    active_section(n) // default active
	/*
		[ for loop set onclick active ]--------------------------------
	*/ 
	for (let i = 0; i < aside_btn.length; i++)
	{
		aside_btn[i].onclick = () => {

			
			if (i == aside_btn.length - 1)
			{	
				window.history.back()
			}
			else
			{
					
				active_section(i)
				active_form(i)
			}
		}
	}
	// console.log(aside_btn.length)
	/*
		{ the end }====================================================
	*/
}
catch(error)
{
	console.log(` js/aside ${error}`)
}