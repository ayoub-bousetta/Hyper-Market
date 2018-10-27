

var slideIndex = 1;

let left_side = document.getElementById("left-side");
let right_side = document.getElementById("right-side");

function showDivs(n) {
    var i;
   
    var x = document.getElementsByClassName("item_image");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex-1].style.display = "block";  
  }
  
  showDivs(slideIndex);

const leftSide = ()=>{
    n=-1;
    showDivs(slideIndex += n);

}



const rightSide = ()=>{
    n=1;
    showDivs(slideIndex += n);

}


right_side.addEventListener('click',rightSide);
left_side.addEventListener('click',leftSide);