// const promise = new Promise(function(resolve,reject) {
//     setTimeout(() => resolve("The promise is succesfully completed"),1000);

// });

// promise
//     .then((data) => console.log(data))
//     .catch((error) => console.log("something goes wrong"));

// setTimeout(promise,1000);







// const checkAge = (age) => {

//     return new Promise((resolve,reject) => {
//         if(age > 18) {
//             console.log("Resolvssed");
//             resolve("Allowed")
//         }
//         else {
//             console.log("Reject");
//             reject("Not Allowed")
//         }
//     })

// }



// butt.addEventListener("click",checkAge(tex.value))



// const butt = document.getElementById("btn1");


// const checkAge = (age) => {
//     return new Promise((resolve,reject) => {

//         if(age > 18) {
//             // console.log("Resolvssed");
//             resolve("Allowed")
//         }
//         else {
//             // console.log("Reject");
//             reject("Not Allowed")
//         }
//     })
// }


// butt.addEventListener("click",() => {

//     const tex = document.getElementById("tex").value;
//     const ans = checkAge(tex);
//     ans
//         .then((success) => console.log(success))
//         .catch((error) => console.log(error))

// })



// const promise1 = new Promise((resolve,reject) => {

//     let success = true;

//     if(success) {
//         resolve(5);
//     }
//     else {
//         reject("Something Goes Wrong")
//     }

// })

// promise1
//         .then((x) => {
//             // console.log("x");
//             return x*10;
//         })
//         .then((x) => {
//             // console.log(x);
//             return x+10;
//         })
//         .then((x) => {
//             console.log(x);
//         })



// const butto = document.getElementById("btn1");
// const tex = document.getElementById("ans");





// butto.addEventListener("click",() => {

//     console.log("clicked");
//     const ans = calculateLuck();
//     ans
//         .then((success) => tex.innerText = success)
//         .catch((error) => tex.innerText = error)  

// })


// const calculateLuck  = () => {

//     return new Promise((resolve,reject) => {
//         let rand = Math.floor(Math.random() * 10);
//         if(rand < 5) {
//             reject("Better Luck Next Time");
//         }
//         else {
//             resolve("You are Lucky");
//         }
//     })
// }




// const promise1 = new Promise((resolve, reject) => {

//     let success = true;

//     setTimeout(() => {
//         if (success) {
//             resolve(2);
//         }
//         else {
//             reject("Something Gies Wrong");
//         }
//     }, 1000)

// })

// const promise2 = (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(x+3);
//         },1000)
//     })
// }

// promise1
//     .then((x) => {
//         console.log("First Promise");
//         return x * 5;
//     })
//     .then((x) => {
//         console.log("Second Promise");
//         return promise2(x);
//         // ans
//         //     .then((success) => {
//         //         return success;
//         //     }) 
//     })
//     .then((x) => {
//         console.log("Third Promise");
//         console.log(x);
//     })
//     .catch((error) => {
//         console.log("Fourth Promise");
//         console.log(error)
//     })




// const unstableRisk = 
    
//     new Promise((resolve, reject) => {

//     let rand = Math.floor(Math.random() * 10);
//     if (rand > 8) {
//         resolve("Done.....")
//     }
//     else {
//         console.log("Retryingggg.....")
//         runwithRetry();
//     }

// })


// const runwithRetry = () => {
//     unstableRisk
//     .then((success) => console.log(success))
//     .catch((error) => console.log("error in function"))
//     // console.log("Retryinggg......")

// }

// runwithRetry()



// let maxCount = 3
// let count = 0;

// const unstableRisk = () => { 
    
//     return new Promise((resolve, reject) => {

//     let rand = Math.floor(Math.random() * 10);
//     if (rand > 5) {
//         resolve("Done.....")
//     }
//     else {
//         reject("Retryyyinggg......")
//     }

// })}

// const runwithRetry = () => {

//     const tryy = unstableRisk();

//     tryy
//         .then((x) => console.log(x))
//         .catch((x) => {
//             console.log(x);
//             count++;
//             if(count < maxCount) {
//                 runwithRetry();
//             }
//             else {
//                 console.log("Reach Limit...")
//             }
            
//         })

    

// }



// runwithRetry()



const promise1 = new Promise((resolve,reject) => {
    
    let success =  false;

    if(success) {
        setTimeout(() => {
            resolve("Hello after 3 seconds")
        },3000)
    }
    else {
        reject("Something Goes Wrong in promise 1")
    }
})

const promise2 = new Promise((resolve,reject) => {
    
    let success =  true;

    if(success) {
        setTimeout(() => {
            resolve("Hello after 1 seconds")
        },1000)
    }
    else {
        reject("Something Goes Wrong in promise 2")
    }
})


const promise3 = new Promise((resolve,reject) => {
    
    let success =  true;

    if(success) {
        setTimeout(() => {
            resolve("Hello after 5 seconds")
            // console.log("1")
        },1000)
    }
    else {
        reject("Something Goes Wrong in promise 3")
    }
})

Promise.allSettled([promise1,promise2,promise3])
    .then((x) => {
    console.log(x);
    console.log("All promise run successfully")
    })
    .catch((error) => {
        console.log(error)
    })