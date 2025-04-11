const { countries, currencies } = require('country-data');

function obtenerMoneda(codigoPais) {
  const pais = Object.values(countries).find(p => p.alpha2 === codigoPais.toUpperCase());

  if (!pais || !pais.currencies || pais.currencies.length === 0) {
    return "País no encontrado o sin moneda.";
  }

  const codigoMoneda = pais.currencies[0];
  const moneda = Object.values(currencies).find(c => c.code === codigoMoneda);

  return moneda ? moneda.name : "Moneda no encontrada.";
}

console.log(obtenerMoneda("AR"));
console.log(obtenerMoneda("US")); 
console.log(obtenerMoneda("JP")); 
