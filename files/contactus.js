function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var query = document.getElementById("query").value;
    var error_message = document.getElementById("error_message");
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }

    if(query.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }

    alert("Form Submitted Successfully!");
    return true;
  }


$('form').submit(function(event) {
    var userEmail = $('#email').val();
    console.log(userEmail);
    event.preventDefault();
    
    $.ajax({
        url : '/success',
        type: 'POST',
        data : {
            email: 'userEmail'
        },
        success: function(response) {
            console.log(response);
        }
    
    });
    
    });
    