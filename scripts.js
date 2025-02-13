
document.getElementById('go-to-signup').addEventListener('click', function () {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('go-to-login').addEventListener('click', function () {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
});

document.getElementById('forgot-password').addEventListener('click', function () {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('forgot-password-form').style.display = 'block';
});

document.getElementById('back-to-login').addEventListener('click', function () {
  document.getElementById('forgot-password-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  alert('Logged in with email: ${email}');
});

document.getElementById('signup').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;
  alert('Signed up with name: ${name}, email: ${email}, phone: ${phone}');
});

document.getElementById('forgot-password-form-details').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('reset-email').value;
  alert('wswswsPassword reset link sent to: ${email}');
});