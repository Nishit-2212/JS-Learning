
// console.log(typeof 10)
// console.log("JS".length)
// console.log("5" + 2 - 1);

// console.log(typeof [])
// console.log([] + []);
// console.log(typeof {})
// console.log([] + {}); 
// console.log([] == false);
// console.log([] === false);

// let a = 10;
// let b = "10";
// console.log(a == b, a === b);


// let arr = [1, 2, 3];
// console.log(arr.push(4));
// console.log(arr);


// function test() {
//   console.log(x);
//   var x = 5;
// }
// test();


//Shallo copy
// let obj = { a: 1 };
// let obj2 = obj;
// obj2.a = 5;
// console.log(obj.a);


//Deep copy
// let obj = { a: 1 };
// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.a = 5
// console.log(obj.a);



// const user = {
//   name: "JS",
//   getName() {
//     return this.name;
//   }
// };
// console.log(user.getName());
// console.log(user.name)


// let x = 10;

// (function () {
//   console.log(x);
//   let x = 20;
// })();


// let x = 10
// {
//     console.log(x)
// }


// const obj = {
//   a: 10,
//   b: function () {
//     console.log(this.a);
//   }
// };
// // obj.b()

// const fn = obj.b;
// fn();


// function sum(a, b) {
//   return
//   a + b;
// }
// console.log(sum(2, 3));


// let arr = [6, 7, 8];
// arr.length = 0;
// console.log(arr)

// console.log(typeof NaN);



// Q1. What will be the output?
 
// console.log(typeof 10);   // number
// console.log("JS".length); // 2
// console.log("5" + 2 - 1); // 51

// console.log([] + []);       // (blank)
// console.log([] + {});       // (object Object)
// console.log([] == false);   //true
// console.log([] === false);  //false



// Q2. What will be printed?

// let a = 10;
// let b = "10";
// console.log(a == b, a === b); // true, false




// Q3. Predict the output:
 
// let arr = [1, 2, 3];
// console.log(arr.push(4)); //4 
// console.log(arr);         // [1, 2, 3, 4]



// Q5. What will be logged?

// function test() {
//   console.log(x);
//   var x = 5;
// }
// test();    // undefined


// Q6. Output?

// let obj = { a: 1 };
// let obj2 = obj;      // shallow copy
// obj2.a = 5;
// console.log(obj.a); // 5 


// Q7. What will this print?
 
// const user = {
//   name: "JS",
//   getName() {
//     return this.name;
//   }
// };
// console.log(user.getName());   // JS



// Q8. Predict the output:

// let x = 10;
// (function () {
//   console.log(x);    // Error (bcz let cannot be re-declare)
//   let x = 20;
// })();



// Q9. Output?

// const obj = {
//   a: 10,
//   b: function () {
//     console.log(this.a);
//   }
// };
// const fn = obj.b;
// fn();                  //undefined (bcz this refers current object and it didn't find)



// Q10. What does this return?

// function sum(a, b) {
//   return
//   a + b;
// }
// console.log(sum(2, 3));   // undefined (bcz it return first and then calculate)



// Q11. What is printed?

// let arr = [1, 2, 3];
// arr.length = 0;
// console.log(arr);     // 0 


// Q12. What will be the output?

// console.log(typeof NaN);   //number





const user = {
  name: "JS",

  fn : function() {
    // console.log(this.name)
    return this.name
  }
};

// console.log(user.fn.call({name:"Nishit"})); 

console.log(user.fn())
// user.fn()



const user1 = {
  name: "Hello",

  fn : () => {
    // console.log(this.name)
    return this.name
  }
};

console.log(user.fn())
// user1.fn()


 