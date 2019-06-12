<?php

// PHPMailer script below

// Taking the values from the form inputs
$email = $_REQUEST['email'] ;
$name = $_REQUEST['name'] ;
$subject = $_REQUEST['subject'] ;
$message = $_REQUEST['message'] ;
require('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer(true);
$mail->IsMail();
// Remove this comment and enable code if you are mailing using SMTP server. This ----> $mail->IsSMTP();
$mail->IsSMTP();
$mail->Host = 'mail.brandonore.io';		//add your host name for eg here it shows gmail 
$mail->SMTPAuth = true; 
$mail->SMTPDebug = 2; //to remove the mail errors
$mail->do_debug = 0;
$mail->Username = 'admin@brandonore.io'; // Enter your SMTP username (if not using SMTP then enter gmail email id for gmail host)
$mail->Password = 'Khaotix1'; // Enter your SMTP password (if not using SMTP then enter gmail passwork for gmail host)
$mail->FromName = $name;	//name from which the mail is sent
$mail->From = $email;	//email from which the mail is sent
$mail->SMTPSecure = 'tls'; //if not tls use 'ssl'
$mail->Port = 587; //SMTP port -- use '465' or '587'
$mail->SMTPOptions = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);
$mail->addAddress('admin@brandonore.io', 'Brandon Ore');
$mail->AddReplyTo($email, $name);
$mail->IsHTML(true);	//if the email template is in html format
$mail->Subject = $subject;	//subject for the mail
$mail->Body = "
        Username: $name<br>
        Email ID: $email<br>
        Phone Number: $number<br>
        Subject: $subject<br><br>
        Message: $message";

if(!$mail->Send())
{
    $successmsg= 'Your Message has been sent!';
}
else
{
    $successmsg= 'Message Sending Failed!';
}

?>