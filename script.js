var nav = document.getElementById("dark_navbar");
var footer = document.getElementById("dark_footer")
var btn = document.getElementById("theme");

btn.addEventListener("click", function(){
  nav.classList.toggle("dark_theme");
  footer.classList.toggle("dark_theme");
})