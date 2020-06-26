// throw "my error"

// function CustomError(msg) {
//     this.message = msg
//     this.name = "CustomError"
// }

// throw new CustomError("Something went wrong")

class MattError extends Error {
    constructor(...params) {
        super(...params)
        this.name = "MattError"
    }
}

try {
    throw new MattError("something went wrong")
} catch (error) {
    console.log(error)
}