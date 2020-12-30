const readlineSync = require("readline-sync");
//data
const currencies = [1,5,10,20,100,500,2000]
const output = [0,0,0,0,0,0,0,0,0]
let billAmt,cashGiven;
//input
function getAmt(){
  let bill = readlineSync.question("Enter bill amount : ");
  if(isNaN(bill)){
  console.log("Invalid Input. Enter again. \n");
  bill = getAmt();                                                
  }
  return bill;
}
function getCash(){
  let cash = readlineSync.question("Enter cash given : ");
  if(isNaN(cash)){
  console.log("Invalid Input. Enter again. \n");
  cash = getCash();                                                
  }
  if(billAmt > cashGiven){
  console.log("You have given less cash amount. Your total bill amount is - ",billAmt);
  cash = getCash(); 
  }
  return cash;
}

billAmt = getAmt();
cashGiven = getCash();

//processing 


//output
console.log(billAmt);
console.log(cashGiven);