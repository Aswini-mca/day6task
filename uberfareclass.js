//4.write a class to calculate the uber price.

class uber{
    constructor(n,a,km){
        this.customerName=n;
        this.area=a;
        this.distance=km;
        this.basefare=10
    }
    farecalculation(){
   console.log (`The total fare for ${this.customerName} is ${this.basefare*this.distance}`)
    }
}
const customer1 = new uber("Abc","guindy",30)
const customer2 = new uber("Def","velachery",20)
const customer3 = new uber("Ghi","taramani",15)
console.log(customer1,customer2)
customer1.farecalculation();
customer2.farecalculation();
customer3.farecalculation();