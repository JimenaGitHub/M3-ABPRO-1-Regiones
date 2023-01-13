
var regionesNumeros=['Región de Arica y Parinacota (XV)','Región de Tarapacá (I)', 'Región de Antofagasta (II)','Región de Atacama (III)','Región de Coquimbo (IV)','Región de Valparaíso (V)','Región Metropolitana (RM)','Región del Libertador Bernardo OHiggins (VI)','Región del Maule (VII)', 'Región del Ñuble (XVI)','Región del Bío Bío (VIII)','Región de la Araucanía (IX)', 'Región de los Ríos (XIV)','Región de los Lagos (X)',' Región de Aysén del General Carlos Ibáñez del Campo (XI)','Región de Magallanes y la Antártica (XII)']

var regionesAtractivos=['Valle de Azapa','Oficinas salitreras de Humberstone y Santa Laura','San Pedro de Atacama','Bahía Inglesa', 'Valle de Elqui','Casa de Pablo Neruda','Museo de la memoria y derechos humanos','Viñas Valle de Colchagua','Reserva Nacional Radal Siete Tazas','Termas de Chillán','Parque Nacional Laguna del Laja','Parque Ojos del Caburgua','Feria Fluvial de Valdivia','Salto del Río Petrohué','Catedral de Mármol','Parque Nacional Torres del Paine']

var imagen=[
    'https://mayurutour.com/wp-content/uploads/2020/01/Chile-Arica-Azapa-Valley.jpg',

    'http://www.revistadeeducacion.cl/wp-content/uploads/2019/08/Foto1_Humberstone_ok-1024x768.jpg',

    'https://www.diarioantofagasta.cl/wp-content/uploads/2021/09/San-Pedro-De-Atacama-1068x713.jpg',

    'https://www.gochile.cl/fotos/header/2943-bahia-inglesa-matias-daza.jpg',

    'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/0f/99/bf/photo0jpg.jpg?w=800&h=-1&s=1',

    'https://recorridoblogprod.s3-sa-east-1.amazonaws.com/assets/2015/05/La-Sebastiana-Jack-Zalium.jpg',

    'https://images.adsttc.com/media/images/571e/7c50/e58e/ce48/d400/000b/slideshow/Memory_Human_Rights_Museum_20.jpg?1461615688',

    'https://storage.googleapis.com/chile-travel-newsite-static-content/2021/03/Vina-casa-silva-los-lingues-ID123-1024x540-1.jpeg',

    'https://www.ingenieria.utalca.cl/Repositorio/iKY8PlACEOIvpRLjkO4w8Qb3YIUfbo/Siete%20Tazas%208.jpg',

    'https://www.chillanhouse.cl/wp-content/uploads/2020/01/termas-de-chillan-915x619.jpg',

    'https://assets.tvu.cl/2020/11/Parque-Laguna-del-Laja-850x500.jpg',

    'https://www.gochile.cl/fotos/header/107443-105915-105610-14700791_1254267347978399_2625816188240095663_o.jpg',

    'https://www.monumentos.gob.cl/sites/default/files/styles/slide_monumentos/public/image-monumentos/zt_01184_2017_tf_001_2.jpg?itok=xsJXUWlQ',

    'https://www.viajesylugares.com/images/showid2/4490889?w=1200&zc=4',

    'https://visitchile.imgix.net/destinos/4447_Capillas_de_Marmol.jpg?w=960&h=448&fit=crop&q=auto&auto=format',

    'https://www.gochile.cl/fotos/full/64494-istock_000044328830_medium@2x.jpg',
]


var contenedorRegiones = document.getElementById("contenedor")
contenedorRegiones.style.display='none'

function dentro(index){
contenedorRegiones.style.display='block';
document.getElementById('nameRegion').innerText='Región: '+ regionesNumeros[index]
document.getElementById('atractivos').innerText='Atractivos: '+ regionesAtractivos[index]
console.log(regionesAtractivos[index])
document.getElementById('fotos').setAttribute('src',imagen[index])
} 

function fuera(index){
    contenedorRegiones.style.display='none'

    console.log(regionesAtractivos[index])
    }


