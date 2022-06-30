// The blur event fires when an element has lost focus.
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const nameInput = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/; // only letters allowed, between 2 to 10 characters
  if (!re.test(nameInput.value)) {
    nameInput.classList.add('is-invalid');
  } else {
    nameInput.classList.remove('is-invalid');
  }
}

function validateZip() {
  const zipInput = document.getElementById('zip');
  //   const re = /^[0-9]{5}(-[0-9]{4})?$/; // US zipcode
  //   const re = /^[0-9]{5}$/; // Germany zipcode
  const re = /^[0-9]{3}([0-9]{2})?$/; // Taiwan zipcode
  if (!re.test(zipInput.value)) {
    zipInput.classList.add('is-invalid');
  } else {
    zipInput.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/;
  if (!re.test(emailInput.value)) {
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const phoneInput = document.getElementById('phone');
  const re = /^\(?\d{4}\)?[-. ]?\d{3}[-. ]?\d{4}$/; // German phone number format
  if (!re.test(phoneInput.value)) {
    phoneInput.classList.add('is-invalid');
  } else {
    phoneInput.classList.remove('is-invalid');
  }
}
