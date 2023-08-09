const productos = [
    { nombre : "arroz", precio : 100 },
    { nombre : "galletas", precio : 150 },
    { nombre : "leche", precio : 200 },
    { nombre : "gaseosa", precio : 250 },
    { nombre : "vino", precio : 350 },
] ;
let carrito = []
let seleccion = prompt("¿Hola desea comprar algun producto?")
while (seleccion != "si" && seleccion != "no") {
    alert("Por favor ingrese si o no")
    seleccion = prompt("¿Hola desea comprar algun producto?")
}

if(seleccion == "si"){
    alert("Aqui estan los productos")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert(todoslosProductos.join(" -- "))
} else if (seleccion == "no"){
    alert("Gracias por venir,nos vemos pronto")
}

while (seleccion != "no") {
    let producto = prompt("agrega uno o mas productos a tu carrito")
    let = precio = 0
    if (producto == "arroz" || producto == "galletas" || producto == "leche" || producto == "gaseosa" || producto == "vino"){
        switch (producto) {
            case "arroz":
                precio = 100;               
                break;
            case "galletas":
                precio = 150;               
                break;
            case "leche":
                precio = 200;               
                break;
            case "gaseosa":
                precio = 250;               
                break;
            case "vino":
                precio = 350;               
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades desea llevar"))
    carrito.push({producto, unidades, precio})    
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")
    
    while (seleccion === "no") {
        alert("Aqui esta la lista de su carrito")
        carrito.forEach((carritoFinal) => {
            alert(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}` )
        })
        break;
    }
}

const total = carrito.reduce((ecc, el) => ecc + el.precio * el.unidades, 0)
alert(`el total a pagar por su compra es: ${total}`)