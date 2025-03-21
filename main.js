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

