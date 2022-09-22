'use strict';
const boton_foto = document.querySelector('#btn-img');
const imagen = document.querySelector('#img');
let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'robert-proyect',
    uploadPreset: 'img_proyecto_final'
}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto.addEventListener('click', () => {
    console.log('Imagen')
    widget_cloudinary.open();
}, false);