// 1.
// function sum (a,b,callBack) {
//     let result = a+b;
//     callBack(result);
// }

// function printResult(res) {
//     console.log(res)
// }

// sum(1,2,printResult)



// 2.
// function message(mess,callBack) {

//     setTimeout(() => {
//         callBack(mess);
//     },2000)

// }

// function print(mess) {
//     console.log(mess);
// }

// message("Hello",print)



// Dought
function passElements(array,callBack) {

    // for(let x of array) {
    //     setTimeout( () => {
    //          callBack(x);
    //     },3000)
    //     // console.log("Hello")
    // }

    // let timerOut = function timer(data){
    //     setTimeout( () => {
    //          callBack(data);
    //         //  console.log(index)
    //     },1000)
        
    // };

    array.forEach((data,index) => {
        setTimeout( () => {
             callBack(data);
            //  console.log(index)
        },index * 1000)
    })

}

// let timer;

// function timeOut(func,delay){
    
//     return function (...args) { clearTimeout(timer)
//             setTimeout( () => {
//             // callBack();
//             func(args)
//             //  console.log(index)
//         },delay)
//     }
// }

// timeOut(passElements,1000)


function print(Element) {
    console.log(Element)
}


let arr = [4,5,6,7,8,9]
passElements(arr,print)



// function* numberGenerator(n) {

//     for(let i=0;i<n;i++) {
//         yield i
//     }
//     return "Dhgjj"
// }

// let call = numberGenerator(2);

// console.log(call.next())
// console.log(call.next())
// console.log(call.next())
// console.log(call.next())
// console.log(call.next())
// console.log(call.next())



function passElements(array,callBack) {

    array.forEach((x)=> {
        callBack(x)
    })

}


function print(x){
    console.log(x)
}

function timeOut(func,delay){
    let timer;
    
    return function (...args) { 
        clearTimeout(timer)
            timer = setTimeout( () => {
            console.log(...args)
            func(...args)
        },delay)
    }
}


const temp = timeOut(()=>{
    passElements(arr,print)
},1000);
temp()