function generateCV() {
  // First name validation start

  var nameField = document.getElementById("nameField").value;
  var nameErrorDiv = document.getElementById("nameErrorDiv");
  var nameT = document.getElementById("nameT");
  if (nameField == "") {
    nameErrorDiv.innerHTML = "*Please enter name";
    return false;
  }
  if (nameField.length <= 3 || nameField.length >= 40) {
    nameErrorDiv.innerHTML = "*Name must be 3 t0 40 character";
    return false;
  }

  if (!isNaN(nameField)) {
    nameErrorDiv.innerHTML = "*Name must be chracter";
    return false;
  }
  nameT.innerHTML = nameField;

  //    First Name validation End

  //   Father name validation start

  var fatherNameField = document.getElementById("fatherNameField").value;
  var fatherNameErrorDiv = document.getElementById("fatherNameErrorDiv");
  var fatherT = document.getElementById("fatherT");

  if (fatherNameField == "") {
    fatherNameErrorDiv.innerHTML = "*Please enter name";
    return false;
  }
  if (fatherNameField.length <= 3 || nameField.length >= 40) {
    fatherNameErrorDiv.innerHTML = "*Name must be 3 t0 40 character";
    return false;
  }

  if (!isNaN(fatherNameField)) {
    fatherNameErrorDiv.innerHTML = "*Name must be chracter";
    return false;
  }
  fatherT.innerHTML = fatherNameField;
  //    Father Name Validation End

  // Address Validation
  var addressField = document.getElementById("addressField").value;
  var addressT = document.getElementById("addressT");
  addressT.innerHTML = addressField;

  // Address Validation End

  // State Validation Start
  var stateField = document.getElementById("stateField").value;
  var stateErrorDiv = document.getElementById("stateErrorDiv");
  var stateT = document.getElementById("stateT");

  if (stateField == "") {
    stateErrorDiv.innerHTML = "*State must not be empty";
    return false;
  }
  if (!isNaN(stateField)) {
    stateErrorDiv.innerHTML = "State name must be name";
    return false;
  }

  stateT.innerHTML = stateField;

  // State validation End

  // Email validation start
  var emailField = document.getElementById("emailField").value;
  var emailErrorDiv = document.getElementById("emailErrorDiv");
  var emailT = document.getElementById("emailT");

  if (emailField == "") {
    emailErrorDiv.innerHTML = "Email must not be empty";
    return false;
  }

  if (emailField.indexOf("@") <= 0) {
    emailErrorDiv.innerHTML = "@ must not be at start";
    return false;
  }

  if (
    emailField.charAt(emailField.length - 4) != "." &&
    emailField.charAt(emailField.length - 3) != "."
  ) {
    emailErrorDiv.innerHTML = "** Please fill correct email Id";
    return false;
  }

  emailT.innerHTML = emailField;

  // Email validation End

  // Age Validation start
  var ageField = document.getElementById("ageField").value;
  var ageErrorDiv = document.getElementById("ageErrorDiv");
  var ageT = document.getElementById("ageT");

  if (ageField == "") {
    ageErrorDiv.innerHTML = "Age must not be empty";
    return false;
  }
  if (isNaN(ageField)) {
    ageErrorDiv.innerHTML = "Age must be number";
    return false;
  }
  if (ageField <= 20 || ageField > 50) {
    ageErrorDiv.innerHTML = "Age must be between 20 to 50";
    return false;
  }

  ageT.innerHTML = ageField;

  // Age validation end

  // Birthday validation start

  var birthdayField = document.getElementById("birthdayField").value;
  var birthdayT = document.getElementById("birthdayT");
  birthdayT.innerHTML = birthdayField;

  // End of Birthday Validation

  // Start of contact field
  var contactField = document.getElementById("contactField").value;
  var contactErrorDiv = document.getElementById("contactErrorDiv");
  var contactT = document.getElementById("contactT");
  if (contactField == "") {
    contactErrorDiv.innerHTML = "Please fill the contact details";
    return false;
  }
  if (contactField.length < 10) {
    contactErrorDiv.innerHTML = "Mobile number must be 10 digit";
    return false;
  }

  contactT.innerHTML = contactField;

  // End of contact Field

  // Start of gender validation
  var genderField = document.getElementsByName("gender");
  var genderT = document.getElementById("genderT");
  var genderErrorDiv = document.getElementById("genderErrorDiv");
  //  for(var radio of genderField){
  //      if(radio.checked){
  //          genderT.innerHTML=radio.value;
  //      }
  //      else{
  //          genderErrorDiv.innerHTML="Please select gender";
  //      }
  //  }

  for (var i = 0; i < genderField.length; i++) {
    if (genderField[i].checked) {
      genderT.innerHTML = genderField[i].value;
    }
  }

  // End of gender validation

  // start of languages validation

  var languageSelect = document.getElementsByClassName("languageSelect");
  var lenguagesT = document.getElementById("lenguagesT");
  for (var i = 0; i < languageSelect.length; i++) {
    if (languageSelect[i].checked) {
      lenguagesT.innerHTML = languageSelect[i].value;
    }
  }

  // End of languages validation

  // start of nationality field
  var nationalityField = document.getElementById("nationalityField").value;
  var nationalityErrorDiv = document.getElementById("nationalityErrorDiv");
  var nationalityT = document.getElementById("nationalityT");

  if (nationalityField == "") {
    nationalityErrorDiv.innerHTML = "*Please enter Nationality";
    return false;
  }

  if (!isNaN(nationalityField)) {
    nationalityErrorDiv.innerHTML = "*Nationality field must be chracter";
    return false;
  }
  nationalityT.innerHTML = nationalityField;

  //  End of nationality Field

  // Start of marital status

  var maritalStatusField = document.getElementById("maritalStatusField").value;
  var maritalStatusErrorDiv = document.getElementById("maritalStatusErrorDiv");
  var maritalT = document.getElementById("maritalT");

  if (maritalStatusField == "") {
    maritalStatusErrorDiv.innerHTML = "*Please enter Marital status";
    return false;
  }

  if (!isNaN(maritalStatusField)) {
    maritalStatusErrorDiv.innerHTML = "*Marital status field must be chracter";
    return false;
  }
  maritalT.innerHTML = maritalStatusField;

  // end of marital status

  // Start of hobbies validation
  var hobbyField = document.getElementById("hobbyField").value;
  var hobbyT = document.getElementById("hobbyT");
  hobbyT.innerHTML = hobbyField;
  //    End of hobbies validation

  // EDUCATIONAL DETAILS

  // 10th Validation start
  var tenthField = document.getElementById("tenthField").value;
  var tenthErrorDiv = document.getElementById("tenthErrorDiv");
  var tenthT = document.getElementById("tenthT");
  if (tenthField == "") {
    tenthErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  tenthT.innerHTML = tenthField;
  // 10th Validation End

  // 12th Validation start
  var twelthField = document.getElementById("twelthField").value;
  var twelthErrorDiv = document.getElementById("twelthErrorDiv");
  var twelthT = document.getElementById("twelthT");
  if (twelthField == "") {
    twelthErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  twelthT.innerHTML = twelthField;
  // 12th Validation End

  // Graduation Validation start
  var graduationField = document.getElementById("graduationField").value;
  var graduationErrorDiv = document.getElementById("graduationErrorDiv");
  var graduationT = document.getElementById("graduationT");
  if (graduationField == "") {
    graduationErrorDiv.innerHTML = "Marks must not be empty";
    return false;
  }
  graduationT.innerHTML = graduationField;
  // Graduation Validation End

  //  EDUCATIONAL DETAILS END

  // OBJECTIVE

  var objectiveField = document.getElementById("objectiveField").value;
  var objectiveT = document.getElementById("objectiveT");
  objectiveT.innerHTML = objectiveField;

  // Objective End
  var show = document.getElementById("show");
  show.style.display = "block";

  var showInformation = document.getElementById("showInformation");
  showInformation.style.display = "none";
}

function printForm() {
  var btn = document.getElementById("btn");

  btn.style.display = "none";
  window.print();
}

function clickCounter3() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount3) {
      localStorage.clickcount3 = Number(localStorage.clickcount3) + 1;
    } else {
      localStorage.clickcount3 = 1;
    }
  }
}

console.log(localStorage.clickcount3);
