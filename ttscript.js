addButton=document.getElementById("add")
removeButton=document.getElementById("remove")

refresh();
removeButton.addEventListener("click", ()=> {
    console.log("Remove button clicked");
})
addButton.addEventListener("click", ()=> {
    console.log("Add button clicked");
    const addtask = document.getElementsByClassName("addtask")[0];
    addtask.style.display="block";
})
const cancelButton=document.getElementById("cancel");
cancelButton.addEventListener("click", ()=> {
    cancel();
    refresh();
})
function cancel(){
    const addtask=document.getElementsByClassName("addtask")[0].style.display="none";
    refresh();
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
  
    for (let i = 0; i < 7; i++) {
        const raw = JSON.parse(localStorage.getItem(days[i]));
        if (raw){
            for (let j = 0; j < raw.length; j++) {
                const task = raw[j];
                const taskday = task.taskday;
                const taskname = task.taskname;
                const taskstart = task.taskstart;
                const taskend = task.taskend;
  
                const dayToAdd = document.getElementById(taskday +"task");
                const taskdiv = document.createElement("div");
                taskdiv.style.color="white";
                taskdiv.style.backgroundColor="black";
                taskdiv.style.boxShadow="0px 0px 0px cyan";
                taskdiv.style.border="5px solid cyan";
                taskdiv.style.position="absolute";
                taskdiv.style.borderRadius="3vw";
                taskdiv.style.left = `${timeToMinutes(taskstart)*2}px`;
                taskdiv.style.top = "0px";
                const wid = (timeToMinutes(taskend) - timeToMinutes(taskstart))*2;
                taskdiv.style.width=`${wid}px`;
                taskdiv.style.height="90%";
                taskdiv.innerHTML=`<p class="intext" style="left 40%;up:30%;">${taskname}</p>`
                taskdiv.innerHTML+=`<p class="intext" style="left 40%;down"30%">${taskstart} - ${taskend}</p>`
               // taskdiv.innerHTML+=`<button class="remove" id="${taskname}">❌</button>`
               dayToAdd.append(taskdiv);
            }
        }
    }
        days.forEach((day) => {
            const lastdiv = document.getElementById(day +"task");
            const lastele = document.createElement("div");
            lastele.style.width="1px";
            lastele.style.backgroundColor="yellow";
            lastele.style.height="100%";
            lastele.style.position="absolute";
            lastele.style.left=`${1440*2}px`;
            lastdiv.append(lastele);
            });
            
}
function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return (hours * 60) + minutes;
}

function horizontalscrolling(someContainerId){
    const scrollContainer = document.getElementById(someContainerId);
    scrollContainer.addEventListener("wheel", function(event) {
    // Check if the wheel event is vertical (deltaY is the vertical scroll distance)
        if (event.deltaY !== 0) {
            scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally based on vertical scroll
            event.preventDefault(); // Prevent default scrolling behavior
        }
    });
}
horizontalscrolling("sundaytask");
horizontalscrolling("mondaytask");
horizontalscrolling("tuesdaytask");
horizontalscrolling("wednesdaytask");
horizontalscrolling("thursdaytask");
horizontalscrolling("fridaytask");
horizontalscrolling("saturdaytask");