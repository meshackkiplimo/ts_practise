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

let arr1:number[] = [1,2,3,4,5]
let colors:string[] = ["red","green","blue"]
let messi: Array<number> = [1,2,3,4,5]
//array methods 
// colors.push("yellow")
// console.log(colors)
// console.log(colors.length)
// console.log(colors[0])
// colors.shift()
// console.log(colors)
// console.log(colors.length)
// colors.unshift("purple")
// console.log(colors)

// tuples
let person:[string,number] = ["John",20]
let person2:[string,number] = ["Jane",25]
let person3:[string,number] = ["Doe",30]    


}

// array methods




export default objectsArraysTuples;

