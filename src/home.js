import homeChefJPG from "./assets/home-chef.jpg"

export default function home() {
    const h2 = document.createElement("h2")
    h2.textContent = "Sabores Deliciosos, Restaurante"
    const homeChef = document.createElement("img")
    homeChef.src = homeChefJPG
    homeChef.className = "homeChef"
    const p = document.createElement("p")
    p.textContent = "¡Bienvenido a 'Sabores Deliciosos'! Situado en el corazón de la ciudad, somos conocidos por deleitar a nuestros comensales con una experiencia culinaria única. Nuestro chef galardonado combina ingredientes frescos y técnicas innovadoras para crear platos que deleitan los sentidos. Desde nuestras exquisitas entradas hasta nuestros postres irresistibles, cada bocado es una explosión de sabores. Nuestro ambiente acogedor y servicio excepcional hacen que cada visita sea memorable. Únete a nosotros y descubre por qué 'Sabores Deliciosos' es el destino preferido para los amantes de la buena comida en la ciudad."


    const divHome = document.createElement("div")
    divHome.classList = "divHome"
    divHome.appendChild(h2)
    divHome.appendChild(homeChef)
    divHome.appendChild(p)
    const contentDivDOM = document.querySelector("#content")
    contentDivDOM.appendChild(divHome)
}



// Foto de <a href="https://unsplash.com/es/@lvnatikk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Lily Banse</a> en <a href="https://unsplash.com/es/fotos/plato-cocinado-en-tazon-gris--YHSwy6uqvk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>