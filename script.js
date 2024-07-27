
const searchbox=document.querySelector(".input input");
const searchbtn=document.querySelector(".input button");
const listcontainer=document.querySelector(".list-container");
function checktask(){
    if(searchbox.value===''){
        alert("you must write somthing");}
        else{
            let li=document.createElement("li");
            li.innerHTML=searchbox.value;
            listcontainer.appendChild(li);
            let span=document.createElement("span");
            span.innerHTML="\u00d7"
            li.appendChild(span);
        }
        searchbox.value="";
        saveData();
    }
    listcontainer.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
        saveData();}

       else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
       }
        },false
    );
    function saveData(){
        localStorage.setItem("data",listcontainer.innerHTML);
    }
    function showTask(){
        listcontainer.innerHTML=localStorage.getItem("data");
    }
    showTask();


searchbtn.addEventListener("click",()=>{
checktask(searchbox.value)});
