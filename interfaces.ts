enum Role{
    Doctor,
    Anestesiologo,
    Asistente,
    Administrativo
}
interface Staff{
    name:string,
    email:string, 
    role:Role
}
const medico={
    name:"Evelyn",
    email:"evelyn@gmail.com",
    role:Role.Doctor
}

const printStaff= (staff: Staff)=>{
    console.log(staff)
}

//printStaff(medico)

interface Billable{
    total:number,
    currentBill():string
}
const fac ={
    total:40,
    currentBill(){
        return `El valor actual de la factura es de ${this.total}`;
    }
}
 const printCurrentBill= (bill: Billable)=>{
     console.log(bill.currentBill())
 }

 printCurrentBill(fac);
