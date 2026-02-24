function greet(greeting, punctuation,Ending) {
  console.log(greeting + " " + this.name + punctuation + " " + Ending);
}


const person = { name: "Alice" };

// greet.call(person, "Hello", "!","Bye");
// greet.apply(person,["Hello", "!","Bye"])


const HelloGreet = greet.bind(person,"Hello");

HelloGreet("!!!","...")

