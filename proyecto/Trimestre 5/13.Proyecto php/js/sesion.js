function eventListener() {

    const configurar = document.querySelector('.mostrar-config');

    configurar.addEventListener('click', configuracion);

};

function configuracion() {

    const config = document.querySelector('.configuracion')

    if (config.classList.contains('mostrar-c')) {
        config.classList.remove('mostrar-c');

    } else {

        // toggle

        config.classList.add('mostrar-c');
    }
};