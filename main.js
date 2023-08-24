const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const productos = [
    {
        id: 1,
        nombre: "Harina",
        precio: 50,
        img:"https://www.shutterstock.com/es/image-photo/alameda-ca-july-21-2021-five-2012091740"
    },
    {
        id: 2,
        nombre: "masitas",
        precio: 150,
        img: "https://www.shutterstock.com/es/image-photo/oatmeal-cookies-package-isolated-on-white-2115512879"

    },
    {
        id: 3,
        nombre: "leche",
        precio: 200,
        img: "https://www.shutterstock.com/es/image-photo/fresh-milk-beverage-carton-107951936"
    },
    {
        id: 4,
        nombre: "vino",
        precio: 400,
        img: "https://www.shutterstock.com/es/image-photo/bottle-wine-pothography-classy-style-mock-2005859909"
    },
];
let carrito = [];
productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="price">${product.precio}$</p>
    `;

    shopContent.append(content)

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar"

    content.append(comprar);
    comprar.addEventListener("click", () =>{
        carrito.push({
            id:product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        });
        console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito.</h1>
    `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carrito.className = "modal-content";
        carrito,innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}$</p>
        `;

        modalContainer.append(carritoContent);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $`
    modalContainer.append(totalBuying);

});

