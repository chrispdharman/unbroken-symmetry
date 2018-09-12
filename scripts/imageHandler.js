/* Function to update any uploaded input image */
function updateImage() {
  /* Identify html element */
  var imgSrc = document.getElementById("inputImg").files[0];
  var image = document.getElementById("inputImgDisplay");
  console.log("imgSrc value=",imgSrc);

  /* Display uploaded image in html */
  try {
    image.src = window.URL.createObjectURL(imgSrc);
  }
  catch(err) {
    console.log("Warning: no image file has been selected.",err.message);
  }
  return false;
};


/* Function to execute clearCut program */
function executeClearCut() {
  console.log("ClearCutter running...");

  /* Display uploaded image in html */
  try {
    /* Identify html element */
    var imgSrc = document.getElementById("inputImg").files[0];
    //console.log(imgSrc)
  }
  catch(err) {
    console.log("Warning: no image file has been selected.",err.message);
    return false;
  }

  /* Form input json */
  var inputs = {
    imgUrl : imgSrc
  };

  /* If image is found, execute python script */
  $.ajax({
    type: "POST",
    dataType: "text",
    /*url: "http://127.0.0.1:5000/clearCutter",*/
    url: "env/app/clearCutter/clearCutter/__init__.py",
    contentType: 'application/x-www-form-urlencoded',
    data: inputs,
    processData: false,
    success: function(response) {
      if (!$.trim(data)){
        alert("What follows is blank: " + data);
      }
      else{
        alert("What follows is not blank: " + data);
      };
      console.log(response);
    },
    error: function(response) {
      console.log("ajax error: ",response);
    },
  })

  return false;
}
