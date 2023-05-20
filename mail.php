<?php
if ($_POST['action'] == 'contact') {
    // $name = $_POST['name'];
    // $phone = $_POST['phone'];
    $email = $_POST['email'];
    // $message = $_POST['message'];
    $to = "thewebionstest@gmail.com";
    $subject = "Whales Save Whales | Contact Form";
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    $message_body = "
                <html>
                <head>
                    <title>Whales Save Whales</title>
                </head>
                <body>
                <div>
                <p><b>Email Address</b>: $email</p>
                </div>   
    </body>
    </html> 
                ";

    if (mail($to, $subject, $message_body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
