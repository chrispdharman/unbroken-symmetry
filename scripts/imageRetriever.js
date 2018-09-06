/* Function to update any uploaded input image */
function updateImage() {
  /* Identify html element */
  var imgSrc = document.getElementById("inputImg").files[0];
  var image = document.getElementById("inputImgDisplay");
  console.log("imgSrc value=",imgSrc);

  /* Display uploaded image in html */
	image.src = window.URL.createObjectURL(imgSrc);
  return false;
};
