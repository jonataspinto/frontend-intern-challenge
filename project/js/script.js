let element = document.getElementById("sendBnt");
function setvalue(){
    if(element.textContent.toLowerCase() == "encurtar"){
        element.textContent = "copiar";
    }

    if(element.textContent == "copiar"){
        element.addEventListener("click", event=>{
            console.log("copiar")
        }) 
    }
}

