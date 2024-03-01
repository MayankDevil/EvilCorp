/*
-   website 6 "ECorp Employment"
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

	/*
		-----------------------------------------
		| login button onclick admin validation |
		-----------------------------------------
	*/ 

	login_btn.onclick = function()
	{
		const admin = {
			name : '7027_21mayank@gc11.ac.in',
			key : '9211420'
		}

		if (login_fld[0].value == "" || login_fld[1].value == "")
		{
			console.log('\n_[error] : empty field, please!')

			validation.classList.add('isUnvalid')
			validation.innerText = `[error] : empty field`
			
			return;
		}
		else if (login_fld[0].value === admin.name || login_fld[0].value === 'rootUser')
		{
			if (login_fld[1].value === admin.key)
			{
				console.error(`\n _[unvalid] : password`)
				validation.classList.add('isValid')
				validation.innerText = `[unvalid] : password`

				setTimeout(databaseLayout, 1000)
			}
			else
			{
				console.error(`\n _[unvalid] : password`)
				validation.classList.add('isUnvalid')
				validation.innerText = `[unvalid] : password`
			}
		}
		else
		{
			console.error(`\n _[unvalid] : admin name`)

			validation.classList.add('isUnvalid')
			validation.innerText = `[unvalid] : admin name`
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

				<h3> ${ new Date().toDateString() } Pure Employment That Fuck Life </h3>

				<ul id="database">
				
					<li> Operting System : <span class="isValid"> ${ window.navigator.oscpu } <span> </li>

					<li> Use Plathform : <span class="isValid"> ${ window.navigator.platform } <span> </li>
					
					<li> Application Code Name : <span class="isValid"> ${ window.navigator.appCodeName } <span> </li>

					<li> Application Name : <span class="isValid"> ${ window.navigator.appName } <span> </li>

					<li> Application Version : <span class="isValid"> ${ window.navigator.appVersion } <span> </li>
					
					<li> Hardware Concurrency : <span class="isValid"> ${ window.navigator.hardwareConcurrency } <span> </li>

					<li> language support : <span class="isValid"> ${ window.navigator.languages } <span> </li>
					
					<li> is Browser donot track  : <span class="isValid"> ${ window.navigator.doNotTrack } <span> </li>
					
					<li> is Cookie Enabled : <span class="isValid"> ${ window.navigator.cookieEnabled } <span> </li>
					
					<li> Any Web Driver : <span class="isValid"> ${ window.navigator.webdriver } <span> </li>
					
					<li> is Support Java : <span class="isValid"> ${ window.navigator.javaEnabled() } <span> </li>

					<li> is Support PDF : <span class="isValid"> ${ window.navigator.pdfViewerEnabled } <span> </li>

					<li> is Online : <span class="isValid"> ${ window.navigator.onLine } <span> </li>
				
				</ul>
			
			</section>
		`)
	}
	/*
navigator.appCodeName
"Mozilla"
navigator.appName
"Netscape"
navigator.appVersion
"5.0 (X11)"
navigator.cookieEnabled
true
navigator.doNotTrack
"1"
navigator.hardwareConcurrency
2
navigator.javaEnabled()
false
navigator.language
"en-US"
navigator.languages
Array [ "en-US", "en" ]

navigator.onLine
true
navigator.oscpu
"Linux x86_64"
navigator.pdfViewerEnabled
true
navigator.propertyIsEnumerable()
false
navigator.userAgent
"Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0"
navigator.webdriver
false 
	*/
}
catch(error)
{
	console.log(` js/script ${error}`)
}
