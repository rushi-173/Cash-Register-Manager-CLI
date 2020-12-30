const readlineSync = require("readline-sync");
//data
const currencies = [1,5,10,20,100,500,2000]
const output = [0,0,0,0,0,0,0]
let billAmt,cashGiven,returnAmt;
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
  if(billAmt > cash){
  console.log("You have given less cash amount. Your total bill amount is - ",billAmt);
  cash = getCash(); 
  }
  return cash;
}

billAmt = parseInt(getAmt());
cashGiven = parseInt(getCash());
returnAmt = cashGiven - billAmt;
//processing 0
if(returnAmt == 0){
  console.log("No Amount to be returned.");
}
else{
  while(returnAmt > 0 ){
    for(i=currencies.length - 1; i>=0; i-- ){
      if(returnAmt >= currencies[i]){
        returnAmt = returnAmt - currencies[i];
        output[i] += 1;
        break;
      }
    }
  }
}


//output
