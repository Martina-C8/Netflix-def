$(document).ready(function(){
    $('.carousel').carousel();
  });
  



  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("scrollToTop").style.display = "block";
      } else {
          document.getElementById("scrollToTop").style.display = "none";
      }
  }


  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  window.addEventListener('scroll', function () {
    var contentToShow = document.getElementById('contentToShow');
    var contentToHide = document.getElementById('contentToHide');
    var scrollPosition = window.scrollY;

    // Altezza della finestra del browser
    var windowHeight = window.innerHeight;

    // Posizione dell'elemento da mostrare rispetto all'inizio della pagina
    var contentToShowPosition = contentToShow.getBoundingClientRect().top;

    // Se l'elemento da mostrare è visibile nella finestra del browser, mostra il contenuto nascosto
    if (contentToShowPosition < windowHeight) {
        contentToHide.style.display = 'block';
    } else {
        contentToHide.style.display = 'none';
    }
});