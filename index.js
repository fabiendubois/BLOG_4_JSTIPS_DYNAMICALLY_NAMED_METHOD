class Example {

    constructor(functionName) {
        this[functionName]();
    }

    foo() {
        console.log("bar");
    }
}

let example = new Example("foo");
