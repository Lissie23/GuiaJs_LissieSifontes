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