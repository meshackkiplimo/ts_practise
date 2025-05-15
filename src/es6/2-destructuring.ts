const Destructuring = () => {
  // destructuring
  const person = {
    name: "John",
    age: 30,
    address: {
      city: "New York",
      zip: "10001"
    }
  };
    const { name, age } = person;
    console.log(name); // John
    console.log(age); // 30
    const { city, zip } = person.address;
    console.log(city); // New York
    console.log(zip); // 10001
    const numbers = [1, 2, 3, 4, 5];
    const [first, second, ...rest] = numbers;
    console.log(first); // 1
    console.log(second); // 2
    console.log(rest); // [3, 4, 5]
    

}

export default Destructuring;