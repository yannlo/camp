// header script
var lasScrollTopHeader =0 
let header = document.getElementById("header")
window.addEventListener("scroll",function(e) {
    var scrollTop = window.pageYOffset || document.documentElement. scrollTop;
    if (scrollTop > lasScrollTopHeader) {
        header.style.top = "-80px"
    } else {
        header.style.top = "0px"
    }
    lasScrollTopHeader = scrollTop;
})

// navbar script
let icon = document.getElementById('bar-icon');
icon.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();

    let bar = document.getElementById('nav-bar');
    if(bar.style.left != "0px"){
        bar.style.left ="0px";
        icon.style.right = "0"
        icon.className = "fas fa-times"
    }
    else{
        bar.removeAttribute("style");
        icon.style.right = "-60px"
        icon.className = "fas fa-bars"

    }
})

sommaireLink = document.getElementsByClassName('sommaire-link');
for (let index = 0; index < sommaireLink.length; index++) {
    const element = sommaireLink[index];
    let bar = document.getElementById('nav-bar');
    element.addEventListener("click",function(e){
        e.stopPropagation();
        e.preventDefault();
        let name = String(element.getAttribute("href")).substring(1);
        let section = document.getElementById(name)
        console.log(section.offsetTop);
        document.body.scrollTop = section.offsetTop-50;
        document.documentElement.scrollTop = section.offsetTop-100;
        bar.removeAttribute("style");
        icon.style.right = "-60px"
        icon.className = "fas fa-bars"
    })
}

// got top script
lasScrollTopGoTop =0;
let goTop = document.getElementById("go-top")
window.addEventListener("scroll",function(e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lasScrollTopGoTop) {
        goTop.style.display = "inline-block";
    } else {
        goTop.style.display = "none";
    }

})

goTop.addEventListener("click",function(e) {
    e.preventDefault();
    e.stopPropagation();

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

})