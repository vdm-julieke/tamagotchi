let Dood = 0
let Knuffel = 20
let Voeding = 20
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Voeding += 5
    }
    if (input.buttonIsPressed(Button.B)) {
        Knuffel += 5
    }
    if (input.buttonIsPressed(Button.A) && Dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B) && Dood == 1) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Voeding > 10 && Knuffel > 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (Voeding > 0 && Voeding < 10 || Voeding > 0 && Voeding < 10) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (Voeding < 0 || Knuffel < 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # # # # #
            . . . . .
            `)
        Dood = 1
    }
})
basic.forever(function () {
    Knuffel += -1
    basic.pause(200)
    Voeding += -1
    basic.pause(200)
})
