function myFunction() {
    var x = document.querySelector(".navbar");
    var y =document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.transform="rotate(0deg)";
      y.style.transition = "1s";
    } else {
      x.style.display = "block";
      y.style.transform="rotate(90deg)"
      y.style.transition = "1s";
    }
  } 
