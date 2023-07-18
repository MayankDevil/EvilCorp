<!--
-   website 6 "ECorp Employeement"
-   Designed & Developed by Mayank
-   CopyRight By Mayank
-   PHP ./data/dataSender
-->
<?php

    /* <?php $_SERVER['PHP_SELF'] ?> */

    try
    {
        $url = 'localhost'
        $username = 'root'
        $password = 'openlock'
        $database = 'employee'

        $connection = mysqli_connect($url,$username,$password,$database);

        if ($connect)
        {
            if (isset($_POST['submit_btn']))
            {
                // inlucde "config.php";
                
                $fname = $_POST['fname'];

                $query = ` show databases --please wait `;
    
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
        }
        else
        {
            echo "<h2> ERROR : 502 </h2> <br> <p> ERR : connection is unconnected! </p>";
        }
        // 
    }
    catch(error)
    {
        echo "<h2> ERROR : 506 </h2> <br> <p> ERR : ${error} </p>";
    }
?>