/**
 * GONZALO MARTINEZ CENTENO S2C
 */
input.onButtonPressed(Button.A, function () {
    if (0 == parseFloat("1,3,5,7,9")) {
        IMPARES += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    PARES = 0
    IMPARES = 0
})
input.onButtonPressed(Button.B, function () {
    if (0 == parseFloat("0,2,4,6,8")) {
        PARES += 1
    }
})
let PARES = 0
let IMPARES = 0
for (let index = 0; index < 1; index++) {
    led.plot(0, 2)
    basic.pause(100)
    led.plot(1, 2)
    basic.pause(100)
    led.plot(2, 2)
    basic.pause(100)
    led.plot(3, 2)
    basic.pause(100)
    led.plot(4, 2)
    basic.pause(5000)
    basic.clearScreen()
}
basic.forever(function () {
    if (input.temperature() <= 18) {
        music.playTone(175, music.beat(BeatFraction.Whole))
    }
    basic.showNumber(randint(0, 9))
    basic.pause(200)
    if (IMPARES == 5) {
        basic.showArrow(ArrowNames.East)
    } else if (PARES == 5) {
        basic.showArrow(ArrowNames.West)
    }
})
