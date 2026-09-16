const paragraph = document.getElementById("paragraph");
const button = document.getElementById("button");

const change_font_size = setTimeout(()=>{
    paragraph.classList.add("font");
},3000)

const stop = ()=>{
    clearTimeout(change_font_size);
    console.log(paragraph.style);
}


button.addEventListener("click",stop);