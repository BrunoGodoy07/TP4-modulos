import url from 'url';

function parsearUrl2(urlStr) {
  try {
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
  } catch (err) {
    console.error("Error al parsear URL:", err.message);
  }
}

export default parsearUrl2