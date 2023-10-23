import home from "./home.js"
import menu from "./menu.js"
import contact from "./contact.js"
import "./assets/global-style.css"
import "./assets/home.css"
import "./assets/menu.css"
import "./assets/contact.css"


function clearDivDOM(){
    const contentDivDOM = document.querySelector("#content")
    while (contentDivDOM.firstChild) {
        contentDivDOM.removeChild(contentDivDOM.firstChild)
    }
}

home()

const navHome = document.querySelector(".navHome")
navHome.addEventListener("click", ()=>{
    clearDivDOM()
    home()
})

const navMenu = document.querySelector(".navMenu")
navMenu.addEventListener("click", ()=>{
    clearDivDOM()
    menu()
})

const navContact = document.querySelector(".navContact")
navContact.addEventListener("click", ()=>{
    clearDivDOM()
    contact()
})



