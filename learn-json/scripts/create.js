function addme() {
  // 1) Get form data
  const firstName = document.getElementById('fname').value.trim();
  const lastName  = document.getElementById('lname').value.trim();
  const email     = document.getElementById('email').value.trim();
  const phone     = document.getElementById('phone').value.trim();

  // 2) Create an object
  const contact = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone
  };

  // 3) Convert the object to a JSON string
  const jsonString = JSON.stringify(contact, null, 2);

  // 4) Display the JSON on the page
  document.getElementById('json-value').textContent = jsonString;

//log to console for testing
  console.log(jsonString);
}
