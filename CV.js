const opencv = document.
querySelector('.Cassetteleft')
const opencvright = document.
querySelector('.cassetteright')
const opencvmid = document.
querySelector('.CV')
const navbar = document.
querySelector('.P-navigation')

let showscreen = function() {
    var loadingScreen = document.getElementById("loading-screen");
    loadingScreen.style.display = "none";
};
setTimeout(showscreen, 5000);

window.addEventListener('scroll', () => {

    const {scrollTop,clientHeight} =
    document.documentElement;
    
    console.log(scrollTop, clientHeight);

    const topelementtotop = opencv.getBoundingClientRect().top;
    const topelementtobot = opencv.getBoundingClientRect().bottom;


    if(scrollTop > (scrollTop + topelementtotop).toFixed() -
    clientHeight * 0.30) {
        opencv.classList.add('active')
        opencvright.classList.add('active')
        opencvmid.classList.add('active')
    }

    if(scrollTop > (scrollTop + topelementtobot).toFixed() -
    clientHeight * 0.4) {
        opencv.className ="Cassetteleft"
        opencvright.className ="cassetteright"
        opencvmid.className ="CV"
    }






})
window.onscroll = function() {
    if (window.pageYOffset > 50) {
        navbar.classList.add("active");
        console.log("quoi? feur")
    }
    else {
        navbar.className = "P-navigation"
    }
}


