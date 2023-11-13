let showed_box = 0;

function fNext() {
  showed_box += -500;

  if (showed_box < -2000) showed_box = 0;

  document.getElementById("sld").style.transform =
    "translateX(" + showed_box + "px)";
}

function fPrevious() {
  showed_box += 500;

  if (showed_box > 0) showed_box = -2000;

  document.getElementById("sld").style.transform =
    "translateX(" + showed_box + "px)";
}
