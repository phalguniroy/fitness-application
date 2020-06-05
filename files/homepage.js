



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
