function innerwidth () {
  let width = window.innerWidth;
  document.getElementById("innerWidth").innerHTML = width ;
}
function innerheight () {
  let height = window.innerHeight;
  document.getElementById("innerHeight").innerHTML = height ;
}

function outerwidth () {
  let width = window.outerWidth;
  document.getElementById("outerWidth").innerHTML = width ;
}

function outerheight () {
  let height = window.outerHeight;
  document.getElementById("outerHeight").innerHTML = height ;
}

window.onload = jsOnLoad ;  
const funcs = [innerwidth,innerheight,outerwidth,outerheight] ;
function jsOnLoad () {
  const buttons = document.querySelectorAll("button") ;
  for (let i = 0 ; i < buttons.length ; i++) {
    buttons[i].addEventListener("click" , funcs[i]) ;
  }
}





