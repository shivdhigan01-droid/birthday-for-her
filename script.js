
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
// Floating Hearts ❤️

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💗";
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
