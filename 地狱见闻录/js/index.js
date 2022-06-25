

function getColor(colo){
    let t = document.getElementById('Top')
    t.style.background = colo
}

let container=document.querySelector(".container");
container.addEventListener("wheel",(event)=>{
    event.preventDefault();
    container.scrollLeft+=event.deltaY;
})

