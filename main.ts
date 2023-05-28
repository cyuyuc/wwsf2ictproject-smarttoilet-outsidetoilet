radio.onReceivedNumber(function (receivedNumber) {
    sos = receivedNumber
})
radio.onReceivedValue(function (name, value) {
    availability = value
})
let availability = 0
let sos = 0
music.stopAllSounds()
basic.clearScreen()
radio.setGroup(11)
radio.setTransmitPower(7)
music.setVolume(255)
basic.forever(function () {
    if (availability == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (availability == 2) {
        basic.showIcon(IconNames.No)
        basic.pause(10)
        basic.showIcon(IconNames.Asleep)
    } else if (availability == 3) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Sad)
        music.playMelody("C5 A B G A F G E ", 120)
        basic.showString("error")
    }
    if (sos == 999) {
        music.playMelody("C C C5 C5 C C C5 C5 ", 400)
    }
})
