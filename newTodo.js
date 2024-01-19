const todolist = [{name:'have breakfast',
dueDate: '2024-01-12'},{ name:'take bath', dueDate:'2024-01-23'}];
//NOw to display each value in the form of para

displayTodo();

function displayTodo() {

    let todolistHTML = '';
    todolist.forEach((todoObject,index)=>{
        const {name , dueDate}=todoObject;
        
        const html = `
        <div>${name} </div>
        <div> ${dueDate}</div>
        <button class="delete-to-do-button js-delete-todo-button">Delete</button>
        `;
        todolistHTML += html;

    });
    
    document.querySelector('.to-do-List').innerHTML = todolistHTML;//it is putting html element into div
    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton,index)=>{
            deleteButton.addEventListener('click',()=>{
                todolist.splice(index,1);
                displayTodo();  
            });

        });
        
}

document.querySelector('.js-add-todo-button')
.addEventListener('click',()=>{
    addTodo();
})

function addTodo() {
    const inptEle = document.querySelector('.js-input');
    // to get the text out we'll use the property of input element that is value 
    const name = inptEle.value;//this is adding entered value in the console
    const dateInputEle=document.querySelector('.js-due-date-input')

    const dueDate=dateInputEle.value;
    //now add this value in the array
    todolist.push({
        // name:name,
        // dueDate:dueDate//since name as well as properties have same variable name therefore we'll write it as
        name,dueDate
    });
   
    //now we'll add the feature to reset the textbox
    inptEle.value = '';
    displayTodo();

}