// accpageril.js

function validateForm(event) {
  event.preventDefault();

  // Fetch form inputs
  var username = document.getElementById('username').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  var confirmPassword = document.getElementById('confirmPassword').value.trim();
  var country = document.getElementById('country').value;

  // Validation checks
  if (username.length < 5) {
      displayErrorMessage('Username must be at least 5 characters long.');
      return;
  }

  if (!validateEmail(email)) {
      displayErrorMessage('Invalid email address.');
      return;
  }

  if (!validatePassword(password)) {
      displayErrorMessage('Password must be alphanumeric and should not contain special characters.');
      return;
  }

  if (password !== confirmPassword) {
      displayErrorMessage('Passwords do not match.');
      return;
  }

  if (country === '') {
      displayErrorMessage('Please select your country.');
      return;
  }

  // If all validations pass, register successful, redirect to home page
  window.location.href = 'home.html';
}

function displayErrorMessage(message) {
  var errorMessage = document.getElementById('errorMessage');
  errorMessage.textContent = message;
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
  return re.test(password);
}
