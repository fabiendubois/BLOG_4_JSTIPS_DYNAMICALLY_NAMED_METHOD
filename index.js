// class Example {

//     constructor(functionName) {
//         this[functionName]();
//     }

//     foo() {
//         console.log("bar");
//     }
// }

// let example = new Example("foo");

let cat = {
    name: "Felix",
    sayMiaou: function () {
        console.log('Miaaouu');
    }
}

console.log(cat);
cat.sayMiaou();
