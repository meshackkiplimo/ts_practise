const unionIntersection =()=>{

    type StringOrNumber = string | number;
    type StringOrBoolean = string | boolean;

    const value1: StringOrNumber = 42;
    const value2: StringOrNumber = "Hello";
    const value3: StringOrBoolean = true;
    const value4: StringOrBoolean = "World";
    
    console.log(`value1 is of type: ${typeof value1}`);
    console.log(`value2 is of type: ${typeof value2}`);



    type Person = {
        name: string;
        age: number;
    };
    type Employee = {
        employeeId: number;
        position: string;
    };
    type EmployeeDetails = Person & Employee;
    const employee: EmployeeDetails = {
        name: "John Doe",
        age: 30,
        employeeId: 12345,
        position: "Software Engineer"
    };
    console.log(`employee details: ${JSON.stringify(employee)}`);

}

export default unionIntersection;