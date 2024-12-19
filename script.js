$(document).ready(function() {
    // Handle form submission using AJAX
    $("#registrationForm").submit(function(event) {
        event.preventDefault();  // Prevent form from submitting normally
        
        var formData = $(this).serialize();  // Serialize form data

        $.ajax({
            type: "POST",
            url: "php/process.php",  // The PHP script to process the form
            data: formData,
            success: function(response) {
                // Display the response from the PHP script
                $("#response").html(response);
                $("#registrationForm")[0].reset();  // Reset form after successful submission
            },
            error: function() {
                alert("There was an error processing your form. Please try again.");
            }
        });
    });
});
