//array creation 
let arr=[1,2,3,4,5];
let arr2=[9,8,7,6];
console.log(arr);

//array manipulation
arr.push(8);
console.log(arr);

arr.pop()
console.log(arr);

console.log(arr.concat(arr2));

arr.shift()
console.log(arr);
arr.unshift(1);
console.log(arr);

arr.splice(0, arr.length);
console.log(arr);

//array searching
let arr1=[12,13,14,23,15,16,12];
console.log(arr1.indexOf(12));
console.log(arr1.lastIndexOf(12));

//array sorting
console.log(arr1.sort());
console.log(arr1.reverse())

//array mapping and using arrow key
let brr=[1,2,3,4];
console.log(brr)
let newbrr=brr.map(x=>x*2);
console.log(newbrr);
brr