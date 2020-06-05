$("#submit-button").on('click', function () {
    var password = $('#password').val();
    var confirmPassword = $('#confirm-password').val();
    if (password === confirmPassword) { 
        return alert("You have successfuly saved changes");
    } else {
        alert("Password doesn't match! Please try again.");
    }
});