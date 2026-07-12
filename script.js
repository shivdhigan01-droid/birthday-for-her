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

    const rain = setInterval(createFlower,45);

setTimeout(()=>{
    clearInterval(rain);

    flowerIntro.style.display="none";
    birthday.style.display="block";
let slideCount = 0;

const slideShow = setInterval(() => {

    current++;

    slideCount++;

    if(current >= images.length){
        current = 0;
    }

    slide.style.opacity = "0";

    setTimeout(() => {

        slide.src = images[current];
        caption.innerHTML = captions[current];
        slide.style.opacity = "1";

    },300);

    // ❤️ 4 photos ke baad Memory Gift dikhao
    if(slideCount == 4){

        clearInterval(slideShow);

        setTimeout(()=>{

            document.getElementById("memoryGift").style.display="block";

            document.getElementById("memoryGift").scrollIntoView({
                behavior:"smooth"
            });

        },1000);

    }

},2500);
    setInterval(createHeart,1200);
    setInterval(createSparkle,1000);
    setInterval(createPetal,1800);

},6000);

});


// ❤️ HEARTS

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="💗";
heart.style.filter = "drop-shadow(0 0 8px #ff1493) drop-shadow(0 0 15px #ff69b4)";
heart.style.textShadow = "0 0 12px #ff69b4";
heart.style.opacity = "0.95";
    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.top="-50px";
    heart.style.fontSize=(15+Math.random()*8)+"px";
    heart.style.zIndex="999999";
    heart.style.pointerEvents="none";
    heart.style.filter =
"drop-shadow(0 0 6px #ff1493) drop-shadow(0 0 15px #ff69b4) drop-shadow(0 0 25px #ffb6c1)";

    document.body.appendChild(heart);

    let y=-50;

    const fall = setInterval(()=>{
    y += 8;

        heart.style.top=y+"px";

        if(y>window.innerHeight){

            clearInterval(fall);
            heart.remove();

        }

    },50);

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
s.style.color="gold";
s.style.textShadow="0 0 15px gold";
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

        y+=8;

        p.style.top=y+"px";

        p.style.transform=`translateX(${Math.sin(y/30)*20}px) rotate(${y}deg)`;

        if(y>window.innerHeight){

            clearInterval(fall);
            p.remove();

        }

    },50);

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
    f.style.width=(28+Math.random()*18)+"px";
    f.style.animationDuration=(2+Math.random()*1.5)+"s";

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



// 💌 Show second envelope after 15 seconds


// ❤️ Memory Gift

const memoryBtn = document.getElementById("memoryBtn");
const photoReveal = document.getElementById("photoReveal");
const giftPhoto = document.getElementById("giftPhoto");
const giftQuote = document.getElementById("giftQuote");

const giftPhotos = [
    "photo5.jpg",
    "photo6.jpg",
    "photo7.jpg",
    "photo8.jpg"
];

const giftQuotes = [
    "Every moment with you feels like a beautiful dream. ❤️",
    "Your smile is my favorite place in the world. 🌸",
    "If I could choose again, I'd choose you every single time. 💖",
    "You are my today, my tomorrow, and my forever. ❤️"
];


memoryBtn.addEventListener("click", () => {
let giftIndex = 0;
    document.getElementById("memoryGift").style.display = "none";
    photoReveal.style.display = "block";

    giftPhoto.src = giftPhotos[0];
    giftQuote.innerHTML = giftQuotes[0];

    const showPhotos = setInterval(() => {

        giftIndex++;

        if(giftIndex >= giftPhotos.length){

    clearInterval(showPhotos);

    setTimeout(()=>{

        photoReveal.style.display="none";
        document.getElementById("finalMessage").style.display="block";

    },2500);

    return;
        }

        giftPhoto.style.opacity = "0";

        setTimeout(() => {

            giftPhoto.src = giftPhotos[giftIndex];
            giftQuote.innerHTML = giftQuotes[giftIndex];
            giftPhoto.style.opacity = "1";

        },400);

    },3000);

});
