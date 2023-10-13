/*
-   website 6 "Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/login
*/
try
{
	/*
		
	*/ 
	let login_fld = document.querySelectorAll(" #login .fld")

	let login_btn = document.querySelector(" #login .btn ")

	login_btn.onclick = function()
	{
		let value1 = '9211420420'

		let value2 = 'openlock'

		if (login_fld[0].value === value1)
		{
			if (login_fld[1].value === value2)
			{
				document.getElementById('login').innerHTML = personal_Data()
			}
			else
			{
				alert(`Contact id is unmatch in database! \n Please Check`)
				console.error(`Contact id is unmatch in database! \n Please Check`)
			}
		}
		else
		{
			alert(`Contact id is unmatch in database! \n Please Check`)
			console.error(`Contact id is unmatch in database! \n Please Check`)
		}
	}

	function personal_Data()
	{
		return (
			`<h2> Login Success but </h2>`
		)
	}
}
catch(error)
{
	console.log(` js/script ${error}`)
}
