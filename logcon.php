<?php 

$email = $_POST['email'];
$password = $_POST['password'];

$db = mysqli_connect('localhost', 'root', '', 'project');
$query = "SELECT * FROM registration WHERE email='$email' AND password='$password'";
  	$results = mysqli_query($db, $query);
  	if (mysqli_num_rows($results) == 1) {
  	  $_SESSION['email'] = $email;
  	  echo "logged in";
      header('location: home.html');
  	}
  	else{
  		header('location: login2.html');
  	}

?>