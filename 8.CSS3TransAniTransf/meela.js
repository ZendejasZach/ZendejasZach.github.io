// various functions when an image is clicked
function imageClick(image) {
   // debugging
   //console.log("CLICK!");
   //console.log(image);

   // remove opacity effect
   removeOpacity()

   // show additional pictures
   imageChange(image);

   //Show text with selected image 
   imageText();

   // alter text for image
   changeText(image);
}

function imageChange(image) {
   console.log("imageChange called");

   // initial conditional statement
   if (image === "birth") {
      birthImages();
   }
   else if (image === "trach") {
      trachImages();
   }
   else if (image === "personality") {
      personalityImages();
   }

   // functions to change the images
   function birthImages() {
      console.log("Birth Function Called");

      // Transition
      document.getElementById("image2").style.visibility = "hidden";
      // replace images with birth images
      /*
      document.getElementById("image2").src = "birth2.jpeg";
      document.getElementById("image3").src = "birth3.jpg";
      */
   }

   /*
   function trachImages() {
      console.log("Trach Function Called");

      // replace images with birth images
      document.getElementById("image1").src = "trach2.jpg";
      document.getElementById("image3").src = "trach3.jpg";
   }

   function personalityImages() {
      console.log("Personality Function Called");

      // replace images with birth images
      document.getElementById("image1").src = "personality2.jpeg";
      document.getElementById("image2").src = "personality3.jpg";
   }
   */
}

function imageText() {
   var text = document.getElementById("imageText");

   if (text.style.display === "block") {
      text.style.display = "none";
   }
   else {
      text.style.display = "block";
   }
}

function removeOpacity() {
   // stuff
}

function changeText(image) {
   // grab the element to chagne
   var text = document.getElementById("imageText");
   if (image === "birth") {
      text.innerHTML = "Meela Zendejas was born extremly early at only 23 weeks. However, due to additonal complications, she was measuring at only 21 weeks and had a birth weight of only 15 Oz. This classified her as a 'Micro-Premie'. She needed oxygen and other support systems to keep her alive. She had a long fight ahead of her.";
   }
   else if (image === "trach") {
      text.innerHTML = "After multiple failed attempts to extubate and remove the breathing tube, doctors decided that a tracheostomy was the best option. She has her trach to this day.";
   }
   else if (image === "personality") {
      text.innerHTML = "As time moved on, Meela began to grow. Although she had a rough start, her sassy personality began to show. She became a light to our little family."
   }
}