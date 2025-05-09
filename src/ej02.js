import { PI, sumar, restar, multiplicar, dividir }from "./modules/matematica.js";

const mostrarCuentas = (n1,n2) =>{
    console.log("PI:", PI);
    console.log("Suma:", sumar(n1, n2));
    console.log("Resta:", restar(n1, n2));
    console.log("Multiplicación:", multiplicar(n1, n2));
    console.log("División:", dividir(n1, n2));
}

export default mostrarCuentas