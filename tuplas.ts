let automovil = ['mazda', 2020, 'negro']

//esta permitido por que no se le indico ningun tipo ---->
//automovil[0]='otro valor'

//console.log(automovil)


//esta declaración evita que se intenten insertar tipos de datos que no corresponden
//tuplas 

//Se pueden crear restricciones o tipos personalizados utilizando
//la palabra reservada type

//Si tuvieramos que crear otro tipo de vehiculo con los mismos
//tipos de datos, tendriamos que escribir estos tipos una y otra vez
//pero esto se soluciona creando un tipo y utilizandolo en cada
//una de los vehiculos que vayamos a crear
let automovil2: [string, number, string] = ['mazda', 2020, 'negro']
//los mismos tipos que usamos para el automovil2
type vehiculoType = [string, number, string];
//los llevamos a otro vehiculo pero como una constante, o tipo personalizado
let motocicleta: vehiculoType = ['pulsar', 2016, 'rosado']
console.log(motocicleta)
