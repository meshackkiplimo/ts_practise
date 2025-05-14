const specialTypes = () =>{
   
//type never
// const throwError = ():never =>{
//     throw new Error("This is an error")
// }
// throwError()

// const infiniteLoop =():never=>{
//     while(true){
//         console.log("This is an infinite loop")
//     }
// }
// throwError()

// }

let age:any = 20
age= 'twenti five'
age = true
age = 20

}


let u:undefined = undefined
let n:null = null


// void
const logMessage =(message:string)=>{
    console.log(message)
    return


}
logMessage("this is type void")



export default specialTypes