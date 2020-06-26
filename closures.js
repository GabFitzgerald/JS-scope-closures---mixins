function makeAdder(a) {
    return function(b) {
        return a + b
    }
}

const addFive = makeAdder(5)
console.log(addFive(6))