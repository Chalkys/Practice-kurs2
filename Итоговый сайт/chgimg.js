document.addEventListener("DOMContentLoaded", function() {
    var hoverImage = document.getElementById("hoverImage");
    var hoverImageS = document.getElementById("hoverImageS");
    hoverImage.addEventListener("mouseover", function() {
        hoverImage.style.transform = "scale(1.2)";
    });
    hoverImage.addEventListener("mouseout", function() {
        hoverImage.style.transform = "scale(1)";
    });

    hoverImageS.addEventListener("mouseover", function() {
        hoverImageS.style.transform = "scale(4)";
    });
    hoverImageS.addEventListener("mouseout", function() {
        hoverImageS.style.transform = "scale(1)";
    });
});