/* Slider */

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("container-slider__slides");

    if (n == undefined) {
        n = ++slideIndex
    }
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    timer = setTimeout(showSlides, 6000);
}

/* Pagination */

const tables = document.querySelectorAll('.container-table');
const tableOne = document.querySelectorAll('.container-table1');
const tableTwo = document.querySelectorAll('.container-table2');
const tableTree = document.querySelectorAll('.container-table3');
const tableFour = document.querySelectorAll('.container-table4');
const paginations = document.querySelectorAll('.pagination--a');

function openPage(x) {
    for (var i = 0; i < tables.length; i++) {
        tables[i].style.display = 'none';
    }
    for (var j = 0; j < x.length; j++) {
        x[j].style.display = 'table-row';
    }
    for (var n = 0; n < paginations.length; n++) {
        paginations[n].classList.remove('pagination--a--active');
        event.target.classList.add('pagination--a--active');
    }
}

/*  Arrow filters */

const arrows = document.querySelectorAll('.container-table__icon--i');

function sortTableUp(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector(".container-table-main");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    for (var w = 0; w < arrows.length; w++) {
        event.target.nextElementSibling.classList.remove('container-table__icon--i--active');
        event.target.classList.add('container-table__icon--i--active');
    }
}

function sortTableDown(n) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector(".container-table-main");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
    for (var w = 0; w < arrows.length; w++) {
        event.target.previousElementSibling.classList.remove('container-table__icon--i--active');
        event.target.classList.add('container-table__icon--i--active');
    }
}

/* House */

const allFlats = document.querySelectorAll('.container-house-table--td')
const leftParter = document.querySelectorAll('.container-house-table--td--left-parter');
const rightParter = document.querySelectorAll('.container-house-table--td--right-parter');
const leftFlour = document.querySelectorAll('.container-house-table--td--left-flour');
const rightFlour = document.querySelectorAll('.container-house-table--td--right-flour');
const btn = document.querySelectorAll('.container-house-button');
const allImg = document.querySelectorAll('.container-house--img');
const leftParterImg = document.querySelector('.container-house--img--left-parter');
const rightParterImg = document.querySelector('.container-house--img--right-parter');
const leftFloorImg = document.querySelector('.container-house--img--left-floor');
const rightFloorImg = document.querySelector('.container-house--img--right-floor');


function showFlat(x, y) {
    for (var i = 0; i < allFlats.length; i++) {
        allFlats[i].style.display = 'none';
    }
    for (var j = 0; j < x.length; j++) {
        x[j].style.display = 'table-cell';
    }
    for (var n = 0; n < btn.length; n++) {
        btn[n].classList.remove('container-house-button-active');
    }
    event.target.classList.add('container-house-button-active');
    for (var m = 0; m < allImg.length; m++) {
        allImg[m].style.display = 'none';
    }
    y.style.display = 'block';
};

/* Form Drop */

const btnForm = document.querySelector('.container-contact--drop-btn--form');
const btnLess = document.querySelector('.container-contact--drop-btn--less');
const form = document.querySelector('.container-contact-form');

btnForm.addEventListener('click', function(){
    form.style.display = 'block';
    btnLess.style.display = 'flex';
    this.style.display = 'none';
}); 

btnLess.addEventListener('click', function(){
    form.style.display = 'none';
    btnForm.style.display = 'flex';
    this.style.display = 'none';
}); 

/* Pictures zoom */

const btnPlus = document.querySelector('.container-house--zoom--btn--plus');
const btnMinus = document.querySelector('.container-house--zoom--btn--minus');
const imgDiv = document.querySelector('.container-house--col--img');
const myImg = document.querySelector('.container-house--img--zoom');
let isDown = false;
let startX;
let stateY;

btnPlus.addEventListener('click', function(){
    myImg.classList.add('container-house--img--zoom-in'); 
});

btnMinus.addEventListener('click', function(){
    for (var i=0; i<allImg.length; i++){
        allImg[i].style.transform = 'translateX(' + 0 + 'px' + ') translateY(' + 0 + 'px' + ')';
    }
    myImg.classList.remove('container-house--img--zoom-in');
})

function getPositions(e) {

   isDown = true;
   startX = e.pageX - imgDiv.offsetLeft;
   startY = e.pageY - imgDiv.offsetTop;
      myImg.classList.add('container-house--img--zoom-in');  
}

function disable(e) {
   isDown = false;
}

function zoomPan(e) {

   if(!isDown) return; //stop fn if mouse is not dowm

   e.preventDefault();

   const x = e.pageX - imgDiv.offsetLeft;
   const y = e.pageY - imgDiv.offsetTop;
   const panX = x - startX;
   const panY = y - startY;
    for (var i=0; i<allImg.length; i++){
    allImg[i].style.transform = 'translateX(' + panX + 'px' + ') translateY(' + panY + 'px' + ')';
    }
}

// Desktop
myImg.addEventListener("mousedown", getPositions);
myImg.addEventListener("mouseup", disable);
myImg.addEventListener("mouseleave", disable);
myImg.addEventListener("mousemove", zoomPan);

// Touch
myImg.addEventListener("touchstart", getPositions);
myImg.addEventListener("touchend", disable);
myImg.addEventListener("touchcancel", disable);
myImg.addEventListener("touchmove", zoomPan);
