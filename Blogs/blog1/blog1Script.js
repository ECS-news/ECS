function Python () {
  document.getElementById("python").style.display = "block";  
  document.getElementById("java").style.display = "none";  
  document.getElementById("javascript").style.display = "none";  
  
}
function Java () {
    document.getElementById("python").style.display = "none";  
    var image = document.getElementById("java")
    image.style.display = "block";  
    image.style.height = "10%" ;
    image.style.weight = "10%" ;
    document.getElementById("javascript").style.display = "none";
  
}
function Javascript() {
  document.getElementById("python").style.display = "none";  
  document.getElementById("java").style.display = "none";  
  document.getElementById("javascript").style.display = "block";
  
}
