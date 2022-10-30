// /** Truncate Program */
function truncate(s){
    let len = s.length
    if (len <= 4){
        console.log(s)
    }
    else{
        console.log(s.slice(0,4))
    }
}
s= "ice"
s ="Icecream"
truncate(s)

// /** Remove Whitespaces */

let s1 = "  Hii Boy    "
s1 = s1.replace(" ","")
console.log(s1.trim())

/**Replace words */
let s2= "Hii Boy"
wordArray = s2.split(' ')
console.log(wordArray[1],wordArray[0])

/**Replace a word */
let s3 = "apple"
console.log(s3.replace("a","x"))


// What string method can be used to convert string into array ?
// Ans: Slice

//What string method can be used to check the occurrence of a specified text in a string?
//Ans: Count

//How can you break a string to a newline in Javascript ?
// Ans: by using \n charecter
console.log("This is line break \nnew line")
/**Write a Javascript function to test whether the first character of a string
is lowercase. */
function islower(str,index){
    return str.charAt(index).toLowerCase() === str.charAt(index)
}
console.log(islower("rAVI Sarode",0))

/**Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods. */

s5 = ["yes","YES","yes"]
for (let i of s5){
console.log(i.toLowerCase())
}
/*Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
(any combination) using string methods.
How will you handle that */

function operations(){
    s6 ="Ravisarode"
    console.log(s6.toUpperCase())
    console.log(s6.charAt(0).toUpperCase())
    console.log(s6.toLowerCase())
    function swap1(){
        l =s6.length/2
        l1 = s6.slice(0,l)
        l2 = s6.slice(l,s6.length)
        console.log(l2,l1)
    }
    swap1()
        function wordcount(){
            var obj ={}
            var repeats =[]
            for  (x=0, length=s6.length;x<length;x++){
                var l =s6.charAt(x)
                obj[l] =(isNaN(obj[l]) ? 1 : obj[l]+1)
            }
            console.log(obj)
        }
        wordcount()
        function reverse1(){
            let splitstring = s6.split("")
            let reverseArray = splitstring.reverse()
            let joinArray = reverseArray.join("")
            console.log(joinArray)
        }
            reverse1()
}
operations()

