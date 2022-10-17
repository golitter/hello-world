let left = 0;
let timer;
let _cirPrevBut = document.querySelector(".prevButton");
let _cirNextBut = document.querySelector(".nextButton");
let _esico = document.getElementById("iconlist").getElementsByTagName("li");
let esicolist = document.querySelector("#iconlist");
let eimglist = document.querySelector("#imglist");
function imgChange (n) {
    let lt = - (n*800);
    imglist.style.marginLeft = lt + 'px';
    left = lt;
}
function _run() {
    if(left <= -3200) {
        left = 0;
    }
    let m = Math.floor(-left / 800);
    imglist.style.marginLeft = left + 'px';
    left -= 10;
    let n = (left % 800 == 0)?1200:10;
    timer = setTimeout(_run,n);
    iconChange(m);
}
function cirChange() {
    _run();
}
function _cirNextChange() {
    _cirNextBut.onclick = ()=> {
        let nextgo = Math.floor(-left / 800) + 1;
        if(nextgo == 4) nextgo = 0;
        imgChange(nextgo);
    };
}
function _cirPrevChange() {
    _cirPrevBut.onclick = ()=> {
        /* 通过获取当前位置，减去一，就是上一张 */
        let prevgo = Math.floor(-left / 800) - 1;
        if(prevgo == -1) prevgo = 3;
        imgChange(prevgo);
    };     
}
function iconChange(m) {
    for(let i = 0; i < _esico.length; ++i) {
        _esico[i].style.backgroundColor = "";
    }
    if(m < _esico.length) {
        _esico[m].style.backgroundColor = "red";
    }
}
esicolist.onclick = function() {
    let tg = event.target;
    let ico = tg.innerHTML - 1;
    imgChange(ico);
    iconChange(ico);
}
eimglist.onmouseover = function () {
    clearTimeout(timer);
}
export {
    timer,
    left,
    _cirNextBut,
    _cirPrevBut,
    imgChange,
    _run,
    cirChange,
    _cirNextChange,
    _cirPrevChange,
    iconChange
}
