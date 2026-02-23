const user = {
    a : 1,
    b : 4,
    c : 6,
    d : 10
}

for(const[key, value] of Object.entries(user)) {
    console.log(`key is ${key} and value is ${value}`)
}

let i = 0;
// for(i=0;i<10;i++) {

// }
// console.log(user.b); // 4

if(user.f) {
    console.log("Print")
}
else {
    user.f = 1
}

console.log(user.f) 

