

function start_background(selector) {

  //add various style on selector
  function sizeHomeElement(){
  console.log("resize")
    h = window.innerHeight;

    h = (h + 0) + "px";
      console.log(h)
        document.querySelector('#home').style.height = h;
  }
  sizeHomeElement();
      window.addEventListener('resize', sizeHomeElement);
  var selectedElement = document.querySelector(selector)
  selectedElement.style.backgroundSize = "cover";
  selectedElement.style.backgroundRepeat = "no-repeat";
  selectedElement.style.backgroundPosition = "center center";
  selectedElement.style["background-attachment"] = "fixed";


  setTimeout(function() {
    //add various style on selector

    var transition = "all " + 500 + 'ms ' + 'ease-in';
    var selectedElement = document.querySelector(selector)
    selectedElement.style.WebkitTransition = transition;
    selectedElement.style.MozTransition = transition;
    selectedElement.style.MsTransition = transition;
    selectedElement.style.OTransition = transition;
    selectedElement.style.transition = transition;
  }, 100);


  //this n is number of row  in object - if first row one function if more than 1 then other
  var n = 0;
  //li collection previous delays from previous slides
  var li = 0;

  arr = ["images/PG4-min.jpg", "images/PG58-min.jpg",  "images/PG54-min.jpg", "images/PG51-min.jpg" , "images/PG32-min.jpg"]
  //preload images for site performance
arrPreload = [arr];
arrPreload.push("images/logo/navlogowhite.png");
arrPreload.push("images/logo/navlogoblack.png");
arrPreload.push("images/logo/navlogo.png");
imgArr = []
arrPreload.forEach((item, i) => {
  var add = new Image();
  add.src = item;
  imgArr.push(add)
});


  function slider() {
    //switching all images one by one
      //here go all slides except first
      if (n < arr.length) {
        //set delay from collected number from previous slides

          document.querySelector(selector).style.backgroundImage = "url('" + arr[n] + "')";

      n++;

      } else {
        document.querySelector(selector).style.backgroundImage = "url('" + arr[0] + "')";
          n = 1;
      }
  };

  slider();

  setInterval(function() {
    slider();
  }, 3000);
}
