//3.Write a “person” class to hold all the details.

class person{
    constructor(n,d,deg,c) {
this.name=n;
this.dob=d;
this.degree=deg;
this.city=c
 }
age() 
{
    return 2023-this.dob;
}
    
}
const person1= new person("Abc",1998,"BSC","chennai")
const person2= new person("Def",2000,"MCA","madurai")
const person3= new person("Ghi",2003,"MSC","trichy")
console.log(person1)
console.log(person2.name)
console.log(person3.age())
