let btn= document.querySelector("button");
let ul= document.querySelector("ul");
let inp= document.querySelector("input");

//to enter or add tasks

btn.addEventListener("click", function(){
    if(inp.value==""){
        alert("Please enter your task first");
    }else{
    let item= document.createElement("li");
    item.innerText=inp.value;
   
   
    inp.value="";
    

    let delBtn= document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    
    item.appendChild(delBtn); 
    ul.appendChild(item);
   
    inp.value="";}
});

//to delete tasks
ul.addEventListener("click", function(event){
    
    if(event.target.nodeName == "BUTTON"){
       let par=event.target.parentElement;
       par.remove();
    }
});
console.dir(ul);
if(ul.childElementCount==0){
    console.log("Add your tasks");
}


// let delBtns=document.querySelector(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//     let par=delBtn.parentElement;
//     par.remove();
// }
    
//     );
// }