--------------------------------------------------login.html--------------------------------------------------------------------------------------------------------------------------------------------------
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>
  <body>
    <h1
      class="text-green text-center font-weight-bold"
      style="font-size: 40px;"
    >
      Form Validation In JavaScript
    </h1>

    <h4 class="text-blue text-center font-weight-bold" style="font-size: 20px;">
      Login
    </h4>

    <div class="container">
      <br />

      <div class="col-lg-5 m-auto d-block">
        <form action="#" onsubmit="return validation()" class="bg-light">
          <div class="form-group">
            <label for="user" class="font-weight-regular"> Username </label>
            <input
              type="text"
              name="user"
              class="form-control"
              id="user"
              autocomplete="off"
            />
            <span id="username" class="text-danger font-weight-regular"> </span>
          </div>

          <div class="form-group">
            <label class="font-weight-regular"> Password </label>
            <input
              type="password"
              name="pass"
              class="form-control"
              id="pass"
              autocomplete="off"
            />
            <span id="passwords" class="text-danger font-weight-regular">
            </span>
          </div>

          <input
            type="submit"
            name="submit"
            value="Submit"
            class="btn btn-success"
            autocomplete="off"
          />&emsp;&emsp;&emsp;&emsp; Did not have an account?
          <a href="index.html">SignUp</a>
        </form>

        <br /><br />
      </div>
    </div>
    <script src="./scripts/login.js"></script>
  </body>
</html>




-----------------------------------------------------------------------------------------------------------index.html-----------------------------------------------------------------------------------

<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Popper JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </head>
  <body>
    <h1
      class="text-green text-center font-weight-bold"
      style="font-size: 40px;"
    >
      Form Validation In JavaScript
    </h1>

    <h4 class="text-blue text-center font-weight-bold" style="font-size: 20px;">
      Sign Up
    </h4>

    <div class="container">
      <br />

      <div class="col-lg-5 m-auto d-block">
        <form action="#" onsubmit="return validation()" class="bg-light">
          <div class="form-group">
            <label for="name" class="font-weight-regular"> Name </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="name"
              autocomplete="off"
            />
            <span id="Name" class="text-danger font-weight-regular"> </span>
          </div>

          <div class="form-group">
            <label class="font-weight-regular"> Email </label>
            <input
              type="text"
              name="email"
              class="form-control"
              id="emails"
              autocomplete="off"
            />
            <span id="emailids" class="text-danger font-weight-regular"> </span>
          </div>

          <div class="form-group">
            <label for="user" class="font-weight-regular"> Username </label>
            <input
              type="text"
              name="user"
              class="form-control"
              id="user"
              autocomplete="off"
            />
            <span id="username" class="text-danger font-weight-regular"> </span>
          </div>

          <div class="form-group">
            <label class="font-weight-regular"> Password </label>
            <input
              type="password"
              name="pass"
              class="form-control"
              id="pass"
              autocomplete="off"
            />
            <span id="passwords" class="text-danger font-weight-regular">
            </span>
          </div>

          <div class="form-group">
            <label class="font-weight-regular"> Confirm Password </label>
            <input
              type="password"
              name="conpass"
              class="form-control"
              id="conpass"
              autocomplete="off"
            />
            <span id="confrmpass" class="text-danger font-weight-regular">
            </span>
          </div>

          <div class="form-group">
            <label class="font-weight-regular"> Mobile Number </label>
            <input
              type="text"
              name="mobile"
              class="form-control"
              id="mobileNumber"
              autocomplete="off"
            />
            <span id="mobileno" class="text-danger font-weight-regular"> </span>
          </div>

          <input
            type="submit"
            name="submit"
            value="Submit"
            class="btn btn-primary"
            autocomplete="off"
          />
          <input
            type="reset"
            name="reset"
            value="Reset"
            class="btn btn-secondary"
            autocomplete="off"
          />
          &emsp;&emsp;&emsp;Already have an account?
          <a href="login.html">Login</a>
        </form>

        <br /><br />
      </div>
    </div>

    <script src="./scripts/signup.js"></script>
  </body>
</html>




------------------------------------------------------------------------------------------------login.js--------------------------------------------------------------------------------------------

function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 2 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 2 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
        " ** Password does not match the confirm password";
      return false;
    }
  }



------------------------------------------------------------------------------------------------------------signup.js------------------------------------------------------------------------------------

function validation() {
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("conpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;

    if (name == "") {
      document.getElementById("Name").innerHTML =
        " ** Please fill the Name field";
      return false;
    }

    if (emails == "") {
      document.getElementById("emailids").innerHTML =
        " ** Please fill the email id field";
      return false;
    }
    if (emails.indexOf("@") <= 0) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (
      emails.charAt(emails.length - 4) != "." &&
      emails.charAt(emails.length - 3) != "."
    ) {
      document.getElementById("emailids").innerHTML = " ** Invalid Email";
      return false;
    }

    if (user == "") {
      document.getElementById("username").innerHTML =
        " ** Please fill the username field";
      return false;
    }
    if (user.length <= 3 || user.length > 20) {
      document.getElementById("username").innerHTML =
        " ** Username lenght must be between 3 and 20";
      return false;
    }
    if (!isNaN(user)) {
      document.getElementById("username").innerHTML =
        " ** only characters are allowed";
      return false;
    }

    if (pass == "") {
      document.getElementById("passwords").innerHTML =
        " ** Please fill the password field";
      return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
      document.getElementById("passwords").innerHTML =
        " ** Passwords lenght must be between  5 and 20";
      return false;
    }

    if (pass != confirmpass) {
      document.getElementById("confrmpass").innerHTML =
        " ** Password Mismatch";
      return false;
    }

    if (confirmpass == "") {
      document.getElementById("confrmpass").innerHTML =
        " ** Please fill the confirmpassword field";
      return false;
    }

    if (mobileNumber == "") {
      document.getElementById("mobileno").innerHTML =
        " ** Please fill the mobile NUmber field";
      return false;
    }
    if (isNaN(mobileNumber)) {
      document.getElementById("mobileno").innerHTML =
        " ** user must write digits only not characters";
      return false;
    }
    if (mobileNumber.length != 11) {
      document.getElementById("mobileno").innerHTML =
        " ** Mobile Number must be 11 digits only";
      return false;
    }
  }



------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
