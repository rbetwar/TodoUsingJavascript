const inputBox = document.getElementById("inputBox")
const todo = document.getElementById("todo")
const container = document.getElementById("container")

const focusOutHandler = ()=>{
     const dataBox = Array.from(document.getElementsByClassName("data"))
     dataBox.map((ele)=>{
        ele.setAttribute("readonly", "readonly")
     })
}
document.getElementById("formEvent").addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputBox.value == '') {
        alert("Please enter the value")
    } else {
        const wrapper = document.createElement("div")
        const input = document.createElement("input")
        const editBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")
        
        editBtn.classList.add("edit")
        editBtn.innerText = "Edit"
        deleteBtn.classList.add("delete")
        deleteBtn.innerText = "Delete"
        wrapper.classList.add("todo")
        
        input.setAttribute("type", "text")
        input.classList.add("data")
        input.setAttribute("readonly", "readonly")
        input.setAttribute("onfocusout", "focusOutHandler()" )
        input.value = inputBox.value
        
        
        
        container.appendChild(wrapper)
        wrapper.appendChild(input)
        
        wrapper.appendChild(editBtn)
        wrapper.appendChild(deleteBtn)
        
        inputBox.value = ""
        
        editBtn.addEventListener("click", (e) => {
            e.target.previousSibling.removeAttribute("readonly")
            e.target.previousSibling.focus()
        })
        
        
        
        
        deleteBtn.addEventListener("click", (e) => {
            e.target.parentElement.remove()
        })
        
        input.addEventListener("click",(e)=>{
            if(!e.target.classList.contains("complete")){
                e.target.classList.add("complete")
            }else{
                e.target.classList.remove("complete")
            }
        })

    }
})
