// get current position
var col = 0;
var delay = 500;

/* Define the function */
function animateMenu() {
  var colMax = 4;
  if (col++ < colMax) {
    /* Debug lines */
    //var date = new Date;
    //console.log("Column ",col,", Time: ",date.getTime())

    /* update the img element with arrow.png */
    document.getElementById('anim_'+col.toString()).src = 'images/arrow.png';
    /* wait delay (in ms) to recursively run for next column*/
    setTimeout(animateMenu, delay);
  }
}

//animateMenu()
/* Execute the function on page loading */
window.onload = setTimeout(animateMenu, 500);
