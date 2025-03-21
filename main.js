//Bucles for
//Ejercicio 1.1: Imprime los números del 1 al 10 usando for.
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//Ejercicio 1.2: Imprime los números pares entre 0 y 20 usando for y una condición if.
for (let i = 0; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Ejercicio 1.3 (Desafío): Crea un triángulo con asteriscos usando bucles anidados:
let lines = 5;
for (let i = 1; i <= lines; i++){
    console.log('*'.repeat(i));
}

//2. Recorrer arreglos
//Ejercicio 2.1: Dado el array [3, 7, 2, 9, 5], calcula su suma usando for o for...of.
let array = [3, 7, 2, 9, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
console.log(sum)

//Ejercicio 2.2: Encuentra el número mayor en el array [12, 45, 6, 89, 23].
let array1 = [12, 45, 6, 89, 23];
let major = array1.sort((a , b) => b - a) [0];
console.log(major);

//Ejercicio 2.3: Filtra los números menores a 10 del array [15, 3, 8, 12, 1] y crea un nuevo array.
let arrayy = [15, 3, 8, 12, 1];
let minor10 = arrayy.filter(num => num < 10);
console.log(minor10)

//3. Arrow Functions
//Ejercicio 3.1: Convierte esta función a arrow function
//function sumar(a, b) { return a + b;}
const summ = (a , b) => a + b


//Ejercicio 3.2: Crea una arrow function que reciba un número y devuelva su cuadrado.
const square = num => num * num;


//Ejercicio 3.3 (Desafío): Usa una arrow function con map() para duplicar los valores del array [2, 4, 6].
let arraay = [2, 4, 6];
let double = arraay.map(num => num * 2);
console.log(double);

//4. Formato JSON
//Ejercicio 4.1: Crea un objeto JavaScript que represente un libro (con título, autor y año) y conviértelo a JSON.
let libro = {title: "Mars and Venus in love", autor: "Jonh Gray", year: 1996}; 
let libroJSON = JSON.stringify(libro);
console.log(libroJSON)

//Ejercicio 4.2: Dado el JSON '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}', conviértelo a objeto y muestra la edad.
let jsonStringy = '{"nombre": "Ana", "edad": 30, "ciudad": "Madrid"}';
let object =  JSON.parse(jsonStringy)
console.log(object.edad)

//Ejercicio 4.3: Parsea el JSON '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' y lista los productos.
let productsJSON = '[{"id": 1, "producto": "Lápiz"}, {"id": 2, "producto": "Borrador"}]' ;
let products = JSON.parse(productsJSON);
products.forEach(p => console.log(p.products));

//5. Try Catch Finally
//Ejercicio 5.1: Escribe una función que divida dos números. Usa `try...catch` para manejar división por cero.
const divide = (a , b) => {
    try {
        if (b === 0) throw new Error("No es posible dividir entre cero");
        return a / b;
    } catch (error){
        console.log(error.message)
    }
};


//Ejercicio 5.2: Crea un bloque donde intentes acceder a una variable no definida y captura el error.
try{
    console.log(noDefine);
}catch (error) {
    console.error("Error capturado:", error.message)
}

//Ejercicio 5.3 (Desafío): Usa try...catch...finally para asegurar que un mensaje se imprima siempre, haya error o no.
try {
    let result = 100/ 10
    console.log ("Resultado:". result);
}catch (error) {
        console.error("Ocrrió un error;". error.message);
    }finally {
        console.log("Este mesnaje siempre se imprimirá")
    }


//6. Async Await
//Ejercicio 6.1: Crea una función `esperarSegundos(segundos)` que use `setTimeout` con `async/await`.
const waitSeconds = async(seconds) => {
    await new Promise(resolve => setTimeout(resolve , seconds * 1000));
    console.log(`Pasaron ${seconds} segundos}`);
};

//7. Fetch
//Ejercicio 7.1: Usa `fetch()` para obtener datos de la API `https://jsonplaceholder.typicode.com/users` y muestra los nombres.
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => users.forEach(user => console.log(user.name)))
    .catch(error => console.error("Error al obtener datos:", error));