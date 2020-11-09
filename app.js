document.addEventListener('DOMContentLoaded', () => {

    const codigo_usuario = document.getElementById('codigo_usuario');
    const mostrar_codigo = document.getElementById('mostrar_codigo');
    const btprobar = document.getElementById('probar');
    //const codigo_cifrado = document.getElementById('codigo_cifrado');
    //const mostrar_codigo_descrifrado = document.getElementById('mostrar_codigo_descrifrado');
    //const btdescifrar = document.getElementById('descifrar');

    codigo_usuario.focus();
    btprobar.addEventListener('click', () => {
        if(codigo_usuario.value) {
            const hash = CryptoJS.MD5(codigo_usuario.value);
            mostrar_codigo.innerText = hash;
        } else
            mostrar_codigo.innerText = 'Ingrese algo';
            codigo_usuario.focus();
    });

    
});