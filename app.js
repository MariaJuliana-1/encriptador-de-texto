function mostrarResultado() {
  document.querySelector('.mensajeInicial').style.display = 'none';
  document.querySelector('.mensajeEncriptado').style.display = 'flex';
  document.querySelector('.boton_copiar').addEventListener('click', copiar);
}

function copiar() {
  let outputText = document.getElementById("output").innerText;
  navigator.clipboard.writeText(outputText);
}

function usuarioEncripta() {
  let text = document.getElementById("inputText").value.toLowerCase();
  let encriptado = text.replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/a/g, "ai")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat");
  document.getElementById("output").innerText = encriptado;
  mostrarResultado(); 
}

function usuarioDesencripta() {
  let text = document.getElementById("inputText").value;
  let desencriptado = text.replace(/enter/g, "e")
                          .replace(/imes/g, "i")
                          .replace(/ai/g, "a")
                          .replace(/ober/g, "o")
                          .replace(/ufat/g, "u");
  document.getElementById("output").innerText = desencriptado;
  mostrarResultado(); 
}
