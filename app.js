console.log('Запечатали')

let a = 6
let b = 6
let c = a
c = 10
console.log(c, a)

let obj1 = {a: 1, b: 2, c: 3}
let obj2 = obj1
obj2.a = "1"
console.log(obj1, obj2)

const ob = {a:1,b:2,c:3}
ob.a = 123
console.log(ob)

console.log('Задание 1')
let user1 = {

    name: "John",
    age: 30
}
console.log('age' in user1)

console.log('Задание 2')
let users = [
    {
    name: "John",
    age: 30
},
{
    name: "Bob",
    age: 24
},
{
    name: "Anna",
    age: 17
}
]
let user = users.find((string) => string.name === "Bob")
console.log(user)

console.log('Задание 3')

 users = [{
    name: "John",
    age: 30
},
{
    name: "Bob",
    age: 24
},
{
    name: "Anna",
    age: 17
}]

let fff = users.findIndex((string) => string.name === "Anna")
delete users[fff]
console.log(users)

console.log('Задание 4')

users.sort((big,cok) => big.age - cok.age)
console.log(users)

console.log('Задание 5')

const obj3 = {
    id: 5,
    token: 12343423
}
const id = obj3['id']
console.log(id)


console.log('Задание 6')

const obj4 = {
id: 5,
token: 12343423
}
const userId = obj4['id']
console.log(userId)