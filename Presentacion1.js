document.addEventListener('DOMContentLoaded', (event) => {
    // Definimos los enlaces reales de la empresa.
    const ENLACES = {
        inicio: 'https://docs.google.com/forms/d/e/1FAIpQLSdEv52RfjszcEyrGwGpepqk7ES3GrrzHSpCk_teiLGWKPjAQg/viewform?usp=header',
        clientes: 'https://prchlqj9vvywckatfzsrma.on.drv.tw/Mi%20p%C3%A1gina%20wed/Credito/Creditoamigos.html',
        contacto: 'https://wa.me/qr/7SWMMC3DD6O6G1'
    };

    // Asignamos la acción (abrir en una nueva pestaña) a cada botón.
    
    // Botón Página Principal
    document.getElementById('btn-inicio').addEventListener('click', () => {
        window.open(ENLACES.inicio, '_blank');
    });

    // Botón Portal de Clientes
    document.getElementById('btn-clientes').addEventListener('click', () => {
        window.open(ENLACES.clientes, '_blank');
    });

    // Botón Contáctanos
    document.getElementById('btn-contacto').addEventListener('click', () => {
        window.open(ENLACES.contacto, '_blank');
    });
});
