const getAccDropD = document.getElementsByClassName("accountDropdown")[0];
const getDropDCon = document.querySelector('.ddContainer');

const getmobileMenu = document.querySelector('.mobileMenu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

const getmobileMenuList = document.querySelector(".mobileMenuList");

getAccDropD.addEventListener("click", () => {

    if(getDropDCon.classList.contains("show")){
        getDropDCon.classList.remove('show');
    }else{
        getDropDCon.classList.add('show');
    }

});

getmobileMenu.addEventListener("click", () => {

    if(getmobileMenu.classList.contains('showMb')){
        line1.classList.remove('p45');
        line2.classList.remove('op');
        line3.classList.remove('m45');
        getmobileMenu.classList.remove('showMb');
        getmobileMenuList.classList.remove('mbShow');
    }else{
        line1.classList.add('p45');
        line2.classList.add('op');
        line3.classList.add('m45');
        getmobileMenu.classList.add('showMb');
        getmobileMenuList.classList.add('mbShow');
    }

});
// end navbar 

// start carousel
const slide = document.getElementsByClassName("carousel-item");
const seeMore = document.querySelector(".seeMore");
const dot = document.querySelectorAll(".dot");

let curSlide = 1;

seeMore.addEventListener("click",function(){

    curSlide += 1;
    carousel(curSlide);
    console.log(curSlide)
});



carousel(curSlide);

function carousel(slideNum){

    for(let x = 0; x < slide.length; x++){
        slide[x].style.display = 'none';
    }

    for(let y = 0; y < dot.length; y++){
        dot[y].classList.remove('active');
    }

    if(slideNum >= slide.length){
        curSlide = 1;
    }

    if(slideNum < 1){
        slide[curSlide-1].style.display = 'none';
    }

    slide[curSlide-1].style.display = 'block';
    slide[curSlide].style.display = 'block';

    dot[curSlide-1].classList.add("active");
    dot[curSlide].classList.add("active");

}
// end carousel

// start footer
const year = document.getElementById('year');
const curYear = new Date().getUTCFullYear();

year.innerHTML = curYear;
// end footer 
