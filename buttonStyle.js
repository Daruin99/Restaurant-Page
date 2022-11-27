const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

export function selectHome() {
    homeBtn.classList.add("active");
    menuBtn.classList.remove("active");
    contactBtn.classList.remove("active");
}

export function selectMenu() {
    menuBtn.classList.add("active");
    homeBtn.classList.remove("active");
    contactBtn.classList.remove("active");
}

export function selectContact() {
    contactBtn.classList.add("active");
    homeBtn.classList.remove("active");
    menuBtn.classList.remove("active");
}