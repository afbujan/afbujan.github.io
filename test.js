function hide(e, reflow) {
    if (reflow) {
        var answer = confirm("Are you sure?");
        if (answer) e.style.display = "none";
    }
    else {
        e.style.visibility = "hidden";
    }
}
function highlight(e) { // Highlight e by setting a CSS class
// Simply define or append to the HTML class attribute.
// This assumes that a CSS stylesheet already defines the "hilite" class
    if (!e.className) e.className = "hilite";
    else e.className += " hilite";
}


// The "load" event occurs when a document is fully loaded. Usually we
// need to wait for this event before we start running our JavaScript code.


//window.onload = function() { // Run this function when the document loads
//    // Find all <img> tags in the document
//    var images = document.getElementsByTagName("img");
//    // Loop through them, adding an event handler for "click" events to each
//    // so that clicking on the image hides it.
//    for(var i = 0; i < images.length; i++) {
//        var image = images[i];
//        if (image.addEventListener) // Another way to register a handler
//            image.addEventListener("click", hide, false);
//        else // For compatibility with IE8 and before
//            image.attachEvent("onclick", hide);
//}



// This is the event handler function registered above
function hide(event) { event.target.style.visibility = "hidden"; }
};

function debug(msg) {
    var logi = $("#debuglog"); // Find the element to display msg in.
    if (logi.length == 0) { // If it doesn't exist yet, create it...
        logi = $("<div id='debuglog'><h1>Debug Log</h1></div>");
        logi.appendTo(document.body); // and insert it at the end of the body.
    }
    logi.append($("<pre/>").text(msg)); // Wrap msg in <pre> and append to log.
}
