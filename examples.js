let numbers = [4,1,8,13,9,21];
let evens=numbers.filter((val)=>{(val%2==0);});
console.log(evens)
numbers.filter((val)=>(val%2==0)).forEach((x)=>console.log(x));

