// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)

// function square(i){
//     return Math.pow(i,2)
// }

// const arr2 = arr.map(n => Math.pow(n,2))
// console.log(arr2); //map

// const names = ["sipra","yash","ashish","pratik"]
// const up = names.map((name)=>{
//         return name.toUpperCase()

// })console.log();console.log();console.log();
// console.log(up);

// const dates = ['2020-21-2','2005-1-7','2005-4-30']
// const f = dates.map((d)=>{
//     const parts = d.split("-")
//     return `${parts[0]}/${parts[1]}/${parts[2]}` 
// })
// console.log(f);

// const products = [
// {name: "Laptop",price: 499,color: "white"},
// {name: "Smartphone", price: 899, color: "black"},
// {name: "Headphones", price: 50, color: "white"},
// {name: "Keyboard", price: 210, color: "blue"}
// ]

// const aff = products.filter(prod=>prod.price<200)
// console.log(aff);

const arr = [1,2,3,4,5,6,7]
const n = arr.reduce((total,num)=>{
    return total + num
},0)
console.log(n);

const fruits = ['apple','banana','vinegar','apple','banana','vinegar']
const countf= fruits.reduce((tally,i)=>{
    tally[i]=(tally[i] || 0)+1
    return tally
},{})
console.log(countf);


