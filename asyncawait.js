// 1.
// let printResult = async function() {
//     let get = await getResult()
//     console.log(`Your Message is ${get}`);
// }


// let getResult = () => {
//     return "Hello World"
// }


// printResult()


// 2.
// let promise = () => {
//     return new Promise((resolve,reject) => {
//         let success = false;

//         if(success) {
//                 setTimeout(() => {
//                 resolve("Hello Good Morning !");
//             },3000)
//         }
//         else {
//             reject("SOmething Goes wrong")
//         }
        
        

//     });
// }

// let getMessage = async function() {

//     try {
//         const print = await promise();
//         console.log(print)
//     }
//     catch (error) {
//         console.log(error)
//         console.log("error in async function")
//     }

//     // print.then((resolve) => console.log(resolve))
//     //     .catch((reject) => console.log(reject))

//     // console.log();
// }

// getMessage()



// 3.

// let myFail = () => {
//     return new Promise((resolve,reject) => {
//         reject("Something went wrong")
//     });
// }

// let handle = async() => {

//     try {
//         let myFailed = await myFail();
//         console.log(myFailed + " in try")
//     }
//     catch (error) {
//         console.log(error)
//     }
// }


// handle()

// 4.
// let URL = "https://jsonplaceholder.typicode.com/todos/1"


// let fetchData = async() => {
    
//     try
//     {
//         let data = await fetch(URL);
//         let convert = await data.json()
//         console.log(convert.title)
//     }
//     catch (error) {
//         console.log("Something went wrong in fetching");
//     }

// }

// fetchData()


// async function test() {
//     const x = await 42;
//     console.log(x);
// }

// test()



// 5.
// let get = () => {
//     return new Promise((resolve,reject) => {

//         let success = true;
//         if(success) {
//             setTimeout(() => resolve("second"),5000);
//         }
//         else {
//             reject("Something Goes Wrong");
//         }

//     })
// }

// let display = async() => {

//     console.log("First");
//     let result = await get();
//     console.log(result);
//     console.log("Third");

// }

// display()



// async function test() {
//     const x = await 42;
//     const y = await "Hello";
//     const z = await null;
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }

// test()


// let promise = () => {

//     return new Promise((resolve,reject) => {
//         throw "Problem in promise"
//     })

// }



// let get = async() => {

//     try {
//         let result = await promise();
//         // console.log(result);
//     }
//     catch (error) {
//         console.log(typeof error);
//     }

// }

// get()



// function wait(fs,value) {
//     return new Promise(resolve => setTimeout(() => resolve(value), fs))
// }


// let final = () => {

//     let result1 = wait(1000,"solved 1");
//     let result2 = wait(2000,"solved 2");
//     let result3 = wait(3000,"solved 2");

//     Promise.all([result1,result2,result3]).then((value) => {
//         console.log(value)
//     })
// }

// final();



// const numbers = [65, 44, 12, 4];
// numbers.forEach((item,index,arr) => {
//     console.log(item);
//     console.log(index);
//     console.log(arr[0]);
// })



// let get = () => {
//     return new Promise((resolve,reject) => {
//         let success = true;
//         if(success) {
//             setTimeout(() => resolve("DOne..."),1000)
//         }
//         else {
//             reject("Something goes wrong")
//         }
//     })
// }


let arr = [1,2,3,4,5,6,7]



// arr.forEach( async(x) => {
//     let ans = await get(x);
//     console.log(ans);
// });


// for(const data in arr) {
//     let ans =  get();
//     console.log(ans);
// }



// arr.forEach(async item => {
//   await fetchi(item); 
//   console.log(5);
// });


let fetchi = () => {
    setTimeout(() => {
        console.log("1");
    },5000)
}


async function result()  {

    for(const data of arr) {
        await fetchi(); 
        console.log(5);
    }
}


// result()



