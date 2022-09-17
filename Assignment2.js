//Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene
function Triangle(a,b,c){
    // Check for equilateral triangle
    if(a===b && b===c && c===a){
        console.log("Triangle is equilateral")
    }
    // Check for isosceles triangle
    else if(a===b || b===c || c===a){
        console.log("Triangle is isosceles")
    }
    // Otherwise scalene triangle
    else {
        console.log("Triangle is scalene")
    }
}
Triangle(10,10,10)
Triangle(10,10,9)
Triangle(10,9,8)

//switch case to find the grade of a student based on marks obtained
function Grade(value){

    switch (true)
    {
        case value>=90 && value<=100:
            console.log("S grade");
        break;
        case value>=80 && value<90:
            console.log("A grade");
        break;
        case value>=70 && value<80:
            console.log("B grade");
        break;
        case value>=60 && value<70:
            console.log("C grade");
        break;
        case value>=50 && value<60:
            console.log("D grade");
        break;
        case value>=40 && value<50:
            console.log("E grade");
        break;
        case value>=0 && value<40:
            console.log("Student has Failed");
        break;
        default:
            console.log("invalid Marks")
        }
    }


    Grade(90)
    Grade(80)
    Grade(70)
    Grade(60)
    Grade(50)
    Grade(40)
    Grade(30)
    Grade(310)
//sum of the multiples of 3 and 5 under 1000
function  multiple(){
    let sum =0
    for (let i=0; i<1000;i++ ){
        if(i%3===0 || i%5===0){
            sum+=i;

        }
    }
    console.log(sum)
}
multiple()

//factorial of all prime numbers between a given range
function primenumber(lb,n){
    let j,b;
    for (i=lb; i<=n; i++){
        b=0;
        for (j=1;j<=i; j++){
            if(i%j==0){
                b=b+1;
            }
        }
        if(b==2){
            console.log(i)
        }
    }

}

primenumber(1,1000)

