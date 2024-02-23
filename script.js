// const { doc } = require("prettier");

// const { Button } = require("bootstrap");


 // line-through happeing only for pre-written list
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

const init = document.getElementById("li")
const inputBox = document.getElementById("search");
const listContainer = document.getElementById("tasklist"); 

function deletetask(id) {
    var element = document.getElementById(id);
    element?.parentNode?.removeChild(element);
}


function addTask(event){
    event.preventDefault();
    deletetask('list')
    if(inputBox.value === ''){
        alert("you must write something !");
    }
    else{

        let liD = document.createElement('li');
        liD.classList.add("li")
        listContainer.appendChild(liD)


        let divContainer = document.createElement('div');
        divContainer.classList.add("li1stpart");  //hmne isme "list1part" class ko add kia hai "li" class mein....// 
        // basically classList, class ko add krta hai 
        liD.appendChild(divContainer)

        let divInput = document.createElement('input');
        divInput.type = "checkbox";
        divInput.classList.add("task1")     // can i add id in it??  by adding id , shayd mein marked completed vaale funtion mein ghus kar text par line-through daal skta hu
        divInput.id="task1";
        divContainer.appendChild(divInput);
        
// .id="idkanaame"
        let divLabel = document.createElement('label');
        divLabel.innerText = inputBox.value;
        divContainer.appendChild(divLabel);




        let liButton = document.createElement('button');
        liButton.innerText = "delete task"
        liButton.classList.add("deletetask")
        liD.appendChild(liButton)


        // delete button for all lists 
        liButton.addEventListener('click',function(){
            liD.remove()
        })


        // Get all checkboxes
        var checkboxes =document.querySelectorAll('.task1')

        // Loop chla do har ek checkbox ke liye
        checkboxes.forEach(function(checkbox){
            checkbox.addEventListener('click', function(){
                // var checkbox1=document.getElementById('task1');
                var listItem1=checkbox.parentElement;

                if(checkbox.checked){
                    listItem1.style.textDecoration="line-through";
                }

                else{
                    listItem1.style.textDecoration="none";
                }
            });
        });


        // Get all checkboxes
// var checkboxes = document.querySelectorAll('.task1');

// // Loop through each checkbox
// checkboxes.forEach(function(checkbox) {
//     // Add click event listener to each checkbox
//     checkbox.addEventListener('click', function() {
//         // Get the parent list item of the checkbox
//         var listItem = checkbox.closest('li')

//         // If the checkbox is checked, add line-through style to the list item
//         if (checkbox.checked) {
//             listItem.style.textDecoration = "line-through"
//         } else {
//             // If the checkbox is not checked, remove line-through style from the list item
//             listItem.style.textDecoration = "none"
//         }
//     })
// })














        //line-through happeing only for first list which i add 

        // divInput.addEventListener('click', function(){
        //     var checkbox1=document.getElementById("task1");
        //     var listItem1=checkbox1.parentElement;

        //     if(checkbox1.checked){
        //         listItem1.style.textDecoration="line-through";
        //     }
        //     else{
        //         listItem1.style.textDecoration="none";
        //     }
        // })
        


    }

    inputBox.value="";
}




// delete button for pre-written text
document.getElementById('deletetask').addEventListener('click', deletetaskwhenclick);
function deletetaskwhenclick(event){
    event.preventDefault();
    var todelete=document.getElementById('list')
    todelete.innerHTML='';

    // todelete?.parentNode?.removeChild(todelete);

    // let todelet1= Document.getElementById('list');
    // todelet1.parentNode.removeChild(todelet1)
}

// addtask.addEventListener('click',addTask)