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
var val = arr.map(function(val){ // take space of array you have maped and then it will add what you have returned
    return val;
})

console.log(ans)
console.log(val)

// filter
var ans1 = arr.filter(function(val){
   if (val > 3) {return true;}
   else return false;
})

console.log(ans1)

var find = arr.find(function(val){
    if (val === 2) return val;
})

console.log(find)