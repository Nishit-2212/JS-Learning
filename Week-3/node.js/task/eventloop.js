setTimeout(() => {
  console.log("1");
 
  setTimeout(() => console.log("2"), 0);
  setImmediate(() => console.log("3"));
 
  Promise.resolve().then(() => console.log("4"));
  process.nextTick(() => console.log("5"));
}, 0);
 
setImmediate(() => {
  console.log("6");
 
  setTimeout(() => console.log("7"), 0);
  Promise.resolve().then(() => console.log("8"));
});
 
console.log("9");
 