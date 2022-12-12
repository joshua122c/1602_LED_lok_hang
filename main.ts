makerbit.connectLcd(39)
makerbit.clearLcd1602()
makerbit.showStringOnLcd1602("Joshua", makerbit.position1602(LcdPosition1602.Pos1), 16, TextOption.AlignLeft)
makerbit.lcdMakeCharacter(LcdChar.c1, makerbit.lcdCharacterPixels(`
    . . # . .
    . # . . .
    # # # # #
    . . . # .
    . # # . .
    # # . . .
    # . . . #
    # # # # #
    `))
makerbit.lcdMakeCharacter(LcdChar.c2, makerbit.lcdCharacterPixels(`
    . . # . .
    . # # # .
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    # # # # #
    `))
makerbit.lcdMakeCharacter(LcdChar.c4, makerbit.lcdCharacterPixels(`
    . . . . .
    # # # # #
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    # . . . .
    `))
makerbit.lcdMakeCharacter(LcdChar.c6, makerbit.lcdCharacterPixels(`
    . . # . .
    # # # # #
    # . # . #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `))
makerbit.lcdMakeCharacter(LcdChar.c7, makerbit.lcdCharacterPixels(`
    . . . . .
    # # # # #
    # . . . .
    . # . . .
    . . # . .
    . . . # .
    . . . . #
    . . . . #
    `))
makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos11))
makerbit.lcdShowCharacter1602(LcdChar.c2, makerbit.position1602(LcdPosition1602.Pos12))
makerbit.lcdShowCharacter1602(LcdChar.c1, makerbit.position1602(LcdPosition1602.Pos13))
makerbit.lcdShowCharacter1602(LcdChar.c4, makerbit.position1602(LcdPosition1602.Pos27))
makerbit.lcdShowCharacter1602(LcdChar.c6, makerbit.position1602(LcdPosition1602.Pos28))
makerbit.lcdShowCharacter1602(LcdChar.c7, makerbit.position1602(LcdPosition1602.Pos29))
basic.forever(function () {
	
})
