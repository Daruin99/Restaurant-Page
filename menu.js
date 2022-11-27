export default function createMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuDiv");

    const carnePizza = document.createElement("div");
    carnePizza.classList.add("card");

    const carneImg = document.createElement("img");
    carneImg.src = "imgs/carne.png";
    carneImg.classList.add("pizza");
    carnePizza.appendChild(carneImg);

    const carneTitle = document.createElement("h2");
    carneTitle.textContent = "Carne";
    carnePizza.appendChild(carneTitle);

    const carneDescription = document.createElement("p");
    carneDescription.textContent = `Tomato sauce, Mozarella,
    Homemade sausage, Bacon,
    Garlic, Pepper, Chilli`;
    carnePizza.appendChild(carneDescription);
    
    menuDiv.appendChild(carnePizza);

    const salsPizza = document.createElement("div");
    salsPizza.classList.add("card");

    const salsImg = document.createElement("img");
    salsImg.src = "imgs/salsiccia.png";
    salsImg.classList.add("pizza");
    salsPizza.appendChild(salsImg);

    const salsTitle = document.createElement("h2");
    salsTitle.textContent = "Salsiccia";
    salsPizza.appendChild(salsTitle);

    const salsDescription = document.createElement("p");
    salsDescription.textContent = `Tomato sauce, Mozarella,
    Homemade sausage, Tomato,
    Garlic, Basil`;
    salsPizza.appendChild(salsDescription);
    
    menuDiv.appendChild(salsPizza);

    const gambPizza = document.createElement("div");
    gambPizza.classList.add("card");

    const gambImg = document.createElement("img");
    gambImg.src = "imgs/gamberi.png";
    gambImg.classList.add("pizza");
    gambPizza.appendChild(gambImg);

    const gambTitle = document.createElement("h2");
    gambTitle.textContent = "Gamberi";
    gambPizza.appendChild(gambTitle);

    const gambDescription = document.createElement("p");
    gambDescription.textContent = `Tomato sauce, Mozarella,
    Feta cheese, Shrimps,
    Garlic, Basil`;
    gambPizza.appendChild(gambDescription);
    
    menuDiv.appendChild(gambPizza);

    const cremPizza = document.createElement("div");
    cremPizza.classList.add("card");

    const cremImg = document.createElement("img");
    cremImg.src = "imgs/crema.png";
    cremImg.classList.add("pizza");
    cremPizza.appendChild(cremImg);

    const cremTitle = document.createElement("h2");
    cremTitle.textContent = "Crema";
    cremPizza.appendChild(cremTitle);

    const cremDescription = document.createElement("p");
    cremDescription.textContent = `White sauce, Mozarella,
    Salmon, Shrimps,
    Pineapple, Basil`;
    cremPizza.appendChild(cremDescription);
    
    menuDiv.appendChild(cremPizza);

    const contentDiv = document.querySelector(".content");
    contentDiv.appendChild(menuDiv);
}