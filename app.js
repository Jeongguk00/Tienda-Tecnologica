const productos = [

    {id: 1, nombre: "Mouse", Categoria: "Periferico", 
        Precio: 50000, stock: 10, ventas: 12},

        {id: 2, nombre: "Teclado", Categoria: "Periferico", 
        Precio: 120000, stock: 5, ventas: 7},

        {id: 3, nombre: "Monitor", Categoria: "Pantalla", 
        Precio: 800000, stock: 2, ventas: 4},

        {id: 4, nombre: "USB", Categoria: "Accesorio", 
        Precio: 30000, stock: 0, ventas: 15},

        {id: 5, nombre: "Parlante", Categoria: "Audio", 
        Precio: 90000, stock: 8, ventas: 6},


];

const contenedor = 
document.getElementById("productos"); 

function mostrarProductos() {

    contenedor.innerHTML="";

    productos.forEach((producto)=> {

        contenedor.innerHTML += `

        <div class="producto">

            <h3> ${producto.nombre}</h3>

            <p>Precio: $${producto.precio}</p>
            <p>Stock: ${producto.stock}</p>

        </div>

        `;

    });
}

mostrarProductos();