/*
-   website 6 "Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/formLayout
*/
try
{
	/*
		=====================
		| form class layout |
		=====================
	*/
	class FormLayout
	{
		/*
			-----------
			[ welcome ]
			-----------
		*/
		wlecome()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="welcome">
                    
                    <img src="data/pic/logo.png" alt="brand_logo" id="logo">

                    <h4> Employeement Form Read Before Fill </h4>

                    <p> Welcome Friends, We are ensure you it is neccessary information that important to now in our Knowlegde. It just employee information not extra. Hope you are corpurate with us give ture information. </p>

                    <input type="button" value="Let's Begin" class="btn submit_btn">

                </form>`
			)
		}
		/*
			-----------------
			[ nationalition ]
			-----------------
		*/ 
		nationalition()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="nationalition">
					
					<h4> First thing that need to we know that Which country is your Nation. </h4>
					
					<div id="nationality_fld">
						
						<label> Select Your Nationality </label>
						
						<select name="nationality" class="fld">
							<option>India</option>
							<option>Russia</option>
							<option>Israil</option>
							<option>ShriLanka</option>
							<option>Mexican</option>
							<option>Afganistan</option>
							<option>France</option>
							<option>Germany</option>
							<option>Mexico</option>
						</select>
						
					</div>
					
					<input type="button" value="Selected" class="btn submit_btn">
					
				</form>`
			)
		}
		/*
			------------
			[ personal ]
			------------
		*/
		personal()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="personal">
				
					<h4> Second we have Knowlegde about you that who are you? </h4>
						
					<div id="name_fld">
						<label> Enter Your Name </label>
						
						<input type="text" name="fname" class="fld" placeholder="First Name">
						<input type="text" name="mname" class="fld" placeholder="Middle Name">
						<input type="text" name="lname" class="fld" placeholder="Last Name">
					</div>
					
					<div id="dob_fld">
						<label> Date Of Birth </label>
						
						<input type="date" name="dob" class="fld" placeholder="D.O.B">
					</div>
					
					<input type="button" value="Selected" class="btn submit_btn">
					
				</form>`
			)
		}
		/*
			-------------
			[ education ]
			-------------
		*/ 
		education()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="education">

					<h4> Where will be you educate? </h4>

					<div>
						<input type="checkbox" value="matric" id="matric">
						
						<label for="matric"> Matric (10<sup>th</sup> Pass) </label>
					</div>
					<div>
						<input type="checkbox" value="secondary" id="secondary">
						
						<label for="secondary"> Secondary (12<sup>th</sup> Pass) </label>
					</div>
					<div>
						<input type="checkbox" value="graduate" id="graduate">

						<label for="graduate"> Graduate (Bachlor Degree) </label>
					</div>
					<div>
						<input type="checkbox" value="phd" id="phd">

						<label for="phd"> Phd (Master Degree) </label>
					</div>

					<input type="button" value="Selected" class="btn submit_btn">

				</form>`
			)
		}
		/*
			-----------------
			[ documentation ]
			-----------------
		*/ 
		documentation()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="documentation">

					<h4> Please Upload Your Documents in PDF Format Less than 500MB. </h4>

					<p> 1. (DOB) Date Of Birth certificate. </p>

					<p> 2. (DMC) Marksheet that you are previous select. </p>

					<p> 3. Other Skill or Knowledge certificate that define your work. </p>

					<p> 4. Resume not more than 2 page. </p>

					<p> 5. Photograph. </p>

					<input type="file" name="file" class="fld file_btn" placeholder="Your Education Degree">

					<input type="button" value="Upload" class="btn submit_btn">
					
				</form>`
			)
		}
		/*
			-----------
			[ contact ]
			-----------
		*/ 
		contact()
		{
			return (
				`<!--  -->
				<form action="#" method="POST" id="Conatct">

					<h4> For contact back. </h4>

					<div id="contact_fld">
						<label> Mobile Number </label>
						
						<input type="tel" name="number" class="fld" placeholder="Mobile Number">
					</div>
					
					<div id="dob_fld">
						<label> Email </label>
						
						<input type="email" name="email" class="fld" placeholder="Email Id">
					</div>
					
					<input type="button" value="Selected" class="btn submit_btn">
					
				</form>`
			)
		}
	}

	const form_layout =  new FormLayout()

	let form_container = document.getElementById("form_container")
	
	form_container.innerHTML = form_layout.wlecome()

	form_container.insertAdjacentHTML("beforeend",form_layout.nationalition())

	form_container.insertAdjacentHTML("beforeend",form_layout.personal())

	form_container.insertAdjacentHTML("beforeend",form_layout.education())

	form_container.insertAdjacentHTML("beforeend",form_layout.documentation())

	form_container.insertAdjacentHTML("beforeend",form_layout.contact())
}
catch(error)
{
	console.log(` js/formLayout ${error}`)
}
// the end