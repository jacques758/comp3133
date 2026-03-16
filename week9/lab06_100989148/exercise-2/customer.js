var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        return "Hello, ".concat(this.firstName, " ").concat(this.lastName);
    };
    return Customer;
}());
var customer = new Customer();
customer.firstName = "Jacques";
customer.lastName = "Vidja";
console.log(customer.greeter());
