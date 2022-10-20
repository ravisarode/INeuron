/*pattern Program*/
let n = 4; // height of pattern
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
  }
  string += "\n";
}
console.log(string);


let number = 153

/* Given Number is Armstrong or not*/

function Amstrong(number){
  var flag, number,remainder,addition=0
  

  flag = number
  while(number>0){
    remainder = number%10;
    addition =addition+ remainder*remainder*remainder;
    number = parseInt(number/10)
  }
  if(addition===flag){
    console.log("Given Number is Armstrong")
  }
  else{
    console.log("Given Number is not Armstrong")
  }
}
Amstrong(154)

/** Given Number  is Special Number or not */
number = 176
num=number
sum_of_fact =0

while(number>0){
  last_digit=number%10;
  fact =1;
  for(i=1;i<=last_digit;i++){
    fact=fact*i
  }
  sum_of_fact=sum_of_fact+fact;
  number=number/10
}

if(num==sum_of_fact){
  console.log(num,"is Special number")
}
else{
  console.log(num,"is not Special number")
}