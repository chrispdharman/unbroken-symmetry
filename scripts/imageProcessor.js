/* Function to execute clearCut program */
function executeClearCut() {
  console.log("ClearCutter running...");

  /* Identify html element */
  var imgSrc = document.getElementById("inputImg").files[0])

  /* Display uploaded image in html */
  try {
    image.src = window.URL.createObjectURL(imgSrc);
  }
  catch(err) {
    console.log("Warning: no image file has been selected.",err.message);
    return false;
  }

  /* If image is found, execute python script */
  /*$.ajax({
    type: "POST",
    url: "http://localhost:3000/clearCutter.py",
    data: { imgUrl: image.src },
    success: function(response) {
      console.log(response);
    },
    error: function(response) {
      console.log(response);
    },
  })*/

  return false;
}
