let button=document.querySelector('.toggle');
let dropmenu=document.querySelector('.dropmenu');
let navicon=document.querySelector('.navicon');
let temp=0;
button.addEventListener("click",()=>{
    if(temp===0){
        dropmenu.style.height="200px";
        navicon.classList.replace('fa-bars', 'fa-times');
        temp=1;
    }
    else{
        dropmenu.style.height="0px";
        navicon.classList.replace('fa-times', 'fa-bars');
        temp=0;
    }
});

function blogalert(){
    alert('WE ARE WORKING ON BLOG SECTION');
};

function skillalert(){
    alert('WE ARE WORKING ON SKILLS SECTION');
}


