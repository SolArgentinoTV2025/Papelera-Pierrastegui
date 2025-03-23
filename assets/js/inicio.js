const productos = [
    // Arranques
    { nombre: 'Arranque grueso', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARRANQUES/Arranques%20reforzados.jpg', ruta: 'productos\\arranques\\grueso.html', categoria: 'Arranques', boton: 'Ver Producto' },
    { nombre: 'Arranque rendidor', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARRANQUES/Arranques%20reforzados.jpg', ruta: 'productos\\arranques\\rendidor.html', categoria: 'Arranques', boton: 'Ver Producto' },

    // Bandejas
    { nombre: 'Bandeja aluminio', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20cat%C3%A1logo/ALUMINIO/bandeja%20de%20aluminio%20f100.jpg', ruta: 'productos\\bandejas\\aluminio.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja Carton', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20cat%C3%A1logo/BANDEJAS%20DE%20CART%C3%93N/bandeja%20de%20carton.webp', ruta: 'productos\\bandejas\\carton.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja plásticas', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BANDEJAS%20PLÁSTICAS/bandeja%20descartable%20n%20107.jpg', ruta: 'productos\\bandejas\\plasticas.html', categoria: 'Bandejas', boton: 'Ver Producto' },
    { nombre: 'Bandeja Telgopor', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BANDEJAS%20EXPANDIDO/Bandeja%20expandido.jpg', ruta: 'productos\\bandejas\\telgopor.html', categoria: 'Bandejas', boton: 'Ver Producto' },

    // Blondas
    { nombre: 'Blonda', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\blondas\\blonda.html', categoria: 'Blondas', boton: 'Ver Producto' },

    // Bolsas
    { nombre: 'Bolsa camiseta', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BOLSAS%20CAMISETA/bolsa%20camiseta%20foto.jpg', ruta: 'productos\\bolsas\\camiseta.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa factura', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BOLSAS%20DE%20SULFITO/bolsa%20sulfito%201.jpg', ruta: 'productos\\bolsas\\factura.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa horno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\horno.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa polipropileno', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BOLSAS%20POLPROPILENO/SOBRES%20POLIPROPILENO.jpg', ruta: 'productos\\bolsas\\polipropileno.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa residuo', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BOLSAS%20DE%20RESIDUO/bolsas%20de%20residuo.jpg', ruta: 'productos\\bolsas\\residuo.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa riñon', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/BOLSAS%20RIÑÓN/bolsas-rinon-todoplastic.jpg', ruta: 'productos\\bolsas\\riñon.html', categoria: 'Bolsas', boton: 'Ver Producto' },
    { nombre: 'Bolsa Ziploc', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\bolsas\\ziploc.html', categoria: 'Bolsas', boton: 'Ver Producto' },

    // Cajas
    { nombre: 'Caja Desayuno', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\desayuno.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Empanada para una docena', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/D_NQ_NP_786174-MLA73101670159_112023-O.webp', ruta: 'productos\\cajas\\empanadad.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Empanada para media docena', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/D_NQ_NP_786174-MLA73101670159_112023-O.webp', ruta: 'productos\\cajas\\empanadamd.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Pizza', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/caja%20de%20pizzas.jpg', ruta: 'productos\\cajas\\pizza.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Pizza Pequeña', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/caja%20de%20pizza%20chica.jpeg', ruta: 'productos\\cajas\\pizzapm.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Ravioles', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\cajas\\ravioles.html', categoria: 'Cajas', boton: 'Ver Producto' },
    { nombre: 'Caja De Hamburguesa', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/caja%20de%20hamburguesa.jpg', ruta: 'productos\\cajas\\hamburguesa.html', categoria: 'Cajas', boton: 'Ver Producto' },

    // Carton
    { nombre: 'Carton Corrugado', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CARTÓN%20CORRUGADO/carton%20corrugado.jpg', ruta: 'productos\\carton\\corrugado.html', categoria: 'Carton', boton: 'Ver Producto' },
    { nombre: 'Carton Tiras Satinadas', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\carton\\tirascs.html', categoria: 'Carton', boton: 'Ver Producto' },

    // Cintas
    { nombre: 'Cinta papel', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar//assets/images/Fotos%20productos%20papelera%20para%20catálogo/CINTAS%20ADHESIVAS/cinta%20de%20papel.jpg', ruta: 'productos\\cintas\\papel.html', categoria: 'Cintas', boton: 'Ver Producto' },
    { nombre: 'Cinta scotch', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar//assets/images/Fotos%20productos%20papelera%20para%20catálogo/CINTAS%20ADHESIVAS/cintas%20de%20embalaje.jpg', ruta: 'productos\\cintas\\scotch.html', categoria: 'Cintas', boton: 'Ver Producto' },

    // Cubiertos
    { nombre: 'Cuchara Sopera', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/cuchara%20sopera.jpg', ruta: 'productos\\cubiertos\\cucharasopera.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cucharita', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_2X_601101-MLA46721113388_072021-F.webp', ruta: 'productos\\cubiertos\\cucharita.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cuchillo', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/cuchillo%20descartable.webp', ruta: 'productos\\cubiertos\\cuchillo.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Cuchillo Negro', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/cuchillo negro descartable.png', ruta: 'productos\\cubiertos\\cuchillonegro.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Plato torta', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_2X_745062-MLA76109409291_042024-F.webp', ruta: 'productos\\cubiertos\\platostorta.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Remos', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_2X_677589-MLA51106764843_082022-F.webp', ruta: 'productos\\cubiertos\\remos.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Tenedor', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_2X_835147-MLU78458236278_082024-F.webp', ruta: 'productos\\cubiertos\\tenedor.html', categoria: 'Cubiertos', boton: 'Ver Producto' },
    { nombre: 'Tenedor negro', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_2X_600612-MLA80900595398_122024-F.webp', ruta: 'productos\\cubiertos\\tenedornegro.html', categoria: 'Cubiertos', boton: 'Ver Producto' },

    // Film
    { nombre: 'Film', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FILM%20-%20STRETCH/D_NQ_NP_2X_724993-MLA74413303619_022024-F.webp', ruta: 'productos\\film\\film.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Film boliviano', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FILM%20-%20STRETCH/D_NQ_NP_2X_896757-MLA82920461463_032025-F.webp', ruta: 'productos\\film\\filmboliviano.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Film económico', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FILM%20-%20STRETCH/film%205mts.jpg', ruta: 'productos\\film\\filmeconomico.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Stretch negro', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FILM%20-%20STRETCH/rollo%20strech%20negro.jpg', ruta: 'productos\\film\\stretchnegro.html', categoria: 'Film', boton: 'Ver Producto' },
    { nombre: 'Stretch virgen', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FILM%20-%20STRETCH/strech%20con%20manija.jpg', ruta: 'productos\\film\\stretchvirgen.html', categoria: 'Film', boton: 'Ver Producto' },

    // Fólex
    { nombre: 'Fólex', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FÓLEX/Folex.webp', ruta: 'productos\\folex\\folex.html', categoria: 'Fólex', boton: 'Ver Producto' },
    { nombre: 'Fólex hamburguesa', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FÓLEX/Folex%20hamburguesa.webp', ruta: 'productos\\folex\\folexhamburguesa.html', categoria: 'Fólex', boton: 'Ver Producto' },
    { nombre: 'Papel aluminio hamburguesa', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/FÓLEX/Folex%20hamburguesa.webp', ruta: 'productos\\folex\\papelaluminiohamburguesa.html', categoria: 'Fólex', boton: 'Ver Producto' },

    // Guantes
    { nombre: 'Guante nitrilo', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/GUANTES/D_NQ_NP_2X_764586-MLU72636722033_112023-F.webp', ruta: 'productos\\guantes\\nitirlo.html', categoria: 'Guantes', boton: 'Ver Producto' },
    { nombre: 'Guante polietileno', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/GUANTES/D_NQ_NP_2X_829059-MLA80203053115_102024-F.webp', ruta: 'productos\\guantes\\polietileno.html', categoria: 'Guantes', boton: 'Ver Producto' },

    // Libreria
    { nombre: 'Abrochadoras', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/LIBRERÍA/abrochadora.jpg', ruta: 'productos\\libreria\\abrochadoras.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Biromes', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\biromes.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Cuadernos Universitarios', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\cuadernosuniv.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Estallidos', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/LIBRERÍA/estallidos.jpg', ruta: 'productos\\libreria\\estallidos.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Fibrones', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\fibrones.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Hilo', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\hilo.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Hojas', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\hojas.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Liquid Paper', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\liquidpaper.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Máquina De Mótex', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/LIBRERÍA/maquina%20motex.jpg', ruta: 'productos\\libreria\\maquinamotex.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Mótex', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\motex.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Remitos', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\remitos.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Resaltador', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\resaltador.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Tacos De Papel', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/LIBRERÍA/tacos%20de%20papel.jpg', ruta: 'productos\\libreria\\tacospapel.html', categoria: 'Libreria', boton: 'Ver Producto' },
    { nombre: 'Voligoma', descripcion: '', precioARS: 0, imagen: '', ruta: 'productos\\libreria\\voligoma.html', categoria: 'Libreria', boton: 'Ver Producto' },

    // Papel
    { nombre: 'Papel aluminio', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ALUMINIO/aluminio%205%20mts.jpg', ruta: 'productos\\papel\\aluminio.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel bobina', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20SULFITO/bobina%20de%20papel.jpg', ruta: 'productos\\papel\\bobina.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel cortado', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20SULFITO/Papel%20cortado.webp', ruta: 'productos\\papel\\cortado.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel Manteca', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20MANTECA/Papel%20manteca.webp', ruta: 'productos\\papel\\manteca.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Rollo De Cocina', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20HIGIÉNICO%20-%20ROLLO%20DE%20COCINA/rollo%20de%20cocina%20elegante.jpg', ruta: 'productos\\papel\\rollococina.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel Higiénico Económico', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20HIGIÉNICO%20-%20ROLLO%20DE%20COCINA/papel%20higenico%20elegante.jpg', ruta: 'productos\\papel\\higienicoeco.html', categoria: 'Papel', boton: 'Ver Producto' },
    { nombre: 'Papel Higiénico Reforzado', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/PAPEL%20HIGIÉNICO%20-%20ROLLO%20DE%20COCINA/Higiénico%20new%20pel%20línea%20premium%20triple%20hoja.jpg', ruta: 'productos\\papel\\higienicorefo.html', categoria: 'Papel', boton: 'Ver Producto' },

    // Pizzeria
    { nombre: 'Cono de papas', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/conos%20de%20papas%20fritas.jpg', ruta: 'productos\\pizzeria\\conopapas.html', categoria: 'Pizzeria', boton: 'Ver Producto' },
    { nombre: 'Fondo pizza chico', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/papel%20fondo%20para%20pizza.jpg', ruta: 'productos\\pizzeria\\fondopizzachico.html', categoria: 'Pizzeria', boton: 'Ver Producto' },
    { nombre: 'Fondo pizza grande', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/papel%20fondo%20para%20pizza.jpg', ruta: 'productos\\pizzeria\\fondopizzagrande.html', categoria: 'Pizzeria', boton: 'Ver Producto' },
    { nombre: 'Porta Panchos', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/porta%20panchos.jpg', ruta: 'productos\\pizzeria\\portapanchos.html', categoria: 'Pizzeria', boton: 'Ver Producto' },
    { nombre: 'Tripode', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ARTÍCULOS%20DE%20PIZZERÍA/Tripode-Pizza.webp', ruta: 'productos\\pizzeria\\tripode.html', categoria: 'Pizzeria', boton: 'Ver Producto' },

    // Potes
    { nombre: 'Pote bisagra', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/POTES/potes%20bisagra.jpg', ruta: 'productos\\potes\\bisagra.html', categoria: 'Potes', boton: 'Ver Producto' },
    { nombre: 'Pote dips', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/POTES/D_NQ_NP_2X_957775-MLA70448724893_072023-F.webp', ruta: 'productos\\potes\\dips.html', categoria: 'Potes', boton: 'Ver Producto' },
    { nombre: 'Pote Ensalada de fruta', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/POTES/D_NQ_NP_2X_957775-MLA70448724893_072023-F.webp', ruta: 'productos\\potes\\dips.html', categoria: 'Potes', boton: 'Ver Producto' },
    { nombre: 'Tapa de pote ensalada de fruta', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/POTES/D_NQ_NP_2X_957775-MLA70448724893_072023-F.webp', ruta: 'productos\\potes\\dips.html', categoria: 'Potes', boton: 'Ver Producto' },

    // Rollos térmicos
    { nombre: 'Rollo térmico', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/ROLLOS%20TÉRMICOS/rollo%20termico.jpeg', ruta: 'productos\\rollostermicos\\rollos.html', categoria: 'RollosTermicos', boton: 'Ver Producto' },

    // Sorbetes
    { nombre: 'Sorbetes Común', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/D_NQ_NP_844300-MLA80844285453_112024-O.webp', ruta: 'productos\\sorbetes\\comun.html', categoria: 'Sorbetes', boton: 'Ver Producto' },
    { nombre: 'Sorbetes Negro', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/sorbetes%20descartables%20negros.jpg', ruta: 'productos\\sorbetes\\negro.html', categoria: 'Sorbetes', boton: 'Ver Producto' },
    { nombre: 'Sorbetes Papel', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/CUBIERTOS-PLATOS/images.jfif', ruta: 'productos\\sorbetes\\papel.html', categoria: 'Sorbetes', boton: 'Ver Producto' },

    // Vasos
    { nombre: 'Vasos plástico', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/VASOS/D_841199-MLA52688134406_122022-O.jpg', ruta: 'productos\\vasos\\plastico.html', categoria: 'Vasos', boton: 'Ver Producto' },
    { nombre: 'Vasos telgopor', descripcion: '', precioARS: 0, imagen: 'https://papelerapierrastegui.com.ar/assets/images/Fotos%20productos%20papelera%20para%20catálogo/VASOS/vaso-termico-180-cc-50-unidades1-effa370a04aa41b56b15571658086178-480-0.jpg', ruta: 'productos\\vasos\\telgopor.html', categoria: 'Vasos', boton: 'Ver Producto' },
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

function filtrarProductos() {
    const input = document.getElementById('buscador').value.toLowerCase();
    const productosDiv = document.querySelectorAll('.productos');

    productosDiv.forEach(function(productoDiv) {
        const nombreProducto = productoDiv.getAttribute('data-nombre').toLowerCase(); // Obtener el nombre del producto
        if (nombreProducto.includes(input)) {
            productoDiv.style.display = ''; // Mostrar el producto si coincide
        } else {
            productoDiv.style.display = 'none'; // Ocultar el producto si no coincide
        }
    });
}