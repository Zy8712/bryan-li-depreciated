/* Initialize Animate on Scroll */

AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

var navbar_minimized = false;
let top_page_button = document.getElementById("to_top");
var $j;

window.onload = function(){
  $j = jQuery.noConflict();

  var minimize_button = $("minimize-navbar-button");
  minimize_button.observe("click", changeNavBar); // can use .observe or .addEventListener

  window.addEventListener("resize", checkNavBarText);

  loadprojects();
}

window.onscroll = function(){
  scrollFunction();
}

function loadprojects(){
  /*var baseURL = window.location.href.replace(/\/[^\/]*$/, ''); // Get the base URL

  $j("#project-container").load(baseURL + "/main/path-filters/all-projects.html #all-projects"); */

  $j("#project-container").load("../path-filters/all-projects.html #all-projects");
}

function changeNavBar(){
  if (navbar_minimized == false){
    $("nav-option0").innerHTML = "[H]";
    $("nav-option1").innerHTML = "[1]";
    $("nav-option2").innerHTML = "[2]";
    $("nav-option3").innerHTML = "[3]";
    $("nav-option4").innerHTML = "[4]";


    $("nav-option0").title = "Home";
    $("nav-option1").title = "Newbie";
    $("nav-option2").title = "Junior";
    $("nav-option3").title = "Intermediate";
    $("nav-option4").title = "Intermediate";


    $("side_icon").className = "d-none";
    document.getElementsByTagName("nav")[0].className = "navbar navbar-expand-lg navbar-dark fixed-top navbar2";
    $("content-wrapper").className = "content-change-wrapper";
    navbar_minimized = true;
  }
  else{
    $("nav-option0").innerHTML = "Home";
    $("nav-option1").innerHTML = "Newbie";
    $("nav-option2").innerHTML = "Junior";
    $("nav-option3").innerHTML = "Intermediate";
    $("nav-option4").innerHTML = "Intermediate";

    $("nav-option0").title = "";
    $("nav-option1").title = "";
    $("nav-option2").title = "";
    $("nav-option3").title = "";
    $("nav-option4").title = "";


    $("side_icon").className = "d-none d-lg-block";
    document.getElementsByTagName("nav")[0].className = "navbar navbar-expand-lg navbar-dark fixed-top";
    $("content-wrapper").className = "full-wrapper";
    navbar_minimized = false;
  }
}

function checkNavBarText(){
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;

  if(w < 992 && navbar_minimized == true){
    $("nav-option0").innerHTML = "Home";
    $("nav-option1").innerHTML = "Newbie";
    $("nav-option2").innerHTML = "Junior";
    $("nav-option3").innerHTML = "Intermediate";
    $("nav-option4").innerHTML = "Intermediate";

    $("nav-option0").title = "";
    $("nav-option1").title = "";
    $("nav-option2").title = "";
    $("nav-option3").title = "";
    $("nav-option4").title = "";
  }
  else if (w >= 992 && navbar_minimized == true){
    $("nav-option0").innerHTML = "[H]";
    $("nav-option1").innerHTML = "[1]";
    $("nav-option2").innerHTML = "[2]";
    $("nav-option3").innerHTML = "[3]";
    $("nav-option4").innerHTML = "[4]";

    $("nav-option0").title = "Home";
    $("nav-option1").title = "Newbie";
    $("nav-option2").title = "Junior";
    $("nav-option3").title = "Intermediate";
    $("nav-option4").title = "Intermediate";
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
    top_page_button.style.display = "block";
  } else {
    top_page_button.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
