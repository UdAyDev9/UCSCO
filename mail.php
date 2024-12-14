<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = "uday.developer9@gmail.com"; // Replace with your email address
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $number = filter_var($_POST['number'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $email_subject = "New Quote Request from $name";
    $email_body = "
        <html>
        <head><title>Quote Request</title></head>
        <body>
            <h2>New Quote Request</h2>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $from</p>
            <p><strong>Phone:</strong> $number</p>
            <p><strong>Subject:</strong> $subject</p>
            <p><strong>Message:</strong> $message</p>
        </body>
        </html>
    ";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Thank you! Your quote request has been sent.";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
