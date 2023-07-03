//2.Convert the UML diagram to Typescript class. - use number for double

class circle{
    constructor(){
        this.radius=1.0;
        this.color="red"
    }
getradius(){
return this.radius
}
setradius(r){
return this.radius= r
    }
getcolor(){
return this.color
}

setcolor(c){
return this.color= c
}
getarea(){
console.log(`Area of circle: ${3.14*this.radius*this.radius}`)
}
getcircumference(){
    console.log(`Area of circumference: ${3.14*this.radius*this.radius}`)
}
}


const circle1= new circle()
console.log(circle1)
console.log(circle1.getradius());
circle1.setradius(2)
console.log(circle1.getcolor());
circle1.setcolor("blue")
console.log(circle1)
circle1.getarea();
circle1.getcircumference();