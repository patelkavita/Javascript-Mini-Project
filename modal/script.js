'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const btnShow = document.querySelectorAll(".show-modal");
// console.log(btnOpen);

const openModal = function(){
   // console.log("button clicked");
    modal.classList.remove("hidden");
    overlay.classList.remove('hidden');
     };   

const closeModal = function()
{
 modal.classList.add("hidden");
overlay.classList.add('hidden');
}

for(let i=0; i<btnShow.length; i++)
{
 btnShow[i].addEventListener('click',openModal);   
}

//for close event
// btnClose.addEventListener('click', function()
// {
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// });



//for overlay function

// overlay.addEventListener('click',function()
// {
//     modal.classList.add("hidden");
// overlay.classList.add('hidden');
// })


btnClose.addEventListener('click',closeModal);
overlay.addEventListener('click', closeModal);


// handaling with 'ESC' event
document.addEventListener("keydown",function(e)
{ //console.log(e.key); //key value
    //console.log("A key was pressed");
    if(e.key==="Escape" && !modal.classList.contains('hidden') )
    {
        //console.log(e.key);
        // if(!modal.classList.contains('hidden'))
        // {
        //      closeModal();
        // }
        closeModal();
    }
})
