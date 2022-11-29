var modal = document.getElementById('modal');
var bgModal = document.getElementById('bgmodal');

function openModal() {
  document.body.style.overflow = 'hidden'
  modal.style.display = 'block';
  bgModal.style.display = 'block'
}

function closeModal() {
  document.body.style.overflow = 'auto'
  modal.style.display = 'none'
  bgModal.style.display = 'none'
}

var text = document.getElementById('i24_4_10');
var tel = document.getElementById('i24_4_11');

function validation() {

  var nameInput = document.forms["form"]["name"].value;
  if (nameInput === '') {
    text.innerHTML = 'Укажите ваше имя'
    document.getElementById('name').style.borderColor = '#ff0000'
    return false;
  }

  var telInput = document.forms["form"]["tel"].value;
  if (telInput === '') {
    tel.innerHTML = 'Укажите номер телефона'
    document.getElementById('tel').style.borderColor = '#ff0000'
    return false;
  }
}