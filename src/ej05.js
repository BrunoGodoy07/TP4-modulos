import url from 'url';

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


export default parsearUrl