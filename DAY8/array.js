let name=["Suraj","Raj","Rohan","Yash"];
for (let i = 3; i >=0; i--) {
    console.log(name[i]);
}

name.forEach(function(value){
    console.log(value);
}); 


let result = name.map(function(value){
      return value.toUpperCase();
});
console.log(result);



let resu =name.filter(function(value){
      return value.length > 3;
});
console.log(resu);




let num=[10,15,20,25];
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);     
}


let nums =[10,15,20,25];
let data =nums.filter(function(x)
{
    return x>15;
});
console.log(data);


let nums1 =[10,20,30,40];
console.log(nums1.find(x=>x>12));