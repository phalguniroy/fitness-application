$("#submit-button").on('click', function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (firstName == "") { 
        return alert("Frist name is required!");
        $('#firstName').val.focus();
        return false;
    };
    if (lastName == "") { 
        return alert("Last name is required!");
        $('#lastName').val.focus();
        return false;
    };
    if (email == "") { 
        return alert("Email is required!");
        $('#email').val.focus();
        return false;
    };
    if (password == "") { 
        return alert("Password is required!");
        $('#password').val.focus();
        return false;
    };
    if (confirmPassword == "") { 
        return alert("Please confirm your password!");
        $('#confirm-password').val.focus();
        return false;
    };
    if (password === confirmPassword) { 
        return alert("You have successfuly saved changes!");
    }
    // } else {
    //     alert("Password-- doesn't match! Please try again!.");
    // };
});