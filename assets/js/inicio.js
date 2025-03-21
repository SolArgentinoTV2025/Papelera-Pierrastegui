const productos = [
    // Arranques
    { nombre: 'Arranque grueso', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\arranques\\grueso.html', categoria: 'Arranques', boton: 'Ver Producto' },
    { nombre: 'Arranque rendidor', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\arranques\\rendidor.html', categoria: 'Arranques', boton: 'Ver Producto' },

    // Bandejas
    { nombre: 'Bandeja aluminio', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bandejas\\aluminio.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja Carton', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bandejas\\carton.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja plásticas', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bandejas\\plasticas.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja Telgopor', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bandejas\\telgopor.html', categoria: 'Bandejas', boton: 'Ver Producto' },

    // Blondas
    { nombre: 'Blonda', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\blondas\\blonda.html', categoria: 'Blondas', boton: 'Ver Producto' },

    // Bolsas
    { nombre: 'Bolsa camiseta', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\camiseta.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa factura', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\factura.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa horno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\horno.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa polipropileno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\polipropileno.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa residuo', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\residuo.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa riñon', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\riñon.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa Ziploc', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\ziploc.html', categoria: 'Bolsas', boton: 'Ver Producto' },

    // Cajas
    { nombre: 'Caja desayuno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\desayuno.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja empanada', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\empanadad.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja empanada mediana', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\empanadamd.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja hamburguesa', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\hamburguesa.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja pizza', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\pizza.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja pizza pequeña', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\pizzapm.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja ravioles', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\ravioles.html', categoria: 'Cajas', boton: 'Ver Producto' },

    // Carton
    { nombre: 'Carton corrugado', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\carton\\corrugado.html', categoria: 'Carton', boton: 'Ver Producto' },
    { nombre: 'Carton tiras', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\carton\\tirascs.html', categoria: 'Carton', boton: 'Ver Producto' },

    // Cintas
    { nombre: 'Cinta papel', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cintas\\papel.html', categoria: 'Cintas', boton: 'Ver Producto' },
    { nombre: 'Cinta scotch', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cintas\\scotch.html', categoria: 'Cintas', boton: 'Ver Producto' },

    // Cubiertos
    { nombre: 'Cuchara opera', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\cucharasopera.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cucharita', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\cucharita.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cuchillo', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\cuchillo.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cuchillo negro', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\cuchillonegro.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Plato torta', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\platostorta.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Remo', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\remos.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Tenedor', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\tenedor.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Tenedor negro', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cubiertos\\tenedornegro.html', categoria: 'Cubiertos', boton: 'Ver Producto' },

    // Film
    { nombre: 'Film', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\film\\film.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Film boliviano', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\film\\filmboliviano.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Film económico', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\film\\filmeconomico.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Stretch negro', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\film\\stretchnegro.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Stretch virgen', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\film\\stretchvirgen.html', categoria: 'Film', boton: 'Ver Producto' },

    // Fólex
    { nombre: 'Fólex', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\folex\\folex.html', categoria: 'Fólex', boton: 'Ver Producto' },
    { nombre: 'Fólex hamburguesa', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\folex\\folexhamburguesa.html', categoria: 'Fólex', boton: 'Ver Producto' },
    { nombre: 'Papel aluminio hamburguesa', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\folex\\papelaluminiohamburguesa.html', categoria: 'Fólex', boton: 'Ver Producto' },

    // Guantes
    { nombre: 'Guante nitrilo', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\guantes\\nitirlo.html', categoria: 'Guantes', boton: 'Ver Producto' },
    { nombre: 'Guante polietileno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\guantes\\polietileno.html', categoria: 'Guantes', boton: 'Ver Producto' },

    // Libreria
    { nombre: 'Abrochadoras', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\abrochadoras.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Biromes', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\biromes.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Cuadernos univ', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\cuadernosuniv.html', categoria: 'Libreria', boton: 'Ver Producto' },

    // Papel
    { nombre: 'Papel aluminio', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\papel\\aluminio.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel bobina', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\papel\\bobina.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel cortado', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\papel\\cortado.html', categoria: 'Papel', boton: 'Ver Producto' },

    // Pizzeria
    { nombre: 'Pizza con papas', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\pizzeria\\conopapas.html', categoria: 'Pizzeria', boton: 'Ver Producto' },
    { nombre: 'Fondo pizza chico', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\pizzeria\\fondopizzachico.html', categoria: 'Pizzeria', boton: 'Ver Producto' },

    // Potes
    { nombre: 'Pote bisagra', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\potes\\bisagra.html', categoria: 'Potes', boton: 'Ver Producto' },
    { nombre: 'Pote dips', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\potes\\dips.html', categoria: 'Potes', boton: 'Ver Producto' },

    // Rollos térmicos
    { nombre: 'Rollo térmico', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\rollostermicos\\rollos.html', categoria: 'RollosTermicos', boton: 'Ver Producto' },

    // Sorbetes
    { nombre: 'Sorbetes común', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\sorbetes\\comun.html', categoria: 'Sorbetes', boton: 'Ver Producto' },

    // Vasos
    { nombre: 'Vasos plástico', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\vasos\\plastico.html', categoria: 'Vasos', boton: 'Ver Producto' },
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
                <a href="${producto.ruta}" class="btn-ver-producto">${producto.boton}</a>
            </div>
        `;
        
        contenedor.innerHTML += productoHTML;

        if ((index + 1) % 5 === 0) {
            contenedor.innerHTML += '<div class="clearfix"></div>';
        }
    });
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});