let themeBtn = document.getElementById("light-theme")
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-theme")
    if(themeBtn.textContent === "🔆"){
        themeBtn.textContent = "🌙"
    }
    else {
        themeBtn.textContent = "🔆"
    }
})

document.addEventListener("DOMContentLoaded", ()=>{
    let taskTitle = document.getElementById("taskTitle")
    let taskDesc = document.getElementById("taskDesc")
    let addTaskBtn = document.getElementById("addTaskBtn")
    let taskList = document.getElementById("taskList")

    addTaskBtn.addEventListener("click", ()=>{
        let title = taskTitle.value.trim()
        let description = taskDesc.value.trim()
        if(title === "" || description === ""){
            alert("Please enter both Task Title & Description!")
            return;
        }
        
        const taskItem = document.createElement("li")
        taskItem.classList.add("task-item")

        taskItem.innerHTML = `
        <div>
            <h3 class="task-title">${title}</h3>
            <p class="task-description">${description}</p>
        </div>
        <div>
            <button class="cmplt-btn">✔</button>
            <button class="dlt-btn">✖</button>
        </div>
        `
        
        const deleteBtn = taskItem.querySelector(".dlt-btn")
        deleteBtn.addEventListener("click", () => {
            taskItem.remove()
        })

        const cmpltBtn = taskItem.querySelector(".cmplt-btn")
        cmpltBtn.addEventListener("click", () => {
            taskItem.classList.add("complete")
            cmpltBtn.style.display = "none"
            // taskItem.classList.toggle("complete")
            // deleteBtn.style.display = "none"
        })

        taskList.appendChild(taskItem)

        taskTitle.value = ""
        taskDesc.value = ""
        

    })
})
