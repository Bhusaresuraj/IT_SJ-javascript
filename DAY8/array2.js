let name =["Rohan","Vivek","Ajay","Rahul","Suraj"]

let result =name.findIndex((value)=>
{
    return value==="Ajay";
});
console.log(result);


let joindata =name.join(",");
console.log(joindata);
console.log(name);



let nums=[50,10,5,40,20];
nums.sort(function(a,b){
    return a-b;
});
console.log(nums);


console.log(name);
let result1 =name.slice(0,2);
console.log(result1);