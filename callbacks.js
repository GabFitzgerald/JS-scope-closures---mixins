function adder(x, y, callback) {
    let answer = x + y
    callback(answer)
}

function shoutSomething(input) {
    console.log(`HEY! ${input}!!`)
}

function outputNumbers(howMany) {
    for (let i=1; i<= howMany; i++) {
        console.log(i)
    }
}

adder(1, 2, shoutSomething)
adder(5, 7, outputNumbers)