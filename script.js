
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
