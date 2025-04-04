//Desarrollar una aplicación que podamos utilizar es el console.log() haciendo pruebas con dos strings, concatenarlos e interpolárlos.

const concatenarString = (string1, string2) =>  {
   let concatenado = (string1+string2)
   let interpolado = (`${string1} ${string2}`)
   console.log(concatenado)
   console.log(interpolado)
}

export default concatenarString