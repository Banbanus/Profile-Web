// THEME SWITCHER SNIPPET
const moonPath = "",
      sunPath  = "";
const darkMode = document.querySelector('#darkMode');
let toggle = false;

// we need to click on the sun

darkMode.addEventListener('click', () => {
    //we need to use anime.js
    // set up the timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    //add different animation types
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle ? sunPath : moonPath}
        ]
    })
    .add({
        targets: "darkMode",
        rotate: 320,
    }, "-= 350")

    .add({
        targets: "section1",
        backgroundColor: toggle ? "rgba(255,255,255)" : rgba(0,1,1)
    }, "-= 350")

    //everytime we click on the sun I want that toggle to switch

    if(!toggle){
        toggle = true;
    }
    else {
        toggle = false
    }
});