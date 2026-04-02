// set up DOM loading event listener 
document.addEventListener("DOMContentLoaded", function () {

    // find the dark mode button
    let darkModeButton = document.querySelector("#toggleDarkMode");

    // add a click function and handler
    darkModeButton.addEventListener("click", function (e) {
        
        // when clicked, add class to the body called "darkMode"
        document.body.classList.toggle("darkMode");
        // added more for customization reasons, used ai for help
        document.getElementById("toggleDarkMode").classList.toggle("darkMode");
        document.getElementById("rhodiestats").classList.toggle("darkMode");
        document.getElementById("subjectivematters").classList.toggle("darkMode");
        
    });

});