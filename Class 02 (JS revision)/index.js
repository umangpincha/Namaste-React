const obj = {
    fn: function () {
        console.log(this);
    },
    fn2: () => {
        console.log(this); //global object
    }
}

//In normal function it takes this of its parent
obj.fn(); //obj
obj.fn2(); // window
obj.fn.call(); //window
obj.fn2.call(); //window

// const person = {
//     name: "Umang",
// }

// const person1 = {
//     name: "Umang2",
// }

// function x() {
//     console.log(this);
// }
// x.call()
// x.call(person);
// x.call(person1);