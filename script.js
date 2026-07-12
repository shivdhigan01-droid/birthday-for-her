const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const flowerIntro = document.getElementById("flowerIntro");
const flowerContainer = document.getElementById("flowerContainer");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    bgMusic.volume = 0.7;
    bgMusic.play().catch(()=>{});

    intro.style.display = "none";
    flowerIntro.style.display = "flex";

    const rain = setInterval(createFlower,20);

setTimeout(()=>{
    clearInterval(rain);

    flowerIntro.style.display="none";
    birthday.style.display="block";

    setInterval(createHeart,450);
    setInterval(createSparkle,350);
    setInterval(createPetal,650);

},6000);

});


// ❤️ HEARTS

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💗";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-50px";
    heart.style.fontSize=(18+Math.random()*10)+"px";
    heart.style.zIndex="999999";
    heart.style.pointerEvents="none";
    heart.style.animation="heartbeat 1.5s infinite";

    document.body.appendChild(heart);

    let y=-50;

    const fall=setInterval(()=>{

        y+=2.5;

        heart.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(fall);
            heart.remove();

        }

    },20);

}



// ✨ SPARKLES

function createSparkle(){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.fontSize=(12+Math.random()*12)+"px";
    s.style.pointerEvents="none";
    s.style.zIndex="999998";

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },1200);

}


// 🌸 PETALS

function createPetal(){

    const p=document.createElement("div");

    p.innerHTML="🌸";

    p.style.position="fixed";
    p.style.left=Math.random()*100+"vw";
    p.style.top="-40px";
    p.style.fontSize=(22+Math.random()*18)+"px";
    p.style.pointerEvents="none";
    p.style.zIndex="999997";

    document.body.appendChild(p);

    let y=-40;

    const fall=setInterval(()=>{

        y+=2;

        p.style.top=y+"px";

        p.style.transform=`translateX(${Math.sin(y/30)*20}px) rotate(${y}deg)`;

        if(y>window.innerHeight){

            clearInterval(fall);
            p.remove();

        }

    },20);

}




// 🌹 PNG FLOWERS

const flowers=[
"flower1.png",
"flower2.png",
"flower3.png"
];

function createFlower(){

    const f=document.createElement("img");

    f.src=flowers[Math.floor(Math.random()*flowers.length)];

    f.className="flower";

    f.style.left=Math.random()*100+"vw";
    f.style.width=(35+Math.random()*25)+"px";
    f.style.animationDuration=(3+Math.random()*3)+"s";

    flowerContainer.appendChild(f);

    setTimeout(()=>{

        f.remove();

    },6000);

}


// 📸 SLIDESHOW

const images=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg"
];

const captions=[
"The smile I'll never forget ❤️",
"Every moment with you is special 💖",
"Our beautiful memories together 🌸",
"Forever my favorite person ❤️"
];

let current=0;

const slide=document.getElementById("slideImage");
const caption=document.getElementById("photoCaption");

setInterval(()=>{

current++;

if(current>=images.length) current=0;

slide.style.opacity="0";

setTimeout(()=>{

slide.src=images[current];
caption.innerHTML=captions[current];
slide.style.opacity="1";

},300);

},2500);
