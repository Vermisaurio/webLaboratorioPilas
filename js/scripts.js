function width_textImg() {
  /* slider home height */
  if (document.body.offsetWidth > 979) {
    var contSlider = document.getElementsByClassName('cont-slider');
    contSlider[0].style.height = window.innerHeight * 0.80 + 'px';
  }
}

function mostrarMenu() {
  var menu = document.getElementsByClassName('dl-menu');
  var pSpan = document.getElementById('dl-menu');
  var span = pSpan.getElementsByTagName('span')[0];
  if (menu[0].style.display == 'block') {
    span.className = '';
    menu[0].style.opacity = 0;
    setTimeout(function() {
      menu[0].style.display = 'none';
    }, 700);
  }
  else
  {
    span.className = 'cerrar';
    menu[0].style.display = 'block';
    setTimeout(function() {
      menu[0].style.opacity = 1;
    }, 400);
  }
}
