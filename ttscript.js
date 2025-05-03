addButton=document.getElementById("add")
removeButton=document.getElementById("remove")

sunday=document.getElementById("sundaytask");
monday=document.getElementById("mondaytask");
tuesday=document.getElementById("tuesdaytask");
wednesday=document.getElementById("wednesdaytask");
thursday=document.getElementById("thursdaytask");
friday=document.getElementById("fridaytask");
saturday=document.getElementById("saturdaytask");

function retrieveTasks() {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        tasks = JSON.parse(tasks);
        sundaytasks.innerHTML = tasks.sunday;
        monday.innerHTML = tasks.monday;
        tuesday.innerHTML = tasks.tuesday;
        wednesday.innerHTML = tasks.wednesday;
        thursday.innerHTML = tasks.thursday;
        friday.innerHTML = tasks.friday;
        saturday.innerHTML = tasks.saturday;
    }
}
addButton.addEventListener("click", ()=> {
    console.log("Add button clicked");
    const addtask = document.getElementsByClassName("addtask")[0];
    addtask.style.display="block";
})
const cancelButton=document.getElementById("cancel");
cancelButton.addEventListener("click", ()=> {
    cancel();
})
function cancel(){
    const addtask=document.getElementsByClassName("addtask")[0].style.display="none";
}
submitButton=document.getElementById("submit_task");
submitButton.addEventListener("click", ()=> {
    const taskname = document.getElementById("taskname").value;
    const taskday = document.getElementById("taskday").value;
    const taskstart = document.getElementById("taskstart").value;
    const taskend = document.getElementById("taskend").value;
    const newTask = {
        taskday: taskday,
        taskname: taskname,
        taskstart: taskstart,
        taskend: taskend
      };
      
      // Get existing tasks array from localStorage
      let existing = JSON.parse(localStorage.getItem(taskday)) || [];
      
      // Add the new task
      existing.push(newTask);
      
      // Save back to localStorage
      localStorage.setItem(taskday, JSON.stringify(existing));
    console.log(taskday, taskname, taskstart, taskend);
    cancel();
    alert(" ✅ Task added successfully!");
})
function refresh() {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    localStorage.removeItem(""); // Clean up invalid key
  
    for (let i = 0; i < 7; i++) {
        const raw = JSON.parse(localStorage.getItem(days[i]));
        if (raw) {console.log(raw);
        for (let j = 0; j < raw.length; j++) {
            const task = raw[j];
            const taskday = task.taskday;
            const taskname = task.taskname;
            const taskstart = task.taskstart;
            const taskend = task.taskend;
  
            console.log(taskday, taskname, taskstart, taskend);}
    }
  }
}
