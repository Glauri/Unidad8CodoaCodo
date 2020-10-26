var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

const fnameRegExp= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
const test= fnameRegExp.test(fname.text);

form.onsubmit = function(e) {
 if (fname.value === '' || lname.value === '') {
 e.preventDefault();
 para.textContent = 'Falta el arroba en el usuario';
 }
}