const person = {
    name: "Jack",
    age: "30",
    hobbies: [ "surfing", "skydiving" ]
}

console.log(JSON.stringify(person))

const str = '{"name":"Jack","age":"30","hobbies":["surfing","skydiving"]}'
const person2 = JSON.parse(str)
console.log(person2)