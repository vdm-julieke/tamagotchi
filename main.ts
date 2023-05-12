let Voeding = 0
let Knuffel = 20
Knuffel = 20
let Dood = 0
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
    if (Voeding < 0 && Voeding > 10 || Voeding < 0 && Voeding > 10) {
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
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Voeding += 5
    }
    if (input.buttonIsPressed(Button.B)) {
        Knuffel += 5
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
