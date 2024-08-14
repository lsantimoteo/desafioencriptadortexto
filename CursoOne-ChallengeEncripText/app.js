let ultimaAccion = "";

function encriptar() {
    let textoUsuario = document.getElementById("textoUsuario").value;

    let textoUsuarioEncrip = textoUsuario.replace(/a/g, "ai")
                                        .replace(/e/g, "enter")
                                        .replace(/i/g, "imes")
                                        .replace(/o/g, "ober")
                                        .replace(/u/g, "ufat");
    document.getElementById("textoUsuarioEncrip").textContent = textoUsuarioEncrip;

    ultimaAccion = "Encrip";
}

function desencriptar() {
    let textoUsuario = document.getElementById("textoUsuario").value;

    let textoUsuarioDesencrip = textoUsuario.replace(/ai/g, "a")
                                        .replace(/enter/g, "e")
                                        .replace(/imes/g, "i")
                                        .replace(/ober/g, "o")
                                        .replace(/ufat/g, "u");
    document.getElementById("textoUsuarioDesencrip").textContent = textoUsuarioDesencrip;

    ultimaAccion = "Desencrip";
}

function copiar() {
    let textoUsuarioTemp = "";

    if (ultimaAccion === "Encrip") {
        textoUsuarioTemp = document.getElementById("textoUsuarioEncrip").textContent;
    } else if (ultimaAccion === "Desencrip") {
        textoUsuarioTemp = document.getElementById("textoUsuarioDesencrip");
    } else {
        alert("Aun no hay texto para copiar");
        return;
    }

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textoUsuarioTemp;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
}

function limpiaFormulario() {
    document.getElementById("textoUsuario").value = "";

    document.getElementById("textoUsuarioEncrip").textContent = "";
    document.getElementById("textoUsuarioDesencrip").textContent = "";

    ultimaAccion = ""

}