const text = document.querySelector(".main-text");

var n = 1;
let timer = setInterval(onTick, 2500);

function onTick() {
  if (n === 0) {
    text.innerHTML = '<span class="jobs"> Me llamo Edinson Rosario</span>';

    n = 1;
    return;
  }
  if (n === 2) {
    text.innerHTML = '<span class="jobs"> Me llamo Edinson Rosario</span>';

    n = 1;
    return;
  } else if (n == 1) {
    text.innerHTML = '<span class="jobs">Soy Web Developer FullStack</span>';
    n = 2;
    return;
  }
}
//to prevent autoscroll to bottom on refresh
$(window).on("load", function () {
  $(window).scrollTop(0);
  $(".loader-wrapper")
    .delay(1000)
    .fadeOut("medium");

  $(".home-text").fadeOut("fast");

  $(".home-text")
    .delay(1000)
    .fadeIn("slow");
});

// to prevent full render of name on small devices

const name = document.querySelector(".navbar-brand");

$(document).ready(function () {
  if ($(window).width() < 400) {
    name.innerHTML = "Edinson Rosario";
  } else {
    name.innerHTML = "Edinson Rosario";
  }
});
$(window).resize(function () {
  if ($(window).width() < 400) {
    name.innerHTML = "Edinson Rosario";
  } else {
    name.innerHTML = "Edinson Rosario";
  }
});
