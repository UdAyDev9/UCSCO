$(document).ready(function() {
    var form = $('#myForm'); // Contact form
    var submit = $('.submit-btn'); // Submit button
    var alert = $('.alert-msg'); // Alert div for showing alert messages

    // Form submit event
    form.on('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        $.ajax({
            url: 'mail.php', // Form action URL
            type: 'POST', // Form submission method (GET/POST)
            dataType: 'html', // Request type (html/json/xml)
            data: form.serialize(), // Serialize form data
            beforeSend: function() {
                alert.fadeOut(); // Hide alert message
                submit.html('Sending...'); // Change submit button text
                submit.prop('disabled', true); // Disable button to prevent multiple clicks
            },
            success: function(data) {
                alert.html(data).fadeIn(); // Show response data
                form.trigger('reset'); // Reset the form
                submit.html('Send'); // Reset button text
                submit.prop('disabled', false); // Re-enable the button
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', error); // Log error to console
                alert.html('<p class="error">Something went wrong. Please try again.</p>').fadeIn();
                submit.html('Send'); // Reset button text
                submit.prop('disabled', false); // Re-enable the button
            }
        });
    });
});
