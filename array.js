a = [85,97,44,37,76,60]
let i =0
for(let el of a){
    i+=el
}
i/a.length

var arr = [1,2,3,4,5,6]
arr.forEach(function(val){
    console.log(val + " hello")
})

var ans = arr.map(function(val){ // take space of array you have maped and then it will add what you have returned
    return 13;
})

console.log(ans)