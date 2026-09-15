console.log("Hola Mundo NODE");

let edad1 = 20;
let edad2 = 67;

console.log("Edad promedio: " );
console.log((edad1 + edad2) / 2);

console.log("--- Medir Procesos ---");

console.time("miProceso");
for(i=0;i<100000000;i++){}
console.timeEnd("miProceso");