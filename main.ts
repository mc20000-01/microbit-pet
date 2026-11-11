function init_moods () {
    moodhappy = images.createImage(`
        # . # . .
        . . . . .
        # . # . .
        # # # . .
        . . . . .
        `)
    moodsad = images.createImage(`
        # . # . .
        . . . . .
        # # # . .
        # . # . .
        . . . . .
        `)
}
function emotion (sad: number, hungry: number, thirsty: number, needs_clean: number, needs_exersise: number) {
    led.plotBrightness(4, 0, sad * 255)
    led.plotBrightness(4, 1, hungry * 255)
    led.plotBrightness(4, 2, thirsty * 255)
    led.plotBrightness(4, 3, needs_clean * 255)
    led.plotBrightness(4, 4, needs_exersise * 255)
}
function show_face (face: Image, sad: number, hungry: number, thirsty: number, needsclean: number, needsexersize: number) {
    face.showImage(0)
    emotion(sad, hungry, thirsty, needsclean, needsexersize)
}
let moodsad: Image = null
let moodhappy: Image = null
init_moods()
show_face(moodhappy, 0, 1, 1, 0, 1)
