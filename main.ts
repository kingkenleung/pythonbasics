basic.forever(function fib() {
    let c: number;
    let a = 0
    let b = 1
    basic.showNumber(a)
    basic.showNumber(b)
    for (let k = 0; k < 30; k++) {
        c = a + b
        basic.showNumber(c)
        a = b
        b = c
    }
})
