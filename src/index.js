document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector("form")
  const tasks = document.querySelector("#tasks")
  

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = e.target["new-task-description"].value
    addElement(inputValue)
  })

  function addElement(element){
    let li = document.createElement("li")
    let button = document.createElement("button")

    li.textContent = ` ${element} `
    tasks.appendChild(li)
    li.appendChild(button)
    button.textContent = "X"
    button.addEventListener("click", e=>deleteButton(e))
  }


  function deleteButton(event){
    event.target.parentElement.remove();
  }

})




// const li = document.createElement("li")
// const ul = document.getElementById("tasks")
// const toDoItem = e.target["new-task-description"].value

// ul.append(li)
// li.innerText = toDoItem