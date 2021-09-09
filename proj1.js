//SELECTORS
todobutton=document.querySelector('.todo-button');
todoinput=document.querySelector('.todo-input');
todoitems=document.querySelector('.todo-items');


//EVENT LISTENERS
//On clicking the add button
todobutton.addEventListener('click',addtodo);
todoitems.addEventListener('click',deleteitem);




//FUNCTIONS
function addtodo(event)
{
    //stops the form from submitting and refreshing the page
    event.preventDefault();

    //Create Div
    const tododiv=document.createElement('div');
    tododiv.classList.add('todo')

    //Create List
    const newtodo=document.createElement('li');
    newtodo.innerHTML=todoinput.value;
    newtodo.classList.add('todo-elements');

    //Append it to the div i.e. tododiv
    tododiv.appendChild(newtodo);

    //Create Check button
    const checkbutton=document.createElement('button');
    checkbutton.innerHTML='<i class="fa fa-check"></i>'
    checkbutton.classList.add('complete-btn');
    tododiv.appendChild(checkbutton);

    //Create delete button
    const delbutton=document.createElement('button');
    delbutton.innerHTML='<i class="fa fa-trash"></i>';
    delbutton.classList.add('trash-btn');
    tododiv.appendChild(delbutton);

    todoitems.appendChild(tododiv);


    //Clear the input box
    todoinput.value="";
}


function deleteitem(e)
{
    const el=e.target;

    if(el.classList[0] === 'trash-btn' )
    {
        const k=el.parentElement;
        k.classList.add('removetransition');
        k.addEventListener('transitionend',function()
        {
            k.remove();
        });
    
    }
    if(el.classList[0] === 'complete-btn' )
    {
        const k=el.parentElement;
        k.classList.toggle('strike');
    }
    

}