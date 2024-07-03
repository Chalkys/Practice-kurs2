document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "how_to_survive.txt", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var content = xhr.responseText;
            var paragraphs = content.split("\n\n");
            var formattedContent = paragraphs.map(function(paragraph) {
                return "<p>" + paragraph.replace(/\n/g, "<br>") + "</p>"; 
            }).join("");
            document.getElementById("survival").innerHTML = formattedContent;
        }
    };
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "about_gardening.txt", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var content = xhr.responseText;
            var paragraphs = content.split("\n\n");
            var formattedContent = paragraphs.map(function(paragraph) {
                return "<p>" + paragraph.replace(/\n/g, "<br>") + "</p>"; 
            }).join("");
            document.getElementById("content").innerHTML = formattedContent;
        }
    };
    xhr.send();
});