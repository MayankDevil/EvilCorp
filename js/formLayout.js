/*
-   website 6 "Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   JavaScript : js/formLayout
*/
try
{
	// TODO LOGIC CODE APPLICATION HERE
	class FormLayout
	{
		wlecome()
		{
			return (
				`<!--
					-----------
					[ welcome ]
					-----------
				-->
				<form action="#" method="POST" id="welcome">
                    
                    <img src="data/pic/logo.png" alt="brand_logo" id="logo">

                    <h4> Employeement Form Read Before Fill </h4>

                    <p> Welcome Friends, We are ensure you it is neccessary information that important to now in our Knowlegde. It just employee information not extra. Hope you are corpurate with us give ture information. </p>

                    <input type="button" value="Let's Begin" class="btn submit_btn">

                </form>`
			)
		}
	}
}
catch(error)
{
	console.log(` js/formLayout ${error}`)
}
/*

	<?php $_SERVER['PHP_SELF'] ?>

	<?php
	
		if (isset($_POST['submit_btn']))
		{
			inlucde "config.php";
			
			$fname = $_POST['fname'];

			$result = mysqli_query($connection,$query) or die("null")

			if (mysqli_num_query($result) > 0) 
			{
				while ($row = mysqli_fetch_assoc($result))
				{
					session_start();

					$_SESSION["USERNAME"] = $row['username'];
				}
			}
			else
			{
				echo "fuck database";
			}
		}

	?>

*/ 