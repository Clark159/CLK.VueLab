
// class
class NumberService {

    // methods
    sum(a: number, b: number): number {

        // return
        return a + b
    }

    multiply(a: number, b: number): number {

        // return
        return a * b
    }
}

// singleton
const numberService = new NumberService()

// export
export default numberService