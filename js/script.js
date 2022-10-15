
// PRELOADER
let preloader = document.getElementById("preloader-container")
let body = document.getElementById("body")

function prefunction(){
    preloader.style.display = "none"
    body.style.overflowY = "auto"
}

// MOBILE MENU
function mobilemenu(){
    document.getElementById("navbar").style.left = "0px"
    document.getElementById("mobile-menu").style.display = "none"
}
function closemenu(){
    document.getElementById("navbar").style.left = "-528px"
    document.getElementById("mobile-menu").style.display = "inline-block"
}


// SCROLL HIDDEN

window.addEventListener('scroll', function(){
    let scrollhidden = document.getElementById('navbar');

    if(window.innerWidth <= 500){
        if(window.pageYOffset >= 1){
            scrollhidden.style.left = '-528px'
            document.getElementById('mobile-menu').style.display = 'inline-block'
        }else if(window.innerWidth > 500){
            scrollhidden.style.left = '0px'
        }
    }   

});


window.addEventListener('scroll', function(){
    if(window.pageYOffset >= 548){
        document.getElementById('abt-li').style.color = '#ff4c29';
        // document.getElementById('home-li').style.color = '#fff';
    }else{
        document.getElementById('abt-li').style.color = '#fff';
        // document.getElementById('home-li').style.color = '#ff4c29';
    }

    if(window.pageYOffset >= 2015.88){
        document.getElementById('contect-li').style.color = '#ff4c29'
        document.getElementById('abt-li').style.color = '#fff'
    }else{
        document.getElementById('contect-li').style.color = '#fff'
        // document.getElementById('abt-li').style.color = '#efd91f'
    }
})