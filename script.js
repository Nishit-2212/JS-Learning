// let value =0 ;

// function incre() {
  
//   alert("Button clicked")
// }

// let butto = document.getElementById("btn");


// butto.addEventListener("click",function()  {
//                       alert("You clicked me")
//                       });

// butto.addEventListener("click",function() {
//   document.getElementById("in").innerHTML = "Hello World";
// });


// function click() {
//     document.getElementById("in").innerHTML = "Hello World";
//     console.log("Hello")
// }


// console.log(document.getElementById("in").textContent);




// cont.addEventListener("change",function() {
//     console.log(cont.textContent);
// });


// function changed() {
//     let cont = document.getElementById("txt");
    
//     // document.getElementById("inje").innerHTML = cont.textContent;

//     console.log(cont.value);
// }

// setInterval(changed,1000);

// document.getElementById("inje").innerHTML = document.getElementById("in").textContent;


// let print = function() {
//     console.log(cont);
// }


// setInterval(print,1000) 


// const box = document.getElementById("box");

// box.addEventListener("mouseover",function() {
//     box.innerHTML = "I got you";
//     box.style.color = "red";
// })

// box.addEventListener("mouseleave",function() {
//     box.innerHTML = "Hover me.";
//     box.style.color = "blue";
// })


// const keyboard = document.getElementById("keyb");

// keyboard.addEventListener("keydown",function(event) {
//     let ch = document.getElementById("keyp");
//     ch.innerText = event.key;
// })




// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// let count = 0; 

// // console.log(count);

// let numb = document.getElementById("tex");

// plus.addEventListener("click",function() {
//     // console.log("Hello");
    
//     // console.log(numb);
//     count++;

//     if(count > 10) {
//         numb.innerText = "Limit reach";
//         count--;
//     }
//     else {
//         numb.innerText = count;
//     }
// })

// minus.addEventListener("click",function() {
    
//     // console.log(numb);
//     count--;

//     if(count < -10) {
//         numb.innerText = "Limit Reach";
//         count++;
//     }
//     else {
//         numb.innerText = count;
//     }
// })



// const box = document.getElementById("tex");
// const count = document.getElementById("coun");


// box.addEventListener("input",function() {

//     let total = box.value.length;
//     count.innerText = total;

//     if(total>20) {
//         box.style.color = "red";
//         console.log("Limit Reached")
//     }
//     else {
//         box.style.color = "green";
//     }

// })


// const them = document.getElementById("theme");
// let theme = true;

// them.addEventListener("click",function() {
//     theme = !theme;
//     if(theme) {
//         document.body.style.backgroundColor = "white";
//         them.innerText = "Black"
//     }
//     else {
//         document.body.style.backgroundColor = "black";
//         them.innerText = "White"
//     }

// })



const pass = document.getElementById("tex");
const checkbox = document.getElementById("chebox");



checkbox.addEventListener("change",function() {

    if(checkbox.checked == true) {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }

})
