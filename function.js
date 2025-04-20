// higher order function map(), filter(), reduce()
const user = [
    {fName: "Krishna", lName:"Murari", age:"25"},
    {fName: "Tripurari", lName:"Kumar", age:"21"},
    {fName: "Pallavi", lName:"Kumari", age:"18"},
    {fName: "Amrit", lName:"Sagar", age:"25"},
    {fName: "Naina", lName:"Singh", age:"18"}
]
const fullName = user.map((x)=>{
    return x.fName+" "+ x.lName;
})
console.log(fullName);

const agelimit = user.filter((x)=>x.age > 18);
console.log(agelimit)

// use of reduce()
const ageCount = user.reduce((acc,curr) =>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age] = 1;
    }
    return acc;
},{})
console.log(ageCount);
