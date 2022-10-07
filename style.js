
AOS.init();
window.addEventListener("scroll",function(){
    const header= document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
let pick=document.getElementById("pick");
function openPick(){
    pick.classList.add("open-pick");
}
function closePick(){
    pick.classList.remove("open-pick");
}


let fundamental=document.getElementById("fundamental");
function openFundamental(){
    fundamental.classList.add("open-fundamental");
}
function closeFundamental(){
    fundamental.classList.remove("open-fundamental");
}

let version=document.getElementById("version");
function openVersion(){
    version.classList.add("open-version");
}
function closeVersion(){
    version.classList.remove("open-version");
}

let build=document.getElementById("build");
function openBuild(){
    build.classList.add("open-build");
}
function closeBuild(){
    build.classList.remove("open-build");
}

let repo=document.getElementById("repo");
function openRepo(){
    repo.classList.add("open-repo");
}
function closeRepo(){
    repo.classList.remove("open-repo");
}

$("#inline-popups").magnificPopup({
delegate: "a",
removalDelay: 500, //delay removal by X to allow out-animation
callbacks: {
beforeOpen: function () {
    this.st.mainClass = this.st.el.attr("data-effect");
}
},
midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
