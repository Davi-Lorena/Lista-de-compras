//Criando as constantes e variáveis de elementos 
const form = document.querySelector("form")
const button = document.querySelector("button")
const input = document.querySelector("input")
const validateInput = () => input.value.trim().length > 0


const ul = document.querySelector("ul")


const addNewItem = () => {

    const inputIsValid = validateInput()
    if(!inputIsValid) {
        return(alert("error"))
    }
 
    const li = document.createElement("li")
    li.classList.add("item")

    li.innerHTML = `
    <button>
    <img src="./assets/icons/Frame-3.svg" alt="">
    </button>
    `  
    
const div = document.createElement("div")
const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")
    const span = document.createElement("span")
    span.textContent = input.value 

    div.append(checkbox, span)
li.prepend(div)
    ul.append(li) 

    input.value = ""
}



button.addEventListener("click", () => addNewItem()) 

form.onsubmit = (event) => {
    event.preventDefault()
}
