// this function is from your website if you could find a way to immplment this into the " log in page that would be great"
var count= 2;
function validate()
	{
		
		sessionStorage.name = document.getElementById("custname").value;
		var un = document.login.username.value;
		var pw = document.login.password.value;
		var valid = false;
		var usernameArray = ["hammad"];
		var passwordArray = ["password"];
		for (var i = 0; i < usernameArray.length; i++)
		{
			if ((un == usernameArray[i]) && (pw == passwordArray[i]))
			{
				valid = true;
				window.location.href = "index.html";				
				alert("Login was successful " +  "-- Welcome " + sessionStorage.name);
				return false;
				break;
			}
		}

		if (count >= 1)
		{
			alert("Wrong password or username")
			count--;
		}

	}
// this code is from boot strap doesnt have to work just threw it in
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
  }())

