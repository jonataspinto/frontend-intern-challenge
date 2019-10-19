
let content = document.querySelector('#inputLink')

function setValue(){
    let element = document.getElementById("sendBnt");

    if(element.textContent.toLowerCase() == "encurtar"){
        urls.forEach(data=>{
            if(data.url == content.value){
                content.value = data.shortUrl
                element.textContent = "copiar";
            }
        })
    }
    else if(element.textContent.toLowerCase() == "copiar"){
        document.querySelector('#inputLink').select()
        document.execCommand('copy');
        console.log(content.value)
        element.textContent = "encurtar"
        content.value = ""
    }    
}

let myjson = "../../Assets/urls.json"
loadLinks(myjson)

