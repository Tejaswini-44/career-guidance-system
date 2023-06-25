<?php
  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $strengths = $_POST['strengths'];
  $weakness = $_POST['weakness'];
  $age = $_POST['age'];
  $email = $_POST['email'];
  $password = $_POST['password'];

  //Database connection
  $conn=new mysqli('localhost','root','','project');
  if($conn->connect_error){
  	die('Connection Failed : '.$conn->connect_error);
  } else {
  	$stmt=$conn->prepare("insert into registration(firstName,lastName,strengths,weakness,age,email,password)
  		values(?, ?, ?, ?, ?, ?, ?)");
  	$stmt->bind_param("ssssiss",$firstName,$lastName,$strengths,$weakness,$age,$email,$password);
  	$stmt->execute();
  	echo "registrstion successfull";
    header('location: login.html');
  	$stmt->close();
  	$conn->close();
  }
?>