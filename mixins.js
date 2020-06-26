const calcMixin = function(Base) {
    return class extends Base {
        area() {
            return this.width * this.height
        }
    }
}

class Shape {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    talk(thing) {
        return `Hey! I am a talking ${thing}!`
    }
}

class Square extends calcMixin(Shape) {
    constructor(width) {
        super(width, width)
    }

    talk() {
        return super.talk("Square")
    }
}
