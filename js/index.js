
function largestNumber(number){
    let greaterstNum = number[0]
    for(let i=0;i<number.length;i++){
        if(greaterstNum<=number[i]){
            greaterstNum = number[i]
        }
    }
    return greaterstNum

}

let arry = [1,3,5,5,6,10]

console.log(largestNumber(arry))

