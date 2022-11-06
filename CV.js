const opencv = document.
querySelector('.Cassetteleft')
const opencvright = document.
querySelector('.cassetteright')
const opencvmid = document.
querySelector('.CV')


console.log(opencv);

window.addEventListener('scroll', () => {

    const {scrollTop,clientHeight} =
    document.documentElement;
    
    console.log(scrollTop, clientHeight);

    const topelementtotop = opencv.getBoundingClientRect().top;

    if(scrollTop > (scrollTop + topelementtotop).toFixed() -
    clientHeight * 0.30) {
        opencv.classList.add('active')
        opencvright.classList.add('active')
        opencvmid.classList.add('active')
        
    }

    if(scrollTop > (scrollTop + topelementtotop).toFixed() -
    clientHeight * 0.1) {
        
        console.log("im gay");
        
    }
    
    
})