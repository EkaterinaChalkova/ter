const button = document.getElementById('button1');
// document.getElementById('header').hidden = false;
function changeBlock() {
  document.getElementById('header').hidden =
    !document.getElementById('header').hidden;
}

function modalWin(id) {
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({ width: maskWidth, height: maskHeight });
  $('#mask').fadeIn(1000);
  $('#mask').fadeTo('slow', 0.8);
  var winH = $(window).height();
  var winW = $(window).width();
  $(id).css('top', winH / 2 - $(id).height() / 2);
  $(id).css('left', winW / 2 - $(id).width() / 2);
  $(id).fadeIn(2000);
}

let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
const button2 = document.getElementById('button2 ');
function change() {}

$(document).ready(function () {
  $('.window .close').click(function (e) {
    e.preventDefault();
    $('#mask, .window').hide();
  });
  $('#mask').click(function () {
    $(this).hide();
    $('.window').hide();
  });
});
modalWin('#dialog');

const dialog = document.getElementById('dialog');
function closeModal() {
  document.getElementById('dialog').hidden =
    !document.getElementById('dialog').hidden;
}
