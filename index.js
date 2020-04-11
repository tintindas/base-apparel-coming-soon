function validateEmail(email) {

  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.getElementById('form')
const email = document.getElementById('email')

form.addEventListener('submit', e => {

  e.preventDefault();
  const emailVal = document.getElementById('email').value;

  if(!validateEmail(emailVal)) {
    document.getElementById('warning').classList.add('error');
    document.getElementById('icon').classList.add('error');
    document.getElementById('email').classList.add('error');
  }

  else {
    document.getElementById('warning').classList.remove('error');
    document.getElementById('icon').classList.remove('error');
    document.getElementById('email').classList.remove('error');
  }
});
