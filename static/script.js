function enviarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    const clave = document.getElementById("clave").value;

    if (!mensaje || !clave) {
        alert("Por favor, ingresa un mensaje y una clave secreta.");
        return;
    }

    const cifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();

    document.getElementById("salida").innerText = cifrado;
    document.getElementById("mensaje").value = '';  
}

function descifrarMensaje() {
    const mensajeCifrado = document.getElementById("mensajeCifrado").value;
    const clave = document.getElementById("clave").value;
SZ
    if (!mensajeCifrado || !clave) {
        alert("Por favor, ingresa un mensaje cifrado y la clave secreta.");
        return;
    }

    const bytes = CryptoJS.AES.decrypt(mensajeCifrado, clave);
    const descifrado = bytes.toString(CryptoJS.enc.Utf8);

    if (!descifrado) {
        alert("Clave incorrecta o mensaje no válido.");
        document.getElementById("mensajeDescifrado").innerText = "Error al descifrar el mensaje.";
    } else {
        document.getElementById("mensajeDescifrado").innerText = descifrado;
        document.getElementById("mensajeCifrado").value = '';  
    }
}
