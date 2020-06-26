// function myDog() {
//     console.log(dog)
//     var dog = "Ted"
    
// }

// myDog()
// console.log(dog)

function parentFunc(a) {
    let b = 1

    function nestedFunc(a, b) {
        return a + b
    }

    return nestedFunc(a, b)
}



let answer = parentFunc(10)
console.log(answer)