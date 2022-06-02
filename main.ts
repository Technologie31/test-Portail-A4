basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 1 || (pins.digitalReadPin(DigitalPin.P0) == 0 || pins.digitalReadPin(DigitalPin.P1) == 0)) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(0)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(90)
    }
})
