
const openBtn = document.getElementById("openBtn");
const intro = document.getElementById("intro");
const birthday = document.getElementById("birthday");

openBtn.addEventListener("click", () => {

    intro.style.display = "none";
    birthday.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

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

    s.innerHTML = "✨";

    s.style.position = "fixed";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*100 + "vh";
    s.style.fontSize = (10 + Math.random()*15) + "px";
    s.style.opacity = ".8";
    s.style.pointerEvents = "none";
    s.style.zIndex = "9998";

    document.body.appendChild(s);

    setTimeout(()=>{
        s.remove();
    },1800);

}

setInterval(createSparkle,500);
