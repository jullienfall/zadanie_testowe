/* Slider */

let slideIndex = 1;
let timer = null;
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
    let i;
    let slides = document.getElementsByClassName("container-slider__slides");

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

let $table = document.querySelector('.container-table-main'),
    $n = 10,
    $rowCount = $table.rows.length,
    $firstRow = $table.rows[0].firstElementChild.tagName,
    $hasHead = ($firstRow === "TH"),
    $tr = [],
    $i, $ii, $j = ($hasHead) ? 1 : 0,
    $th = ($hasHead ? $table.rows[(0)].outerHTML : "");

var $pageCount = Math.ceil($rowCount / $n);

if ($pageCount > 1) {
    for ($i = $j, $ii = 0; $i < $rowCount; $i++, $ii++)
        $tr[$ii] = $table.rows[$i].outerHTML;
    $table.insertAdjacentHTML("afterend", "<div id='pagination'></div");
    sort(1);
}

function sort($p) {

    var $rows = $th,
        $s = (($n * $p) - $n);
    for ($i = $s; $i < ($s + $n) && $i < $tr.length; $i++)
        $rows += $tr[$i];

    $table.innerHTML = $rows;

    document.getElementById("pagination").innerHTML = pageButtons($pageCount);
    document.querySelector(".pagination" + $p).classList.add("pagination-active");
}

function pageButtons($pCount) {
    let $buttons = [];
    for ($i = 1; $i <= $pCount; $i++)
        $buttons += "<input type='button' class='pagination" + $i + "'value='" + $i + "' onclick='sort(" + $i + ")'>";
    return $buttons;
}

/* Filters */

const btnDownFilter = document.querySelectorAll('.container-filter__icon--i--down');
const btnUpFilter = document.querySelectorAll('.container-filter__icon--i--up');
const filtersAll = document.querySelectorAll('.container-filter__checkbox');
const parterBox = document.querySelector('.container-filter__checkbox--parter');
const gardenBox = document.querySelector('.container-filter__checkbox--garden');
const statusBox = document.querySelector('.container-filter__checkbox--status');
const priceBox = document.querySelector('.container-filter__checkbox--price');


function filtersOpen(x) {
    x.style.display = 'block';
    event.target.nextElementSibling.style.display = 'block';
    event.target.style.display = 'none';
}

function filtersClose(x) {
    x.style.display = 'none';
    event.target.previousElementSibling.style.display = 'block';
    event.target.style.display = 'none';
}

const filterBtn = document.querySelector('.container-filter__div--filter');
const checkbox = document.querySelectorAll('.container-filter__checkbox__input');

filterBtn.addEventListener('click', function () {
    if (document.getElementById('floor').checked) {
        checkboxCheck(floor)
    };
    if (document.getElementById('parter').checked) {
        checkboxCheck(parter)
    };
    if (document.getElementById('garden').checked) {
        checkboxCheck(garden)
    };
    if (document.getElementById('roof').checked) {
        checkboxCheck(roof)
    };
    if (document.getElementById('available').checked) {
        checkboxCheck(available)
    };
    if (document.getElementById('reserved').checked) {
        checkboxCheck(reserved)
    };
    if (document.getElementById('sold').checked) {
        checkboxCheck(sold)
    };
    if (document.getElementById('more').checked) {
        checkboxCheck(more)
    };
    if (document.getElementById('less').checked) {
        checkboxCheck(less)
    };

    for (i = 0; i < filtersAll.length; i++) {
        filtersAll[i].style.display = 'none';
    }

});

const floor = document.querySelectorAll('.floor');
const parter = document.querySelectorAll('.parter');
const garden = document.querySelectorAll('.garden');
const roof = document.querySelectorAll('.roof');
const available = document.querySelectorAll('.available');
const reserved = document.querySelectorAll('.reserved');
const sold = document.querySelectorAll('.sold');
const more = document.querySelectorAll('.more');
const less = document.querySelectorAll('.less');


function checkboxCheck(n) {
    let table = document.querySelector('.container-table-main')
    const rows = document.querySelectorAll(".container-table");
    rows.forEach(x => x.style.display = 'none');
    n.forEach(x => x.parentNode.style.display = 'table-row');
}

/*  Sorting */

function sortTableUp(n) {
    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = document.querySelectorAll(".container-table");
        for (i = 0; i < (rows.length - 1); i++) {
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
    event.target.nextElementSibling.classList.remove('container-table__icon--i--active');
    event.target.classList.add('container-table__icon--i--active');
}

function sortTableDown(n) {
    var rows, switching, i, x, y, shouldSwitch;
    switching = true;
    while (switching) {
        switching = false;
        rows = document.querySelectorAll(".container-table");
        for (i = 0; i < (rows.length - 1); i++) {
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
    event.target.previousElementSibling.classList.remove('container-table__icon--i--active');
    event.target.classList.add('container-table__icon--i--active');
}

/* House */

const allFlats = document.querySelectorAll('.container-house-table--td')
const leftParter = document.querySelectorAll('.container-house-table--td--left-parter');
const rightParter = document.querySelectorAll('.container-house-table--td--right-parter');
const leftFloor = document.querySelectorAll('.container-house-table--td--left-flour');
const rightFloor = document.querySelectorAll('.container-house-table--td--right-flour');
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

btnForm.addEventListener('click', function () {
    form.style.display = 'block';
    btnLess.style.display = 'flex';
    this.style.display = 'none';
});

btnLess.addEventListener('click', function () {
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

btnPlus.addEventListener('click', function () {
    myImg.classList.add('container-house--img--zoom-in');
});

btnMinus.addEventListener('click', function () {
    for (var i = 0; i < allImg.length; i++) {
        allImg[i].style.transform = 'translateX(' + 0 + 'px' + ') translateY(' + 0 + 'px' + ')';
    }
    myImg.classList.remove('container-house--img--zoom-in');
})

function getPositions(e) {

    isDown = true;
    startX = e.touches[0].pageX - imgDiv.offsetLeft;
    startY = e.touches[0].pageY - imgDiv.offsetTop;
    myImg.classList.add('container-house--img--zoom-in');
}

function disable(e) {
    isDown = false;
}

function zoomPan(e) {

    if (!isDown) return;

    e.preventDefault();

    const x = e.touches[0].pageX - imgDiv.offsetLeft;
    const y = e.touches[0].pageY - imgDiv.offsetTop;
    const panX = x - startX;
    const panY = y - startY;
    for (var i = 0; i < allImg.length; i++) {
        allImg[i].style.transform = 'translateX(' + panX + 'px' + ') translateY(' + panY + 'px' + ')';
    }
}

myImg.addEventListener("touchstart", getPositions);
myImg.addEventListener("touchend", disable);
myImg.addEventListener("touchcancel", disable);
myImg.addEventListener("touchmove", zoomPan);

/* Table for mobile */

const tableCol1 = document.querySelectorAll('.container-table--col1');
const tableCol2 = document.querySelectorAll('.container-table--col2');

function openTable1() {
    for (var i = 0; i < tableCol1.length; i++) {
        tableCol1[i].style.display = 'table-cell';
    }
    for (var j = 0; j < tableCol1.length; j++) {
        tableCol2[j].style.display = 'none';
    }
}

function openTable2() {
    for (var i = 0; i < tableCol1.length; i++) {
        tableCol1[i].style.display = 'none';
    }
    for (var j = 0; j < tableCol1.length; j++) {
        tableCol2[j].style.display = 'table-cell';
    }
}