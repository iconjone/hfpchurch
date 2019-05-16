

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
  document.querySelector(selector).style.backgroundSize = "cover";
  document.querySelector(selector).style.backgroundRepeat = "no-repeat";
  document.querySelector(selector).style.backgroundPosition = "center center";
  document.querySelector(selector).style["background-attachment"] = "fixed";


  setTimeout(function() {
    //add various style on selector

    var transition = "all " + 500 + 'ms ' + 'ease-in';
    document.querySelector(selector).style.WebkitTransition = transition;
    document.querySelector(selector).style.MozTransition = transition;
    document.querySelector(selector).style.MsTransition = transition;
    document.querySelector(selector).style.OTransition = transition;
    document.querySelector(selector).style.transition = transition;
  }, 100);


  //this n is number of row  in object - if first row one function if more than 1 then other
  var n = 0;
  //li collection previous delays from previous slides
  var li = 0;

  arr = ["images/bg_1.jpg", "images/event-2.jpg",  "images/event-3.jpg",  "images/event-4.jpg", "images/image_5.jpg"]

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
