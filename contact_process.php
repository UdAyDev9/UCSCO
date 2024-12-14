<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "your-email@gmail.com"; // Replace with your actual email
    $from = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = htmlspecialchars($_POST['name']);
    $subject = htmlspecialchars($_POST['subject']);
    $number = htmlspecialchars($_POST['number']);
    $cmessage = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $subject = "You have a message from your website.";

    $logo = 'img/logo_new_transparent.png';
    $link = '#';

    $body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
    $body .= "<table style='width: 100%;'>";
    $body .= "<thead style='text-align: center;'><tr><td colspan='2'>";
    $body .= "<a href='{$link}'><img src='{$logo}' alt='Logo'></a><br><br>";
    $body .= "</td></tr></thead><tbody><tr>";
    $body .= "<td><strong>Name:</strong> {$name}</td>";
    $body .= "<td><strong>Email:</strong> {$from}</td>";
    $body .= "</tr>";
    $body .= "<tr><td><strong>Subject:</strong> {$subject}</td></tr>";
    $body .= "<tr><td colspan='2'>{$cmessage}</td></tr>";
    $body .= "<tr><td><strong>Phone Number:</strong> {$number}</td></tr>";
    $body .= "</tbody></table>";
    $body .= "</body></html>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully.";
    } else {
        echo "Message could not be sent.";
    }
} else {
    echo "Invalid request.";
}

?>

