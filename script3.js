const main=document.querySelector('body')
const editbtn=document.querySelector('.edit-btn');
const username=document.querySelector('.name-entry');
const email=document.querySelector('.email-entry')

editbtn.addEventListener("click",function(event){
    if (editbtn.textContent=="Edit Profile")
        {
            event.preventDefault();
            username.removeAttribute("readonly");
            email.removeAttribute("readonly");
            username.focus();
            editbtn.textContent="Save Changes";
            username.style.cursor="default";
            email.style.cursor="default";
        }

    else 
        {
            event.preventDefault();
            username.setAttribute("readonly","");
            email.setAttribute("readonly","");
            editbtn.textContent="Edit Profile";
            username.style.cursor="not-allowed";
            email.style.cursor="not-allowed";
        }
});

    const editStatus=document.querySelector('.edit-status-btn');
    const priorityselect=document.querySelector('.change-priority');
    const statusselect=document.querySelector('.change-status');
    

    editStatus.addEventListener("click",function(event){
        if (editStatus.textContent=="Edit Status")
            {
                event.preventDefault();
                priorityselect.removeAttribute('disabled');
                statusselect.removeAttribute('disabled');
                priorityselect.focus();
                editStatus.textContent="Save Changes";

            }

        else
            {
                event.preventDefault();
                priorityselect.setAttribute('disabled',"");
                statusselect.setAttribute('disabled',"");
                editStatus.textContent="Edit Status";
            }
    })

    const darklightmode=document.querySelector('.dark-light-mode');
    const text=document.querySelector('.preference-text');
    

    darklightmode.addEventListener("click",function(event){
        event.preventDefault();
        main.classList.toggle('body-light');
        main.classList.toggle('body-dark');
        if (main.classList.contains('body-light'))
        {
            darklightmode.textContent="Dark Mode";
            darklightmode.style.backgroundColor="black";
            darklightmode.style.color="white";
            text.style.color="black";
            
            
        }
        else
        {   
            darklightmode.textContent="Light Mode";
            darklightmode.style.backgroundColor="white";
            darklightmode.style.color="black";
            text.style.color="white";
        }
        
    });
