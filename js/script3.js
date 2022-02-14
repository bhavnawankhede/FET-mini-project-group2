const btnLogin = document.querySelector('.nav__linkLogin--btn');
const userNameInput = document.querySelector('.login__input--user');
const passwordInput = document.querySelector('.login__input--pin');

btnLogin.addEventListener('click', function (e) {
  console.log(passwordInput.value);
  e.preventDefault();
  if (userNameInput.value === '') {
    console.log('Empty');
  } else if (
    userNameInput.value === 'admin' &&
    passwordInput.value === 'admin123'
  ) {
    console.log('Admin Login');
    window.location.href = 'index2.html';
  } else {
    console.log('User Login');
  }
});
