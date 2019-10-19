let urls = []

const loadLinks = (url) =>{
    let oreq = new XMLHttpRequest()
    oreq.onreadystatechange = function() {
        let top5 = []
        if (this.readyState == 4 && this.status == 200) {
            let obj = JSON.parse(this.responseText).sort((a,b)=> a.hits - b.hits)
            exObj(obj)
            for(let i = obj.length-1; i >= 5; i--)top5.push(obj[i])
            mountTop(top5)            
        }
    };
    oreq.open("GET", url, true);
    oreq.send();
}

const exObj = (obj)=>{
    obj.forEach(element =>{
        urls.push(element)
    })
    urls = obj
}

const mountTop = (links)=>{
    let topLinks = document.querySelector(".top-links ul")
    links.forEach(element => {
        // criando elementos
        let li = document.createElement("li") 
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        // variaveis com o text de links e hits para o top 5
        let hits = document.createTextNode(element.hits)
        let link = document.createTextNode(element.shortUrl)
        // colocando textos nos elementos 
        p1.appendChild(link)
        p2.appendChild(hits)
        li.appendChild(p1)
        li.appendChild(p2)
        topLinks.appendChild(li)
    });
}

