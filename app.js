function addToDo(){
    let done = document.getElementById("done");
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    let input = document.getElementById("input_frame").value;
    let list = document.getElementById("list");
    let divCreator = document.createElement("div");
    let text = document.createElement("p");
    text.appendChild(document.createTextNode(input + " " + time));
    divCreator.appendChild(text);
    divCreator.className = "object";
    list.appendChild(divCreator);
    document.getElementById("results").style.display = "flex";
    divCreator.addEventListener("click",()=>{divCreator.className = "hideObject"; done.style.display = "flex";done.appendChild(divCreator);divCreator.className = "object"});
}

function start(){
    let name = document.getElementById("name").value;
    let listName = document.getElementById("list_name").value;
    if(name == "" || listName == ""){
     alert("Wprowadź wymagane informacje")   
    }else{
        document.getElementById("login").style.display = "none";
        document.getElementById("form").style.display = "flex";
        document.getElementById("mylist").innerHTML = "Lista: " + listName;
        document.getElementById("mylist2").innerHTML = "Użytkownika " + name;
    }
   
}



