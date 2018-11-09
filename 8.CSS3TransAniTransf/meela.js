function start(){
    // first remove overlay
    var oParent = document.getElementById("firstImage");
    var overlay = document.getElementById("overlay");
    oParent.removeChild(overlay);

    // slide image to new position
    var image = document.getElementById("container");

    image.style.width = "25%";

    // reveal additional images and text
    document.getElementById("secondImage").style.opacity = 1;
    document.getElementById("thirdImage").style.opacity = 1;
    document.getElementById("story").style.opacity = 1;
}