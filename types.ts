//Anotacion
let vehiculo: string;
let cantidad: number;
let esAutomovil: boolean;

//Inferencia
let car: "automovil";
let quantity: 2;
let isAutomovil: true;

let persona = {
    nombre: 'Mary',
    edad: 21
}
//console.log(persona.nombre);


//otra manera de asignar
let persona2: {
    nombre: string;
    edad: number;
    direccion: {
        calle: string;
        comuna: string;
    }
}
    = {
    nombre: 'Diana',
    edad: 14,
    direccion: {
        calle: 'La salle',
        comuna: '20'
    }

}

//console.log(persona2);


let persona3 = {
    nombre: 'Anyela',
    edad: 21,
    direccion: {
        calle: 'Pariapan',
        comuna: 'San Juan'
    },
    cursos: ['Flutter', 'Patrones de diseño', 4]
};
//console.log(persona3)

//especificar el tipo del array
let hobbies: string[];
hobbies = ['leer', 'caminar', 'cocinar']
//console.log(hobbies)



for (const hobbie of hobbies) {
    console.log(hobbie.toLocaleUpperCase())
}

//recibe cualquier tipo de dato
let otroarray: any[];

otroarray = [1, 'leer', 2,'caminar',3, 'cocinar', 4]
