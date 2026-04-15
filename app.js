const productos = [

    {id: 1, nombre: "Mouse", Categoria: "Periferico", 
        precio: 50000, stock: 10, ventas: 12},

        {id: 2, nombre: "Teclado", Categoria: "Periferico", 
        precio: 120000, stock: 5, ventas: 7},

        {id: 3, nombre: "Monitor", Categoria: "Pantalla", 
        precio: 800000, stock: 2, ventas: 4},

        {id: 4, nombre: "USB", Categoria: "Accesorio", 
        precio: 30000, stock: 0, ventas: 15},

        {id: 5, nombre: "Parlante", Categoria: "Audio", 
        precio: 90000, stock: 8, ventas: 6},


];

const reportesDiv = document.getElementById("reportes");


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

function mostrarStockBajo() {
  const stockBajo = productos.filter(p => p.stock > 0 && p.stock < 5);

  contenedor.innerHTML = stockBajo.map(p => `
    <div class="producto">
      <h3>${p.nombre}</h3>
      <p>⚠ Stock bajo: ${p.stock}</p>
    </div>
  `).join("");
}

function mostrarAgotados() {
  const agotados = productos.filter(p => p.stock === 0);

  contenedor.innerHTML = agotados.map(p => `
    <div class="producto">
      <h3>${p.nombre}</h3>
      <p>✖️GOTADO</p>
    </div>
  `).join("");
}

function generarReportes() {

  const masCaro = [...productos].sort((a,b)=>b.precio-a.precio)[0];
  const masBarato = [...productos].sort((a,b)=>a.precio-b.precio)[0];
  const masVendido = [...productos].sort((a,b)=>b.ventas-a.ventas)[0];

  const valorInventario = productos.reduce((total, p) => {
    return total + (p.precio * p.stock);
  }, 0);

  const totalVentas = productos.reduce((total, p) => {
    return total + p.ventas;
  },0);


  reportesDiv.innerHTML = `

    <h2>📊 Reportes de la tienda</h2>
    <p>💰 Más caro: ${masCaro.nombre}</p>
    <p>💸 Más barato: ${masBarato.nombre}</p>
    <p>🏆 Más vendido: ${masVendido.nombre}</p>
    <p>📦 Total ventas: ${totalVentas}</p>
    <p>💵 Valor inventario: $${valorInventario}</p>
    
  `;
}