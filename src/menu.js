import menu1 from "./assets/menu1.jpg"
import menu2 from "./assets/menu2.jpg"
import menu3 from "./assets/menu3.jpg"
import menu4 from "./assets/menu4.jpg"


export default function menu(){
    const p1 = document.createElement("p")
    p1.textContent = "Brochetas de carne y chorizo ​​glaseadas con vino tinto"
    const img1 = document.createElement("img")
    img1.src = menu1

    const p2 = document.createElement("p")
    p2.textContent = "Pollo Crujiente Al Limón"
    const img2 = document.createElement("img")
    img2.src = menu2

    const p3 = document.createElement("p")
    p3.textContent = "Nuestro Cheesy Bubble & Squeak en una sartén es el objetivo absoluto del brunch"
    const img3 = document.createElement("img")
    img3.src = menu3

    const p4 = document.createElement("p")
    p4.textContent = "Risotto de cebada perlada y jamón y guisantes"
    const img4 = document.createElement("img")
    img4.src = menu4

    const divRecipe1 = document.createElement("div")
    divRecipe1.classList = "divRecipe";
    divRecipe1.appendChild(img1)
    divRecipe1.appendChild(p1)

    const divRecipe2 = document.createElement("div")
    divRecipe2.classList = "divRecipe";
    divRecipe2.appendChild(img2)
    divRecipe2.appendChild(p2)

    const divRecipe3 = document.createElement("div")
    divRecipe3.classList = "divRecipe";
    divRecipe3.appendChild(img3)
    divRecipe3.appendChild(p3)

    const divRecipe4 = document.createElement("div")
    divRecipe4.classList = "divRecipe";
    divRecipe4.appendChild(img4)
    divRecipe4.appendChild(p4)


    const divMenu = document.createElement("div")
    divMenu.classList = "divMenu"

    divMenu.appendChild(divRecipe1)
    divMenu.appendChild(divRecipe2)
    divMenu.appendChild(divRecipe3)
    divMenu.appendChild(divRecipe4)

    const contentDivDOM = document.querySelector("#content")
    contentDivDOM.appendChild(divMenu)
}