export default function createHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("homeDiv");

    const firstParg = document.createElement("p");
    firstParg.textContent = "Best Pizza in Cairo";
    homeDiv.appendChild(firstParg);

    const secondParg = document.createElement("p");
    secondParg.textContent = "Made with passion since 1970";
    homeDiv.appendChild(secondParg);

    const chefImg = document.createElement("img");
    chefImg.src = "imgs/chef.png";
    chefImg.classList.add("chef");
    homeDiv.appendChild(chefImg);

    const lastParg = document.createElement("p");
    lastParg.textContent = "Order online or visit us!";
    homeDiv.appendChild(lastParg);

    const contentDiv = document.querySelector(".content");
    contentDiv.appendChild(homeDiv);
}