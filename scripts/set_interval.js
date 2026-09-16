const paragraph = document.getElementById("paragraph");
const button = document.getElementById("button");

const change_font_size = setInterval(()=>{
    paragraph.classList.toggle("font");
},3000)

const stop = ()=>{
    clearInterval(change_font_size);
    console.log(paragraph.style);
}


button.addEventListener("click",stop);