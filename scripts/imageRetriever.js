/* Function to update any uploaded input image */
function updateImage(arg) {
	var image = document.getElementById('inputImgDisplay');
	console.log(image);
	image.src = URL.createObjectURL(arg.target.files[0]);
};
