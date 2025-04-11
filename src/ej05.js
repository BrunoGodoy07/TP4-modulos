const url = require('url');

function parsearUrl(urlStr) {
  const objUrl = new url.URL(urlStr);
  const parametros = {};
  
  for (const [key, value] of objUrl.searchParams.entries()) {
    parametros[key] = value;
  }

  return {
    host: `${objUrl.protocol}//${objUrl.host}`,
    pathname: objUrl.pathname,
    parametros: parametros
  };
}

const resultado = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(resultado);
