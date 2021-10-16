// JavaScript source code
// SME Connect
let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")
ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    // alert("Thanks for clicking")
    console.log("Value::", ourField.value)
    createItem(ourField.value)

})
function createItem(x) {
    let ourHTML = `<li>${x} <button onclick = "deleteItem(this)">Delete</button></li>`
    ourList.insertAdjacentHTML("beforeend", ourHTML)
    ourField.value = ""
    ourField.focus()
}
function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}
