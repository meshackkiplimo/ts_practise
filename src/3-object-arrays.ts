const objectsArraysTuples= ()=>{
    const Person :{
        age:number,
        name:string,
        hobbies:string[],


    }={
        age:20,
        name:"John",
        hobbies:["reading","sports"]
    }

console.log("this is objects arrays and tuples")
console.log(`type of Person is ${typeof Person}`)
console.log(`type of Person is ${typeof Person.age}`)
console.log(`type of Person is ${typeof Person.name}`)
console.log(`type of Person is ${typeof Person.hobbies}`)




const car:{
    brand:string,
    model:string,
    year:number,
    features:string[]
    start:()=>void
} = {
    brand:"Toyota",
    model:"Camry",
    year:2020,
    features:["Air Conditioning","Navigation System"],
    start:()=>{
        console.log("Car started")
    }

}
console.log(`type of car is ${typeof car}`)
console.log(`type of car is ${typeof car.brand}`)
console.log(`type of car is ${typeof car.model}`)
console.log(`type of car is ${typeof car.year}`)
console.log(`type of car is ${typeof car.features}`)
console.log(`type of car is ${typeof car.start}`)
car.start()


}
export default objectsArraysTuples;

