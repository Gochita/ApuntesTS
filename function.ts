
//manera de restringir el tipo de dato que una funcion
//va a retornar ------>
function sumar(valor: number, valor2: number): number {
    return valor + valor2;
}

const sumar2 = (valor: number, valor1: number) => {
    //con el return infiere que la funcion retorna un tipo number
    return valor + valor1
    //si eliminamos el return infiere que la funcion es de tipo void
}

//puntero 
let sumar3= sumar;


const dividir = function (a: number, b: number): number {
    return a / b;
}

function imprimir(): void {
    console.log(sumar(2, 6));
}


//funcion de tipo never, nunca se va a retornar nada
const throwError = (message: string) => {
    throw new Error(message);
};


const throwError2 = (message: string) => {
    if (!message) {
        throw new Error(message);
    }
    return message;

};


//imprimir();
console.log(sumar3(3,4))

