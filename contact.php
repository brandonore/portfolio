<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "y2ktheory@gmail.com";
    $headers = "From: ".$email;
    $txt = "Received an email from ".$name"\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}