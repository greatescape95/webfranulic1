
<?php 
  $name = $email = $number = $date = $interest = $transport = $message = "";
  $nameErr = "";
  if($_SERVER["REQUEST_METHOD"] == "POST") {
  
  if (empty($_POST["name"])) {
    $nameErr = "Name is required";
  } else {
  $name = test_data($_POST["name"]);
  }
  $email = test_data($_POST["email"]);
  $number = test_data($_POST["number"]);
  $date = test_data($_POST["date"]);
  $interest = test_data($_POST["interest"]);
  $transport = test_data($_POST["transport"]);  
  $message = test_data($_POST["message"]); 
  }
  function test_data($data){
  $data = trim($data);
  $data = htmlspecialchars($data);
  return $data;
  }
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="generator" content="CoffeeCup HTML Editor (www.coffeecup.com)">
    <meta name="dcterms.created" content="ned, 22 svi 2016 22:11:00 GMT">
    <meta name="description" content="">
    <meta name="keywords" content="">
	<link rel="stylesheet" type="text/css" href="main.css">
	<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
   <script type="text/javascript" src="jquery.js"></script>
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  
  <script>
  $(document).ready(function() {
    $("#datepicker").datepicker();
  });
  </script>
    <title></title>
    
    <!--[if IE]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
	
  </head>
  
  <body>
		  <div class="contact-right" style="margin-top: 0;">
		      <div class="contact-form"
		      <p>You want to take the tour?</p>
		      <form action="people.php" method="post">
		      <?php echo $nameErr;?><input type="text" name="name" placeholder="Your name"><br>
		      <input type="text" name="email" placeholder="Your email" /><br>
			  <p>Number of people:</p>
			  <input type="number" name="number"><br>
		      <p>Select your desired date of arrival:</p>
		      <input id="datepicker" name="date" placeholder="Desired date of arrival" /><br>
		      <p>You are interested in:</p>
		      <input type="checkbox" name="interest" value="wine"> Wine tasting<br>
              <input type="checkbox" name="interest" value="oil"> Olive oil tasting<br>
			  <input type="checkbox" name="interest" value="museum"> Tour with museum and gallery<br>
			  <p>Details about your transport:</p>
			  <input type="radio" name="transport" value="I have my own transport">I have my own transport<br>
			  <input type="radio" name="transport" value="I need transport from Supetar">I need transport from Supetar<br>
			  <input type="radio" name="transport" value="I need transport from Bol">I need transport from Bol<br><br>
			  <textarea name="message" placeholder="Your message"></textarea><br>
			  <input type="submit" name="submit" value="SEND"; />
		      </form>
			  <div id="message">
			  <?php 
			  $output = "Thanks " . $name . "We will get back to you as soon as possible!"; 
			  if (isset($_POST["submit"])){
			  echo $output;
			  }
			  ?>
			  </div>
		      <div>
          </div>
	  </div>
	  
  </body>
</html>
