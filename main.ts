input.onButtonPressed(Button.A, function () {
    if (F == 1) {
        basic.clearScreen()
        led.plot(2, 2)
        Angle_F += -5
        Xf += -1
    } else {
        basic.clearScreen()
        angle_O += -5
        Xo += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (F == 1) {
        F = 0
        O = 1
        led.unplot(2, 2)
    } else {
        F = 1
        O = 0
        led.plot(2, 2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (F == 1) {
        basic.clearScreen()
        led.plot(2, 2)
        Angle_F += 5
        Xf += 1
    } else {
        basic.clearScreen()
        angle_O += 5
        Xo += 1
    }
})
let O = 0
let F = 0
let Angle_F = 110
let angle_O = 30
let Xo = 2
let Xf = 2
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1 || (pins.digitalReadPin(DigitalPin.P0) == 0 || pins.digitalReadPin(DigitalPin.P1) == 0)) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(angle_O)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(Angle_F)
    }
    if (Xo > 4) {
        led.plot(Xo - 2, 1)
    } else if (Xo < 0) {
        led.plot(Xo + 2, 1)
    } else {
        led.plot(Xo, 0)
    }
    if (Xf > 4) {
        led.plot(Xf - 2, 3)
    } else if (Xf < 0) {
        led.plot(Xf + 2, 3)
    } else {
        led.plot(Xf, 4)
    }
})
