import fs from "fs"

function copiar(origen, destino) {
  fs.copyFile(origen, destino, (err) => {
    if (err) {
      console.error("Error al copiar:", err.message);
    } else {
      console.log(`Archivo copiado de ${origen} a ${destino}`);
    }
  });
}

export default copiar