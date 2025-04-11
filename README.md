# 💻 Trabajo Práctico - DAI TP01 - Node

---

## 🎯 Objetivo

Crear una aplicación en Node.js, con varios archivos, cada uno con una problemática a resolver.  
Modificar el archivo `package.json` en la parte de `scripts` para que se pueda ejecutar cada uno de los programas por separado.

---

## 📂 Nueva funcionalidad

Crear una app que contenga los siguientes archivos con la funcionalidad que se especifica:

---

### 🧪 EJ01 - Concatenación e Interpolación

Desarrollar una aplicación que podamos utilizar con `console.log()` haciendo pruebas con dos **strings**, concatenarlos e interpolarlos.

---

### ➕ EJ02 - Módulo Matemático

Crear un módulo matemático en:

### 🎓 EJ03 - Clase Alumno

Crear una clase `Alumno` en `/src/models/alumno.js` que tenga dos propiedades:

- `username`
- `DNI`

Instanciar en un programa principal dos objetos y mostrarlos en la consola.

---

### 📁 EJ04 - Módulo FileSystem

Desarrollar una aplicación que utilizando el módulo interno `fs` (FileSystem) haga un programa que lea un archivo y lo escriba con otro nombre.  
Desarrollarlo en forma de función.

**Ejemplo de uso:**

```javascript
copiar("./entrada.txt", "./salida.txt");
```
### 🌐 EJ05 - Función `parsearUrl(url)`

Desarrollar una aplicación que, utilizando el módulo interno `url`, invoque a una función llamada `parsearUrl(url)`.  
Esta función, dada una URL, debe retornar un objeto con las siguientes propiedades:

```json
{
  "host": "",
  "pathname": "",
  "parametros": ""
}
```

#### 📌 Ejemplo de uso
```
let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto);
```

#### 💻 Salida por consola

```
{
  "host": "http://www.ort.edu.ar:8080",
  "pathname": "/alumnos/index.htm",
  "parametros": {"curso": "2022", "mes": "mayo"}
}
```


### ⚠️ EJ06 - Manejo de Excepciones

Modificar el ejercicio anterior para que, en caso de que dentro de la función `parsearUrl(url)` se produzca una excepción (por ejemplo, si la URL está mal formada), se muestre la excepción en la consola.

📌 Recordá usar la estructura `try/catch`.

```
try {
  let objeto = parsearUrl("url-malformada");
  console.log(objeto);
} catch (error) {
  console.error("Se produjo un error:", error.message);
}
```


### 🌍 EJ07 - Moneda por País

Realizar un programa que, utilizando una biblioteca existente, implemente una función que reciba el código de un país y devuelva el nombre de la moneda que se utiliza.

#### 📌 Ejemplo de uso

```markdown
let moneda = obtenerMoneda("AR");
console.log(moneda);
```

#### 💻 Salida por consola
```
"Peso Argentino"
```


## Instalación de Dependencias

Para ejecutar este proyecto correctamente, necesitas instalar las dependencias necesarias utilizando npm (Node Package Manager). A continuación se detallan los pasos para instalar las dependencias del proyecto.

### Paso 1: Inicializar un proyecto de Node.js

```
npm init -y
```

Esto creará un archivo `package.json` en tu proyecto.

### Paso 2: Instalar las dependencias necesarias

Las dependencias necesarias para este proyecto son:

- `country-data`: Paquete para trabajar con información de países.
- `currency-codes`: Paquete para obtener información sobre monedas.

Ejecuta el siguiente comando:

```bash
npm install country-data@^0.0.31 currency-codes@^2.2.0
```

### Paso 3: Verificar la instalación

El archivo `package.json` debería incluir:

```json
"dependencies": {
  "country-data": "^0.0.31",
  "currency-codes": "^2.2.0"
}
```

### Paso 4: Ejecutar los scripts

Podés ejecutar los diferentes scripts con el comando `node`. Por ejemplo:

```bash
node index.js
```

También podés agregarlos en la sección "scripts" del `package.json`:

```json
"scripts": {
  "ej01": "node src/ej01.js",
  "ej02": "node src/ej02"
```
