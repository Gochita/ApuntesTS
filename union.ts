type StringOrNumber= string | number;

function padLeft(value:string,padding:StringOrNumber){
    if(typeof padding === 'number'){
        return Array(padding + 1).join('  ')+value;
    }
    if(typeof padding === 'string'){
        return padding+value;
    }
    throw new Error(`Espera un string pero recibi '$(padding)'`)
}
console.log(padLeft('Hola mundo',50));