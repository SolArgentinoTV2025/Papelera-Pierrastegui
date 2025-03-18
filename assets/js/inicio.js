const productos = [
    { nombre: 'Bandeja aluminio f75', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandeja Aluminio f100', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Papel aluminio 1kg', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Papel aluminio chico', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Papel manteca 1KG', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Papel manteca chico', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 20x30', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 25x35', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 30x40', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 35x45', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 40x50', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 45x60', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 50x70', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque grueso 60x90', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 15x20', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 15x25', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 20x30', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 25x35', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 30x40', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 35x45', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Arranque rendidor 40x50', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Trípode', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Cono de papas fritas', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fondo de pizza chico', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fondo de pizza grande', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Porta panchos', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Abrochadoras', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Birome azul', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Birome negra', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Birome roja', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Boligoma', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Cuadernos universitarios', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Estallidos chico', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Estallidos grande', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Estallidos mediano', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fibrones punta chata azul', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fibrones punta chata negra', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fibrones punta chata roja', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fibrones punta chata verde', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Fibrones punta redonda negra', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Hilo amarillo', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Hilo blanco', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Hojas A4', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Hojas Oficio', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Liquid paper', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Máquina de motex', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Motex', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Remitos chicos', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Remitos grandes', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Resaltador amarillo', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Tacos de papel', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 1', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 2', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 3', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 4', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 5', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 6', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 12', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 12,5', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 13', descripcion: '', precioARS: 0, imagen: '' },
    { nombre: 'Bandejas de cartón N° 13,5', descripcion: '', precioARS: 0, imagen: '' }
];

const tasaCompraUSD = 1195;
const tasaVentaUSD = 1215;
let monedaActual = 'ARS';

function cargarProductos() {
    const contenedor = document.querySelector('.productos');
    contenedor.innerHTML = '';
    productos.forEach((producto, index) => {
        const precioUSD = (producto.precioARS / tasaVentaUSD).toFixed(2);
        const precio = monedaActual === 'ARS' ? `$${producto.precioARS} ARS` : `$${precioUSD} USD`;
        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: <span class="precio">${precio}</span></p>
            </div>
        `;
        contenedor.innerHTML += productoHTML;
        if ((index + 1) % 5 === 0) {
            contenedor.innerHTML += '<div class="clearfix"></div>';
        }
    });
}

function cambiarMoneda(moneda) {
    monedaActual = moneda;
    document.getElementById('moneda-actual').innerText = moneda;
    cargarProductos();
}

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
});