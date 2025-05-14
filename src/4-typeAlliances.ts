const typeAlliances = () => {

    type Person ={
        name:string,
        age:number,
        hobbies:string[]
    };
    type Employee = Person & {
        salary:number,
        position:string
    };
    const employee: Employee = {
        name: "John",
        age: 30,
        hobbies: ["reading", "sports"],
        salary: 50000,
        position: "Software Engineer"
    };
    console.log("this is type alliances")
    console.log(`type of employee is ${typeof employee}`)
    console.log(`employee details: ${JSON.stringify(employee)}`)
    
}

export default typeAlliances;