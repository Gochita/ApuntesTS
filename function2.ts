function imprimir2(
    a: number,
    b: number,
    mostrar: (value: number) => void
): void {
    let resultado = a + b;
    mostrar(resultado);
}
imprimir2(2, 9, (x) => { console.log(x) })