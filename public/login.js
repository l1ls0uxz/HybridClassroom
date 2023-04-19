const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// button đăng nhập chuyển đến file index.html
var loginButton = document.getElementById('Login');
  loginButton.addEventListener('click', function() {
    window.location.href = '/admin/index.html';
  });
