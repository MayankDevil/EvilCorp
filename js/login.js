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

	let validation = document.getElementById('validate')

	validation.innerText = ''

	validation.classList.remove('isValid')

	validation.classList.remove('isUnvalid')

	login_btn.onclick = function()
	{
		const admin = {
			name : '7027_21mayank@gc11.ac.in',
			key : '9211420'
		}

		if (login_fld[0].value == "" || login_fld.value == "")
		{
			console.log('\n_[error] : empty field, please!')

			validation.classList.add('isUnvalid')
			validation.innerText = `_[error] : empty field`
			
			return;
		}
		else if (login_fld[0].value === admin.name || login_fld[0].value === 'rootUser')
		{
			if (login_fld[1].value === admin.key)
			{
				console.error(`\n _[unvalid] : password`)
				validation.classList.add('isValid')
				validation.innerText = `_[unvalid] : password`

				setTimeout(databaseLayout(), 2000)
			}
			else
			{
				console.error(`\n _[unvalid] : password`)
				validation.classList.add('isUnvalid')
				validation.innerText = `_[unvalid] : password`
			}
		}
		else
		{
			console.error(`\n _[unvalid] : admin name`)

			validation.classList.add('isUnvalid')
			validation.innerText = `_[unvalid] : admin name`
		}
	}
    
    /*
        -------------------------------------------
        | display database layout with fetch data | 
        -------------------------------------------
    */
    
	function databaseLayout()
	{
		document.body.innerHTML = (`
			<section class="container">
			
				<h2> DataBase </h2>
			
			</section>
		`)
	}
}
catch(error)
{
	console.log(` js/script ${error}`)
}
