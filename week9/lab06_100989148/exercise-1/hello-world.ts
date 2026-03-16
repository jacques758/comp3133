let greeter = (firstName: string, lastName: string): string => {
    return `Hello, ${firstName} ${lastName}`;
};

let firstName: string = "Jacques";
let lastName: string = "Vidja";

console.log(greeter(firstName, lastName));