const myInterface = ()=>{
    interface Person {
        name: string;
        age: number;
        email: string;
    }
    interface Employee extends Person {
        position: string;
        salary: number;
    }
    const employee1: Employee = {
        name: "John Doe",
        age: 30,
        email:"hdhhh",
        position: "Software Engineer",
        salary: 60000
    };
    console.log("this is interfaces")
    console.log(`type of employee1 is ${JSON.stringify(employee1)}`)

}

export default myInterface