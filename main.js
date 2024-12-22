
const body=document.querySelector("body")

let random=document.querySelector("img")

const btn =document.querySelector("button")


function changeImg(){
   
   random.src = "https://picsum.photos/300?random=300"+ Math.floor(Math.random() * 1000);
   
   let randomColor = Math.floor(Math.random() * 1677721).toString(16);
   document.body.style.backgroundColor = `#${randomColor}`;
   btn.innerText = `#${randomColor}`;
 
   // btn.style.=`#${randomColor}`
}

btn.addEventListener("click",changeImg)

