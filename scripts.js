//Criando as constantes e variáveis de elementos 
const form = document.querySelector("form")
const button = document.querySelector("button")
const input = document.querySelector("input")
const validateInput = () => input.value.trim().length > 0


const ul = document.querySelector("ul")


const addNewItem = () => {

    const inputIsValid = validateInput()
    if(!inputIsValid) {
        return(alert("Digite um item!"))
    }
 
    const li = document.createElement("li")
    li.classList.add("item")
    li.style.marginBottom = ` .75rem `

const div = document.createElement("div")
const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")
    const span = document.createElement("span")
    span.textContent = input.value 
const del = document.createElement("button")
del.innerHTML = `<img src="./assets/icons/Frame-3.svg" alt="">` 

div.append(checkbox, span)
li.prepend(div, del)
    ul.append(li) 

    input.value = ""

   del.addEventListener("click", () => { 
 const circle = document.createElement("small")
 circle.innerHTML = `<img src="./assets/icons/warning-circle-filled.svg" alt="">`
div.prepend(circle)
 checkbox.remove("input") 
 del.remove("button")

const btn = document.createElement("button")
btn.innerHTML = `<img src="./assets/icons/delete-small.svg" alt="">`

li.append(btn)
     span.textContent = "O item foi removido da lista"
     li.classList.replace("item", "alert")


     btn.addEventListener("click", () => {
        li.classList.replace("alert", "delet")
     })

 }) 

}

button.addEventListener("click", () => addNewItem()) 

form.onsubmit = (event) => {
    event.preventDefault()

}
