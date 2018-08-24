/* Function to update any uploaded input image */
var updateImage = function(event) {
	var image = document.getElementById('inputImgDisplay');
	image.src = URL.createObjectURL(event.target.files[0]);
};
