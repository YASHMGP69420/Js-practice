let key = prompt("Enter name")
let value = prompt("Enter value")

localStorage.setItem(key,value)

console.log(`My name is ${key} and my value is ${value}`);