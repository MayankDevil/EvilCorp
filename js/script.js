/*
-   website 6 "Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/script
*/
try
{
	// TODO LOGIC CODE APPLICATION HERE
	let header = document.getElementById("header")

	let nav_btn = document.getElementById("nav_btn")


	nav_btn.onclick = () => {
	
		console.log(` i am working `)
	}
	
	document.getElementById("main")

	window.addEventListener('scroll',function()
	{
		let up_btn = document.getElementById("up_btn");
		
		if (window.scrollY > 150)
		{
			alert('done')
			up_btn.style.display = "none";
		}
		else
		{
			up_btn.style.display = "inline-block";
		}
	})
}
catch(error)
{
	console.log(` js/script ${error}`)
}
