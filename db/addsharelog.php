<?php 

	session_start();

	// for debug use $_GET["param"]
	// http://localhost/geoxnewyear16/db/addsharelog.php?id=1&pageflag=1
    	// $id                                    = $_GET['id'];
    	// $_SESSION['openid']     = 'o1zitjlK5QY7rH113wDe2f96ThUtOw';
    	// $_SESSION['img']           = 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLBUibh2dXOLU3DkiblnVLNCfOb6D6ViawSD8mtPSFl86lVg59cdSIZ7u40lBLPr3ibvVc1xynrpn2U2UQ/0';
    	// $_SESSION['nickname'] = 'coton_chen';
    	// $pageflag                         = $_GET['pageflag'];

	

	include_once 'connect.php';	

	// params
	$id                 = $_POST['id'];
	$openid        = $_SESSION['openid'];
	$headimgurl = $_SESSION['img'];
	$nickname    = $_SESSION['nickname'];
	$pageflag     = $_POST['pageflag'];
	$adate           = date("Y-m-d H:i:s",time());

	if ($conn)
	{

		$query = "INSERT INTO user (id,openid, headimgurl, nickname, pageflag, adate) VALUES('$id', '$openid', '$headimgurl', '$nickname', '$pageflag', '$adate')";
		mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());
		
		echo 'insert success!';
	}else
	{
		echo 'database is disconnect!';
	}

	mysqli_close($conn);
?>﻿