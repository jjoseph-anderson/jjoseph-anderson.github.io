var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var fragmentIdentifier = window.location.hash.substring(1); // Get the fragment identifier without the '#'

var accordion = document.getElementById(fragmentIdentifier);

// Check if the element exists and trigger a click event
if (accordion) {
  accordion.click();
}
;

function readMore() {
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMore");

  if (moreText.style.display === "inline") {
    btnText.innerHTML = "<strong> Read more...</strong>";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "<strong> Read less.</strong>";
    moreText.style.display = "inline";
  }
}
