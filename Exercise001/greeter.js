class Student {
    constructor(fiestName, lastName) {
        this.firstName = fiestName;
        this.lastName = lastName;
    }
    greeter() {
        return "Hello，您好" + this.firstName + " " + this.lastName;
    }
}
var user = new Student("王", "小明");
document.body.innerHTML = user.greeter();
//# sourceMappingURL=greeter.js.map