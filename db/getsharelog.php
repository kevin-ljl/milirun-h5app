<?php 

	// for debug use $_GET["param"]
	// http://localhost/geoxnewyear16/db/getdatabyjsonlist.php?id=dc0c495d-baa7-41ac-92e4-5d88db0642dc
    	$id                                    = $_GET['id'];
	
	include_once 'connect.php';	
	// params
	//$id                 = $_POST['id'];

	session_start();

	include_once 'connect.php';

	if ($conn)
	{
		// insert score
		$query = "select * from user WHERE id='$id' ";
		$rs_query = mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());

		if($rs_query->num_rows > 0)
		{

			$data = array();

			while($row = mysqli_fetch_array($rs_query)) {
			    $data[] = $row;
			}

			$json_data = json_encode($data);
		}else
		{
			$json_data = json_encode('[]');
		}

	}else
	{
		$json_data = json_encode('[]');
	}

	echo $json_data;

	mysqli_close($conn);

 ?>