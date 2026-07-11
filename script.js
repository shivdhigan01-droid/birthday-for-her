
const openBtn = document.getElementById("openBtn");
document.getElementById("bgMusic").play();
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");
openBtn.addEventListener("click", () => {

    intro.style.display = "none";

    const rose = document.getElementById("rose");

    rose.style.display = "block";

    setTimeout(() => {

        rose.style.display = "none";
        birthday.style.display = "block";

    }, 4000);


});
// Floating Hearts 💗

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💗";
heart.style.filter = "drop-shadow(0 0 10px #ff69b4)";
heart.style.textShadow = "0 0 15px #ff69b4";
heart.style.animation = "heartbeat 1.5s infinite";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.color = "#ff4f9a";
    heart.style.opacity = "0.8";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = -20;

    const fall = setInterval(() => {
        pos += 2;
        heart.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }

    }, 20);
}

setInterval(createHeart, 500);
// ✨ Sparkles

function createSparkle() {

    const s = document.createElement("div");

    s.innerHTML = "⭐";
s.style.color = "#FFD700";
s.style.textShadow = "0 0 12px gold";

    s.style.position = "fixed";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*100 + "vh";
    s.style.fontSize = (10 + Math.random()*15) + "px";
    s.style.opacity = "1";
    s.style.pointerEvents = "none";
    s.style.zIndex = "9998";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },1800);

}

setInterval(createSparkle,500);
// 🌸 Falling Petals

function createPetal() {

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";
    petal.style.position = "fixed";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.top = "-30px";
    petal.style.fontSize = (18 + Math.random() * 15) + "px";
    petal.style.pointerEvents = "none";
    petal.style.zIndex = "9998";
    petal.style.opacity = "0.9";

    document.body.appendChild(petal);

    let y = -30;
    let x = Math.random() * 30 - 15;

    const fall = setInterval(() => {
        y += 2;
        petal.style.top = y + "px";
        petal.style.transform = `translateX(${x}px) rotate(${y}deg)`;

        if (y > window.innerHeight) {
            clearInterval(fall);
            petal.remove();
        }
    }, 20);
}

setInterval(createPetal, 900);
