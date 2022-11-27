import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";
import {selectHome, selectMenu, selectContact} from "./buttonStyle.js";

const contentDiv = document.querySelector(".content");
const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const contactBtn = document.querySelector(".contactBtn");

selectHome();
createHome();

homeBtn.addEventListener("click", () => {
    selectHome();
    contentDiv.replaceChildren();
    createHome();
});

menuBtn.addEventListener("click", () => {
    selectMenu();
    contentDiv.replaceChildren();
    createMenu();
});

contactBtn.addEventListener("click", () => {
    selectContact();
    contentDiv.replaceChildren();
    createContact();
});

