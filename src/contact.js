export default function contact(){
    const divContact = document.createElement("div")
    divContact.classList = "divContact";

    const tel = document.createElement("p");
    tel.textContent = "Cell: 321 005 8575"
    tel.classList = "tel"
    divContact.appendChild(tel)

    const dir = document.createElement("p")
    dir.textContent = "Street fake 123 567"
    dir.classList = "dir"
    divContact.appendChild(dir)

    const contentDivDOM = document.querySelector("#content")
    contentDivDOM.appendChild(divContact)
}