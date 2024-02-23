// const { doc } = require("prettier");

function markCompleted(taskId){
    var checkbox = document.getElementById(taskId);
    var listItem = checkbox.parentElement;

    if(checkbox.checked){
        listItem.style.textDecoration="line-through";
    }
    else{
        listItem.style.textDecoration="none";
    }
}



document.getElementById('addtask').addEventListener('click', addTask);
const inputBox = document.getElementById("search");
const listContainer = document.getElementById("tasklist"); 

function addTask(event){
    event.preventDefault();
    if(inputBox.value === ''){
        alert("you must write something !");
    }
    else{
        listContainer.innerHTML='';   //existing task ko clear krdo inner html mein jakr .  ye listContainer
        //hmne ek id se liya hua hai jo ki "tasklist" hai or vo ul ki id hai.
        let li= document.createElement("li");
        li.innerHTML= '<input type="checkbox">' + inputBox.value;
        // listContainer.replaceChild(li, listContainer.firstElementChild)
        listContainer.appendChild(li);

    }
    inputBox.value="";
}


document.getElementById('deletetask').addEventListener('click', deletetask);
function deletetask(){
    // event.preventDefault();
    let todelete=document.getElementById('label1')
    todelete.innerHTML=''
    let todelet1= Document.getElementById('task1');
    todelet1.parentNode.removeChild(todelet1)
}

addtask.addEventListener('click',addTask)