/*Class-Movie
a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
    a String representing the studio, and a String representing the rating as its arguments,
    and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument,
and returns a new array of only those movies in the input array with a rating of "PG".
You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
the studio “Eon Productions”, and the rating “PG­13”

*/

class Movie{
    constructor(t,s,r){
       this.title=t;
       this.studio=s;
       this.rating=r; //default PG
    }
    getPG(){
        return this.rating="PG"
    }
}
const movie1 = new Movie("Avenger","Marvel")
const movie2 = new Movie("Avathor","Marvel","PG13")
const movie3 = new Movie("Antman","Marvel")
const movie4 = new Movie("Casino Royale","Eon Productions","PG13")
movie1.getPG()
movie3.getPG()
console.log(movie1)
console.log(movie2)
console.log(movie3)
const getPG=[movie1,movie2,movie3,movie4]
for(let i=0;i<getPG.length;i++){
    if(getPG[i].rating=="PG"){
        console.log(getPG[i].title)
    }
}
console.log(movie4)