let yold = 0
let xold = 0
let y = 0
let x = 0
let ywaypoint = 2
let xwaypoint = 2
input.onButtonPressed(Button.A, function () {
    if (xwaypoint == 2) {
        xwaypoint = x * 2.5 + 2.5
        ywaypoint = y * 2.5 + 2.5
    } else {
        led.unplot(xwaypoint, ywaypoint)
        xwaypoint = 2
        ywaypoint = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    led.plot(2, 2)
    led.plot(xwaypoint, ywaypoint)
    x = Math.sin(input.compassHeading() * 0.017453) * -1
    y = Math.cos(input.compassHeading() * 0.017453) * -1
    led.plot(x + 2.5, y + 2.5)
    led.plot(x * 2.5 + 2.5, y * 2.5 + 2.5)
    if (Math.round(x) != Math.round(xold) || Math.round(y) != Math.round(yold)) {
        led.unplot(xold + 2.5, yold + 2.5)
    }
    if (Math.round(x * 12) != Math.round(xold * 12) || Math.round(y * 16) != Math.round(yold * 16)) {
        led.unplot(xold * 2.5 + 2.5, yold * 2.5 + 2.5)
    }
    xold = x
    yold = y
})
