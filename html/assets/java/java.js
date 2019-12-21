var oof = new Audio('./assets/son/oof.mp3')


function OOF(){
  oof.play()
  console.log('oof!')
}

/*----------*/

let theme_link = document.getElementById("themeswap");
let currentTheme
let styles = new Map()
styles.set("black", "./assets/css/style.css")
styles.set("white", "./assets/css/style2.css")

function toogleTheme() {
    if (currentTheme === "black") setTheme("white")
    else setTheme("black")
}
function setTheme(name) {
    theme_link.href = styles.get(name)
    currentTheme = name
    localStorage.setItem("theme", name)
}
function init() {
    let c = localStorage.getItem("theme")
    if (c) currentTheme = c
    else {
        currentTheme = "white"
        if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            if (window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') currentTheme = "black"
        }
    }
    setTheme(currentTheme)
}
init();

var btn = document.querySelector('.toggle_btn');
var nav = document.querySelector('.nav');

btn.onclick = function(){
	nav.classList.toggle('nav_open');
}