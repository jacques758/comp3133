class Customer {
    firstName: string;
    lastName: string;

    greeter(): string {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
}

let customer = new Customer();
customer.firstName = "Jacques";
customer.lastName = "Vidja";

console.log(customer.greeter());