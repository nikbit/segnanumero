input.onButtonPressed(Button.A, function () {
    Number2 += 1
    basic.showNumber(Number2)
    music.playMelody("C E C5 - - - - - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    Number2 = 0
    basic.showNumber(Number2)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    Number2 += -1
    basic.showNumber(Number2)
    music.playMelody("C5 E C - - - - - ", 120)
})
let Number2 = 0
Number2 = 0
basic.showNumber(Number2)
