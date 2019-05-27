function resetNavItem(element) {
  navArr = document.getElementsByClassName('nav-item')
  navArr = Object.entries(navArr)
  navArr.forEach(function(elem) {
    elem[1].className = 'nav-item smoothscroll'
  })
  classNavActive = 'nav-item smoothscroll active'
  element.parentElement.className = classNavActive;
}
function scrollToMP(element){
  var magnificPopup = $.magnificPopup.instance; // save instance in magnificPopup variable
magnificPopup.close(); // Close popup that is currently opened
  var hash = element
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 700, 'easeInOutExpo', function() {
    window.location.hash = hash;
  });
}

// old function
// <script type="text/javascript">
// function sizeHomeElement() {
//   console.log("resize")
//   h = window.innerHeight;
//
//   h = (h + 80) + "px";
//   console.log(h)
//    document.querySelector('#home').style.height = "842px";
// }
// sizeHomeElement();
//   window.addEventListener('resize', sizeHomeElement);
//
// </script>
