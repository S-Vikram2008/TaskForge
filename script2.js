const body=document.querySelector('.body-dark');
const addtaskmenu=document.querySelector('.add-task-off');
const addtaskbtn=document.querySelector('.add-task-btn');
const prioritylevel=document.querySelectorAll('.priority-btn');
const cancelbtn=document.querySelector('.cancel-btn');

    
    addtaskbtn.addEventListener("click",function(){
        addtaskmenu.classList.toggle("add-task-on");
        addtaskmenu.classList.toggle("add-task-off");
    })


    cancelbtn.addEventListener("click",function(){
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

    };


    const submittask=document.querySelector('.submit-task-entry');
    const mainbody=document.querySelector('.main');
    const totaltasknum=document.querySelector('.total-task-num');
    const completedtasknum=document.querySelector('.completed-task-num');
    const pendingtasknum=document.querySelector('.pending-task-num');
    const inprogresstasknum=document.querySelector('.in-progress-task-num');
    const taskform=document.querySelector('.add-task-form');
    const hiddenErrornote=document.querySelector('.error-note');
   



    

    mainbody.classList.add('main-style');



    function createCard(mainbody,taskform,heading,taskdesc,selectedPriority,status,due){
        const card=document.createElement('div');
        card.classList.add('card-layout');

            const taskheading=document.createElement('div');
            taskheading.classList.add('task-heading-style');


            const buttontitle=document.createElement('div');
            buttontitle.classList.add('top-div');

                const buttonCompleted=document.createElement('button');
                buttonCompleted.classList.add('button-notcompleted');

                buttonCompleted.addEventListener("click",function(event){
                    event.preventDefault();

                    if (buttonCompleted.classList.contains('button-completed')){
                        buttonCompleted.classList.add('button-notcompleted');
                        buttonCompleted.classList.remove('button-completed');
                        tasktitle.classList.remove('line-through');
                        buttonCompleted.textContent='';
                        completedtasknum.textContent=Number(completedtasknum.textContent)-1;

                        if (status=='Pending'){
                            pendingtasknum.textContent=Number(pendingtasknum.textContent)+1;
                         }
                         else if (status=='In Progress'){
                            inprogresstasknum.textContent=Number(inprogresstasknum.textContent)+1;
                         }
                    }
                    else{
                        buttonCompleted.textContent='✔';
                        buttonCompleted.classList.add('button-completed');
                        buttonCompleted.classList.remove('button-notcompleted');
                        tasktitle.classList.add('line-through');
                        
                        completedtasknum.textContent=Number(completedtasknum.textContent)+1;

                        if (status=='Pending'){
                            pendingtasknum.textContent=Number(pendingtasknum.textContent)-1;
                        }
                        else if (status=='In Progress'){
                            inprogresstasknum.textContent=Number(inprogresstasknum.textContent)-1;
                        }
                        
                        
                    }
                    
                    
                });


                const tasktitle=document.createElement('p');
                tasktitle.textContent=heading;

                buttontitle.appendChild(buttonCompleted);
                buttontitle.appendChild(tasktitle);
            
                taskheading.appendChild(buttontitle);



                const prioritybtn=document.createElement('p');
                prioritybtn.textContent=selectedPriority;
                if (selectedPriority=='High'){
                    prioritybtn.style.color='#FF5C5C';
                }
                else if (selectedPriority=='Medium'){
                    prioritybtn.style.color='#F5A623';
                }
                else{
                    prioritybtn.style.color='#35C98A';
                }

            taskheading.appendChild(prioritybtn);
        
            card.appendChild(taskheading);

            const taskdescription=document.createElement('div');
            taskdescription.classList.add('task-description');

                const message=document.createElement('p');
                message.textContent=taskdesc;
            
            taskdescription.appendChild(message);
            card.appendChild(taskdescription);

            const others=document.createElement('div');
            others.classList.add('progress-duedate');

                const progress=document.createElement('p');
                if (status=='Pending'){
                    pendingtasknum.textContent=Number(pendingtasknum.textContent)+1;
                    progress.style.color='#A0A6B8';
                    progress.style.fontSize='14px';
                    progress.style.fontWeight='600';
                }
                else if (status=='In Progress'){
                    inprogresstasknum.textContent=Number(inprogresstasknum.textContent)+1;
                    progress.style.color='#F5A623';
                    progress.style.fontSize='14px';
                    progress.style.fontWeight='600';
                }
                else{
                    completedtasknum.textContent=Number(completedtasknum.textContent)+1;
                    progress.style.color='#35C98A';
                    progress.style.fontSize='14px';
                    progress.style.fontWeight='600';
                }

                progress.textContent=status;

                const duedate=document.createElement('p');
                duedate.textContent=due;
                duedate.style.color='#A0A6B8';
                duedate.style.fontSize='12px';
                duedate.style.fontWeight='400';

            others.appendChild(progress);
            others.appendChild(duedate);

            card.appendChild(others);

            const deletetask=document.createElement('div');
            deletetask.classList.add('delete');

                const deletebtn=document.createElement('button');
                deletebtn.type='button';
                deletebtn.classList.add('deletebtn');
                deletebtn.textContent="Delete Task";

                deletebtn.addEventListener("click",function(){
                    card.remove();

                    totaltasknum.textContent=Number(totaltasknum.textContent)-1;
                    if (buttonCompleted.classList.contains('button-completed')) {
                        completedtasknum.textContent =Number(completedtasknum.textContent) - 1;
                    }

                    else if (status=='Pending'){
                    pendingtasknum.textContent=Number(pendingtasknum.textContent)-1;
                    }
                    else if (status=='In Progress'){
                        inprogresstasknum.textContent=Number(inprogresstasknum.textContent)-1;
                    }

                    });

            
            deletetask.appendChild(deletebtn);

            card.append(deletetask);

            

            mainbody.append(card);

            totaltasknum.textContent=Number(totaltasknum.textContent)+1;
            taskform.reset();

        addtaskmenu.classList.remove('add-task-on');
        addtaskmenu.classList.add('add-task-off');

    }

    submittask.addEventListener('click',function(event){
        event.preventDefault();

        const heading=document.querySelector('#task-title');
        const taskdesc=document.querySelector('#description').value;
        const status=document.querySelector('.dropdown-status').value;
        const due=document.querySelector('#due-date').value;
        const selectedPriority = document.querySelector('.priority-btn-selected')?.value || 'High';


        if (heading.value && heading.value.trim()!=''){
            createCard(mainbody,taskform,heading.value,taskdesc,selectedPriority,status,due);
        }

        else{
            heading.classList.add('error-border');
            hiddenErrornote.style.visibility='visible';
            hiddenErrornote.style.color='red';
            hiddenErrornote.style.lineHeight='1.3';


            heading.addEventListener('input',function(){
                hiddenErrornote.style.visibility='hidden';
                heading.classList.remove('error-border');
                
            })
            
        }

    })


    const params=new URLSearchParams(window.location.search);
    
    const TITLE=params.get('Title');
    const DETAILS=params.get('Description');
    const IMPORTANCE=params.get('Priority');
    const STATUS=params.get('Status');
    const DUEDATE=params.get('Due');

    if (TITLE && TITLE.trim()!=''){
        createCard(mainbody,taskform,TITLE,DETAILS,IMPORTANCE,STATUS,DUEDATE);
    }


    



</script>  
