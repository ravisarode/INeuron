function leapornot(year){
    // let year ;

    if ((year%4===0  && year%100 !==0) || (year%400 ===0)){
        console.log(`${year} is  a leap Year`)
    }
    else{
        console.log(`${year} is  not a leap Year`)
    }
}

leapornot(12)

function temparature(value){
    Result1 = ((value-32)/9)*5
    Result2 = value*(9/5)+32
console.log(`${value} Celsius to Fahrenheit is ${Result2}`)
console.log(`${value} Fahrenheit to Celsius is ${Result1}`)

}

temparature(45)
//temparature(60)

function factorial(n){
    let answer =1;
    if(n ==0|| n == 1){
        return answer;
    }
    else{
        for(var i=n; i>=1 ;i--){
            answer=answer*i;
        }
        console.log(`The factorial of ${n} is ${answer}`)
    }
}

factorial(4)