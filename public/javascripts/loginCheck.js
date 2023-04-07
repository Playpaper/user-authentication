const loginForm = document.querySelector('#login-form')

loginForm.addEventListener('submit', function(e) {
  if(!loginForm.checkValidity()) {
    e.preventDefault()
    e.stopPropagation()
  }
  loginForm.classList.add('was-validated')
})
