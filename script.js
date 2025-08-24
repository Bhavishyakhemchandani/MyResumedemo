function isemmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#button").click(function () {
    // Clear all previous error messages
    $(".error-message").html("");
    $("#success").html("");
    $("#error").html("");
    
    var hasErrors = false;

    // Name validation
    if ($("#name").val() == "") {
        $("#name-error").html("Please enter your name");
        hasErrors = true;
    }

    // Email validation
    if ($("#email").val() == "") {
        $("#email-error").html("Please enter your email");
        hasErrors = true;
    } else if (isemmail($("#email").val()) == false) {
        $("#email-error").html("Please enter a valid email");
        hasErrors = true;
    }

    // Phone validation
    if ($("#Phone-no").val() == "") {
        $("#phone-error").html("Please enter your phone number");
        hasErrors = true;
    } else if (isNaN($("#Phone-no").val())) {
        $("#phone-error").html("Please enter a valid phone number");
        hasErrors = true;
    } else if ($("#Phone-no").val().length != 10) {
        $("#phone-error").html("Phone number should be 10 digits");
        hasErrors = true;
    }

    // Password validation
    if ($("#Password").val() == "") {
        $("#password-error").html("Please enter your password");
        hasErrors = true;
    } else if ($("#Password").val().length < 8) {
        $("#password-error").html("Password should be atleast 8 characters");
        hasErrors = true;
    }

    // Confirm password validation
    if ($("#confirm-password").val() == "") {
        $("#confirm-password-error").html("Please confirm your password");
        hasErrors = true;
    } else if ($("#Password").val() != $("#confirm-password").val()) {
        $("#confirm-password-error").html("Passwords do not match");
        hasErrors = true;
    }

    // Show success message if no errors
    if (!hasErrors) {
        $("#success").html("You are registered successfully!");
    }
});