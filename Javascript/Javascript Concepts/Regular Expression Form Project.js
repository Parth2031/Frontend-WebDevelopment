const name = document.querySelector('#name');
const zip = document.querySelector('#zip');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

// ! Form Blur Event Listeners :-

name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName()
{
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) 
    name.classList.add('is-invalid');
  else
    name.classList.remove('is-invalid');
}

function validateZip()
{
  const re = /^[0-9]{6}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) 
    zip.classList.add('is-invalid');
  else
    zip.classList.remove('is-invalid');
}

function validateEmail()
{
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) 
    email.classList.add('is-invalid');
  else
    email.classList.remove('is-invalid');
}

function validatePhone()
{
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) 
    phone.classList.add('is-invalid');
  else 
    phone.classList.remove('is-invalid');
}