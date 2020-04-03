// JAVASCRIPT FOR COLLAPSIBLE PANEL
// document.addEventListener('DOMContentLoaded', function () {
//         var elems = document.querySelectorAll('.collapsible');
//         var instances = M.Collapsible.init(elems, options);
//     });

// JAVASCRIPT FOR TAB CONTENTS 
function showContent(contentName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = $(".tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(contentName).style.display = "block";

    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
}



