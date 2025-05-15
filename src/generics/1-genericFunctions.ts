const genericFunctions = () => {
//    function getFirstElement(array:number[]){
//     return array[0]
//    }
//    const numbers = [1, 2, 3, 4, 5]
//    getFirstElement(numbers)
//    const firsNumber = getFirstElement(numbers)
//    console.log(firsNumber)


//    function getFirstElement1(array:string[]){
//     return array[0][1]
//    }
//     const strings = ["a", "b", "c", "d", "e"]
//     getFirstElement1(strings)
//     const firstString = getFirstElement1(strings)
//     console.log(firstString)

// generic functions
function getFirstElement<T>(array: T[]){
    return array[0]

}
const numbers = [1, 2, 3, 4, 5]
const firstNumber = getFirstElement(numbers)
console.log(firstNumber)

}

export default genericFunctions;