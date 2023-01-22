const box = document.querySelector(".box")
const thiep= document.querySelector("body > div > div.bia")
const nap = document.querySelector("body > div > div.nap");
const lixi = document.querySelector("body > div > div.li-xi")
const song = document.getElementById("song")


const text = ['Gửi','Mylove','của','anh',':','Tuy','anh','hong','giàu',',','hổng','có','tiền','lì','xì','cho','em',':<','nhưng','anh','tốt',';>','nên','2023','này',"hãy","để","anh","trao","tình","yêu",'này',"cho","em","đến","sau","này","nhé!",";3",'❤❤❤']
nap.addEventListener("click",open)
function open(){
    nap.style.animation='open linear 3s forwards';
    song.load()
    song.play();    
    song.loop = true;
    setTimeout(function(){lixi.style.animation='push-up linear 4s forwards';   
    nap.style.zIndex=0;},3000)
    setTimeout(function(){
        thiep.style.animation='disappeared linear 2s forwards'
        box.style.background= 'transparent'
        nap.style.animation='disappeared linear 2s forwards'
        setTimeout(() => {
         nap.remove()
         thiep.remove()
        }, 3000);
    },7000)
    setTimeout(function(){
    
        box.style.width="auto"
        lixi.style.animation='sizeup linear 3s forwards'
            setTimeout(() => {
            for (let i = 0; i < text.length; i++){
                setTimeout(() => {
                    lixi.innerHTML += text[i]+" "
                }, i*750);
            }
            }, 4000);
            document.body.style.animation="changecolor linear 1s forwards"
     
        setInterval(function(){
            const heart = document.createElement("div")
            heart.innerHTML="❤"
            heart.classList.add("heart")
            document.body.appendChild(heart)
            heart.style.left =(Math.random()*100)+"vw"
        },1100)
},10000)
}

