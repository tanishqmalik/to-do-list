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


// document.getElementById('addtask').addEventListener('click', addTask);
// const inputBox = document.getElementById("search");
// const listContainer=document.querySelector(".tasklist");

// function addTask(){
//     if(inputBox.value === ''){
//         alert("you must write something !");
//     }
//     else{
//         let li= document.createElement("li");
//         li.innerHTML= '<input type="checkbox">' + inputBox.value;
//         listContainer.appendChild(li);
//     }
    // inputBox.value="";
// }


// hello



