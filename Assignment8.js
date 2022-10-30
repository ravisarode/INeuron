/**Can we put duplicate values in the set object ? */
//we can keep  duplicate values in the se but it will consider and print only unique  values

/**Write the syntax for
a) Creating new set object
b) Adding new element to set object
c) Deleting element from set object */

// a: let  sample = new Set()
//b:  sample.add("a")
//c: sample.delete("a")

/**Random Number */
function getRandomIntInclusive(min, max) {
    let sampleset = new Set()
    min = Math.ceil(min);
    max = Math.floor(max);
while(sampleset.size!==4){
     result = Math.floor(Math.random() * (max - min + 1) + min); 
     sampleset.add(result)
     
}
console.log(sampleset)
console.log(sampleset.has(8))

}
getRandomIntInclusive(1,10)
