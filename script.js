function myFunction() {
    var x = document.querySelector(".navbar");
    var y =document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
      x.style.maxHeight="0";
      y.style.transform="rotate(0deg)";
      y.style.transition = "1s";
      x.style.transition = "display 0.25s ease-in";
    } else {
      x.style.display = "block";
      y.style.transform="rotate(180deg)"
      y.style.transition = "1s";
      x.style.maxHeight="130px"
      x.style.transition = "display 0.25s ease-in";
    }
  } 