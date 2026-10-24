const addtaskmenu=document.querySelector('.add-task-off');
    const addtaskbtn=document.querySelector('.add-tasks');
    const prioritylevel=document.querySelectorAll('.priority-btn');
    const submitbtn=document.querySelector('.add-task-btn');
    const hiddenErrornote=document.querySelector('.error-note');
    const cancelbtn=document.querySelector('.cancel-btn');
    const taskform=document.querySelector('.add-task-form');

    
    addtaskbtn.addEventListener("click",function(){
        addtaskmenu.classList.toggle("add-task-on");
        addtaskmenu.classList.toggle("add-task-off");
    })

    cancelbtn.addEventListener("click",function(event){
        event.preventDefault();
        addtaskmenu.classList.remove("add-task-on");
        addtaskmenu.classList.add("add-task-off");
        taskform.reset();

    })

    for (let i=0 ;i<prioritylevel.length;i++){
        prioritylevel[i].addEventListener("click",function(){

            for (let j=0;j<prioritylevel.length;j++){
                prioritylevel[j].classList.remove("priority-btn-selected");
            }



            prioritylevel[i].classList.add("priority-btn-selected");

        })

    }

    submitbtn.addEventListener('click',function(event){
        event.preventDefault();

        const taskTitle=document.querySelector('#task-title');
        const taskDescription=document.querySelector('#description').value.trim();
        const statusTask=document.querySelector('.dropdown-status').value;
        const dueDate=document.querySelector('#due-date').value;
        const selectedPriority = document.querySelector('.priority-btn-selected')?.value || 'High';

        if ( taskTitle.value && taskTitle.value.trim()!='')
        {
            taskTitle.classList.remove('error-border');

            const params=new URLSearchParams({
                Title:taskTitle.value.trim(),
                Description:taskDescription,
                Priority:selectedPriority,
                Status:statusTask || "Pending",
                Due:dueDate
            })

            window.location.href="all-tasks.html?"+params.toString();

        }
        else{
            taskTitle.classList.add('error-border');
            hiddenErrornote.style.visibility='visible';
            hiddenErrornote.style.color='red';
            hiddenErrornote.style.lineHeight='1.3';


            taskTitle.addEventListener('input',function(){
                hiddenErrornote.style.visibility='hidden';
                taskTitle.classList.remove('error-border');
            })
            
        }



        

    })
