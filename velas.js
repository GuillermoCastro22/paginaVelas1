// velas.js

// Ejemplo de seguimiento de clics (opcional)
document.querySelector('.social-button[href*="wa.me"]').addEventListener('click', function() {
    console.log('Botón de WhatsApp clickeado');
});

document.querySelector('.social-button[href*="instagram"]').addEventListener('click', function() {
    console.log('Botón de Instagram clickeado');
});
function showInfo(vela) {
    const infoBox = document.getElementById("info-box");
    let infoText = '';

    switch (vela) {
        case 'cuarzoRosa':
            infoText = 'El Cuarzo Rosa es conocido como la piedra del amor. Promueve la paz, el perdón y la confianza.';
            break;
        case 'cuarzoCristal':
            infoText = 'El Cuarzo Cristal amplifica la energía y ayuda a la meditación y claridad mental.';
            break;
        case 'cuarzoAmatista':
            infoText = 'La Amatista es una piedra de protección y equilibrio emocional. Fomenta la paz interior.';
            break;
        case 'cuarzoVerde':
            infoText = 'El Cuarzo Verde es un símbolo de salud y bienestar. Atrae la buena fortuna.';
            break;
        case 'velaClasica':
            infoText = 'La Vela Clásica es perfecta para crear un ambiente acogedor y relajante en cualquier espacio.';
            break;
        default:
            infoText = '';
    }

    infoBox.textContent = infoText;
}



