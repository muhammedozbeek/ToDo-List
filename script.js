let addButton = document.getElementById('btnpls');
let lowerlist = document.getElementById('lwlist');
let inputekle = document.getElementById('inputekle');
let todoclear = document.getElementById('cleartodo');



addButton.addEventListener('click', function(){

    todoclear.addEventListener('click',function(){
        todoDiv.remove();
    })

    let isEmpty = str=> !str.trim().length;
    if(isEmpty(inputekle.value)){
        alert("YAZI GİRİNİZ");
        alertWarning.style.display ="block";
        
    }
  
    let todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");



    const paragraph = document.createElement("p");
    paragraph.innerText=inputekle.value;
    paragraph.classList.add("todo-item")
    todoDiv.appendChild(paragraph);




    let trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class= 'fa-solid fa-x'></i>";
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);



    trashButton.addEventListener('click',function(){
        todoDiv.remove();
    })

    lowerlist.appendChild(todoDiv);
   

    inputekle.value="";
})