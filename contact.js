export default function createContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");

    const telephone= document.createElement("p");
    telephone.textContent = "📞 123 456 789" ;
    contactDiv.appendChild(telephone);

    const adress= document.createElement("p");
    adress.textContent = `🏠 1 Palestine Rd, El-Basatin Sharkeya,
    Maadi, Cairo Governorate`;
    contactDiv.appendChild(adress);

    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.073346781359!2d31.28265065091958!3d29.977322028606025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839169cff8977%3A0x717d6a206d163663!2zUHJpbW_igJlzIFBpenph!5e0!3m2!1sen!2seg!4v1669124168190!5m2!1sen!2seg"
    map.width = "100%";
    map.height = "400";
    map.style = "border:0;";
    map.allowFullscreen = "";
    map.loading = "lazy";
    contactDiv.appendChild(map);

    const contentDiv = document.querySelector(".content");
    contentDiv.appendChild(contactDiv);
}