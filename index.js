const readlineSync = require("readline-sync");
//data
const currencies = [1,2,5,10,20,50,100,500,2000]
const output = [0,0,0,0,0,0,0,0,0]

//input
function getAmt(){
  let billAmt;
  billAmt = readlineSync.question("Enter bill amount : ");
  return billAmt;
}
let billAmt = getAmt();
//processing 

//output
console.log(billAmt);