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


