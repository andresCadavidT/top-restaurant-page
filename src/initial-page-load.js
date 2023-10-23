{/* <h1></h1>
<img class="lobbyJPG" src="lobby.jpg" alt="restaurant lobby">
<p>

 */}


export default function createInitialPageLoad() {
    let h1 = document.createElement("h1")
    h1.textContent = "Sabores Deliciosos, Restaurante"
    let lobbyJPG = document.createElement("img")
    console.log(lobbyJPG)
    lobbyJPG.src = "../dist/lobby.jpg"
    // lobbyJPG.className = "lobbyJPG"
    lobbyJPG.setAttribute("class", "lobbyJPG")
    let p = document.createElement("p")
    p.textContent = "¡Bienvenido a 'Sabores Deliciosos'! Situado en el corazón de la ciudad, somos conocidos por deleitar a nuestros comensales con una experiencia culinaria única. Nuestro chef galardonado combina ingredientes frescos y técnicas innovadoras para crear platos que deleitan los sentidos. Desde nuestras exquisitas entradas hasta nuestros postres irresistibles, cada bocado es una explosión de sabores. Nuestro ambiente acogedor y servicio excepcional hacen que cada visita sea memorable. Únete a nosotros y descubre por qué 'Sabores Deliciosos' es el destino preferido para los amantes de la buena comida en la ciudad."

    let DOMbody = document.querySelector("#content")
    DOMbody.appendChild(h1)
    DOMbody.appendChild(lobbyJPG)
    DOMbody.appendChild(p)

}

