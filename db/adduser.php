<?php 

	session_start();

	// for debug use $_GET["param"]测试用
	//http://localhost/molirun-h5app/db/adduser.php?groups=0&size=L&name=leon&sex=1&age=155250&IDchange=0&IDcard=18&phone=18&econtactp=18&ephone=13564137185&packages=0&paystatus=1
	// $groups           = $_GET['groups'];
	// $size     	    = $_GET['size'];
	// $name            = $_GET['name'];
	// $sex             = $_GET['sex'];
	// $age             = $_GET['age'];
	// $IDchange          = $_GET['IDchange'];
	// $IDcard          = $_GET['IDcard'];
	// $phone           = $_GET['phone'];
	// $econtactp       = $_GET['econtactp'];
	// $ephone          = $_GET['ephone'];	
	// $packages             = $_GET['packages'];
	// $paystatus         = $_GET['paystatus'];


	include_once 'connect.php';//连接数据库

	// params
	$groups            = $_POST['groups'];
	$size             = $_POST['size'];
	$name             = $_POST['name'];
	$sex              = $_POST['sex'];
	$age              = $_POST['age'];
	$IDchange          = $_POST['IDchange'];
	$IDcard           = $_POST['IDcard'];
	$phone            = $_POST['phone'];
	$econtactp        = $_POST['econtactp'];
	$ephone           = $_POST['ephone'];		
	$packages        = $_POST['packages'];
	$paystatus         = $_POST['paystatus'];
	$adate          = date("Y-m-d H:i:s",time());

	if ($conn)
	{
		$query = "INSERT INTO user (groups,size,name,sex,age,IDchange,IDcard,phone,econtactp,ephone,packages,paystatus,adate) VALUES( $groups,'$size','$name',$sex,'$age',$IDchange,'$IDcard','$phone','$econtactp','$ephone',$packages,$paystatus,'$adate')";
		mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());

		echo 'insert success!';	
	}else
	{
		echo 'database is disconnect!';
	}

	mysqli_close($conn);
?>
