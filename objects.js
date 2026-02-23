// const person = {
//     name : "Nishit",
//     age : 20,
//     city : "Ahmedabad",
//     fullname : function() {
//         return this.name + " " + this.age + " " + this.city;
//     },
// };

// person.fullInfo = function() {
//     return "Name:-"+this.name + " Age:-" + this.age + " City:-" + this.city;
// }

// console.log(person.fullname)
// console.log(person)
// console.log(person.fullInfo().toUpperCase())

// function isFunction(variable) {
//     return typeof variable === 'function'
// }


// let text = "";
// console.log(typeof text)
// for(let x in person) {
//     if(!isFunction(person[x])) {
//         text += person[x] + " "
//     }
    
// }

// let text = Object.values(person).toString();
// console.log(text)

// console.log(typeof person.fullname)


const person = {
    name : "Nishit",
    age : 20,
    city : "Ahmedabad",
    cn : 0,
};

// person.country = 0;
// person.country++;




// if("cn" in person) {
//     person.cn++
// }

let ans = {}
ans[person["name"]]
console.log(person)