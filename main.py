Knuffel = 20
Voeding = 20
Dood = 0

def on_forever():
    if Voeding > 10 and Knuffel > 10:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
    if Voeding > 0 and Voeding < 10 or Voeding > 0 and Voeding < 10:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
    if Voeding < 0 or Knuffel < 0:
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        # # # # #
                        . . . . .
        """)
basic.forever(on_forever)

def on_forever2():
    global Voeding, Knuffel
    if input.button_is_pressed(Button.A):
        Voeding += 5
    if input.button_is_pressed(Button.B):
        Knuffel += 5
basic.forever(on_forever2)

def on_forever3():
    global Knuffel, Voeding
    Knuffel += -1
    basic.pause(100)
    Voeding += -1
    basic.pause(100)
basic.forever(on_forever3)
