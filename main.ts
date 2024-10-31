let x = 0
let y = 0
let xold = 0
let yold = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
basic.forever(function () {
    led.plot(2, 2)
    x = Math.sin(input.compassHeading() * 0.017453) * -1
    y = Math.cos(input.compassHeading() * 0.017453) * -1
    led.plot(x + 2.5, y + 2.5)
    led.plot(x * 2.25 + 2.5, y * 2.25 + 2.5)
    if (Math.round(x) != Math.round(xold) || Math.round(y) != Math.round(yold)) {
        led.unplot(xold + 2.5, yold + 2.5)
    }
    if (Math.round(x * 16) != Math.round(xold * 16) || Math.round(y * 16) != Math.round(yold * 16)) {
        led.unplot(xold * 2.25 + 2.5, yold * 2.25 + 2.5)
    }
    xold = x
    yold = y
})
