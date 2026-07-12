const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
const flowerIntro = document.getElementById("flowerIntro");
const bgMusic = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {

    bgMusic.volume = 0.7;
bgMusic.currentTime = 0;

bgMusic.play().then(() => {
    console.log("Music Playing");
}).catch(err => {
    console.log(err);
});

    intro.style.display = "none";
    flowerIntro.style.display = "flex";

    const flowerInterval = setInterval(createFlower, 25);

    setTimeout(() => {
        clearInterval(flowerInterval);
        flowerIntro.style.display = "none";
        birthday.style.display = "block";
    }, 6000);

});
// 💗 Floating Hearts

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-30px";
    heart.style.fontSize = (18 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.filter = "drop-shadow(0 0 10px hotpink)";
    heart.style.animation = "heartbeat 1.5s infinite";

    document.body.appendChild(heart);

    let y = -30;

    const fall = setInterval(() => {

        y += 2;

        heart.style.top = y + "px";

        if (y > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }

    },20);

}

setInterval(createHeart,500);


// ✨ Sparkles

function createSparkle(){

    const s = document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";
    s.style.left=Math.random()*100+"vw";
    s.style.top=Math.random()*100+"vh";
    s.style.fontSize=(10+Math.random()*15)+"px";
    s.style.pointerEvents="none";
    s.style.zIndex="9998";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },1500);

}

setInterval(createSparkle,400);
// 🌸 Falling Petals

function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (20 + Math.random() * 18) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "9998";
    petal.style.opacity = "0.9";

    document.body.appendChild(petal);

    let y = -30;
    let x = Math.random() * 40 - 20;

    const fall = setInterval(() => {

        y += 2;

        petal.style.top = y + "px";
        petal.style.transform =
            `translateX(${x}px) rotate(${y}deg)`;

        if(y > window.innerHeight){
            clearInterval(fall);
            petal.remove();
        }

    },20);

}

setInterval(createPetal,700);
// 🌸 Premium Flower Rain

const flowers = [
    "flower1.png",
    "flower2.png",
    "flower3.png"
];

function createFlower(){

    const flower = document.createElement("img");

    flower.className = "flower";

    flower.src = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.width = (30 + Math.random() * 25) + "px";
    flower.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.getElementById("flowerContainer").appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 6000);
}

// 📸 Memory Slideshow

const images = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg"
];

const captions = [
    "The smile I'll never forget ❤️",
    "Every moment with you is special 💖",
    "Our beautiful memories together 🌸",
    "Forever my favorite person ❤️"
];

let currentPhoto = 0;

const slideImage = document.getElementById("slideImage");
const photoCaption = document.getElementById("photoCaption");

function changePhoto(){

    if(!slideImage || !photoCaption) return;

    currentPhoto++;

    if(currentPhoto >= images.length){
        currentPhoto = 0;
    }

    slideImage.style.opacity = "0";

    setTimeout(()=>{

        slideImage.src = images[currentPhoto];
        photoCaption.innerText = captions[currentPhoto];

        slideImage.style.opacity = "1";

    },400);

}

setInterval(changePhoto,2500);
