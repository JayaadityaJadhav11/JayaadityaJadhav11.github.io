function headerchange() {
  var header = document.getElementById("header");
  var logo = document.getElementById("logo");
  var logotext = document.getElementById("logo-text");
  if (document.scrollingElement.scrollTop < 100) {
    header.style.backgroundColor = "rgba(0, 0, 0, 0)";
    header.style.boxShadow = " 0px 7px 10px 0px rgba(0, 0, 0, 0.3)";
    //     header.style.boxShadow = "none";
    // logotext.style.color = "#333";
    logotext.style.fontSize = "30px";
    header.style.height = "15vh";
    logo.style.height = "70px";
    logo.style.width = "70px";
  } else {
    header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    header.style.height = "7vh";
    logo.style.height = "6vh";
    logo.style.width = "6vh";
    logotext.style.fontSize = "2vh";
    logotext.style.color = "white";
  }
}
window.addEventListener("scroll", headerchange);
