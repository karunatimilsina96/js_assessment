// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  var elem = document.getElementById("myAnimation");
  var pos = elem.style.left;
  var newPos = pos + 100;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == newPos) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}

// call this function from Html
