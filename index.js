import concatenarString from "./src/ej01.js"
import mostrarCuentas from "./src/ej02.js"
import mostrarAlumnos from "./src/ej03.js"
import copiar from "./src/ej04.js"
import parsearUrl from "./src/ej05.js"
import parsearUrl2 from "./src/ej06.js"
import obtenerMoneda from "./src/ej07.js"
import Alumno from "./src/models/alumno.js"


const alumno1 = new Alumno("Martina", "12345678");
const alumno2 = new Alumno("Luciano", "87654321");



concatenarString("Bruno","Nehuen")
mostrarCuentas(4,2)
mostrarAlumnos(alumno1, alumno2)
copiar("./entrada.txt", "./salida.txt");

let url=parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(url)
let ulr2=parsearUrl2("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo")
console.log(ulr2)

let m1=obtenerMoneda("AR")
let m2=obtenerMoneda("US")
let m3=obtenerMoneda("JP")
console.log(m1)
console.log(m2)
console.log(m3)