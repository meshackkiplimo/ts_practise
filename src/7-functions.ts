const myFunctions = ()=>{
    function add(x:number,y:number):number{
        return x + y
    }
   
    let result = add(2,3)
    console.log("this is functions")
    console.log(`type of add is ${result}`)


    /// optiona; parameters
    const divide =(x:number,y?:number):number=>{
        if (y){
            return x/y
        }
        return x
    }

}
export default myFunctions