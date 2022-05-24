class Vehicle {
    private brandName: string;
    private model: string;
    private color: string;
    constructor(brandName: string, model: string, color: string) {
        this.brandName = brandName;
        this.color = color;
        this.model = model;
    }
    drive() {
        console.log(`estas conduciendo un ${this.brandName}, modelo ${this.model}, de color ${this.color}`)
    }
}


const vehicle = new Vehicle('mazda', 'sedan', 'azul')
//vehicle.drive();
//console.log(vehicle)

//otra manera de declararun constructor con sus atributos
abstract class Vehicle2 {
    constructor(
        protected readonly marca: string,
        private readonly modelo: string,
        private readonly tono: string,
        private price: number
    ) { }
    get getPrice() {
        return `el precio es ${this.price}`;
    }
    set setPrice(value: number) {
        this.price = value;
    }
    drive() {
        console.log(`conduciendo un ${this.marca} modelo ${this.modelo} de color ${this.tono}`)
    };

}

class Car extends Vehicle2 {
    drive(): void {
        console.log(`estoy conduciendo un auto ${this.marca}`)
    }
}
const vehiculo = new Car('jeep', 'camioneta', 'blanco', 200)
console.log(vehiculo.getPrice);
vehiculo.setPrice=500;
console.log(vehiculo.getPrice);
vehiculo.drive();