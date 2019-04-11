// Smooth Scrolling
$('#main-nav a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#main-nav').style.opacity = 0.9;
  } else {
    document.querySelector('#main-nav').style.opacity = 1;
  }
});