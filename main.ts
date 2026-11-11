function emotion (sad: number, hungry: number, thirsty: number, needs_clean: number, needs_exersise: number) {
    led.plotBrightness(4, 0, sad * 255)
    led.plotBrightness(4, 1, hungry * 255)
    led.plotBrightness(4, 2, thirsty * 255)
    led.plotBrightness(4, 3, needs_clean * 255)
    led.plotBrightness(4, 4, needs_exersise * 255)
}
let moodhappy = images.createImage(`
    # . # . .
    . . . . .
    # . # . .
    # # # . .
    . . . . .
    `)
moodhappy.showImage(0)
emotion(0, 1, 1, 0, 1)
