function show_face (face: Image, sad: number, hungry: number, thirsty: number, needsclean: number, needsexersize: number) {
    face.showImage(0)
    emotion(sad, hungry, thirsty, needsclean, needsexersize)
}
function init_actions () {
    actionmenuframes = bigImages.create()
    actionmenuframes.addLevelFrame("00123:00232:00321:03000:30000")
    actionmenuframes.addLevelFrame("30003:31113:31113:31113:33333")
    actionmenuframes.addLevelFrame("00300:00300:00300:03330:02220")
    actionmenuframes.addLevelFrame("00333:00023:00003:23233:32323")
}
input.onButtonPressed(Button.B, function () {
    if (inactionmenu) {
        action += 1
        action = action % 4
    } else {
        inactionmenu = 1
    }
})
function emotion (sad: number, hungry: number, thirsty: number, needs_clean: number, needs_exersise: number) {
    led.plot(sad + 4, 0)
    led.plot(hungry + 4, 1)
    led.plot(thirsty + 4, 2)
    led.plot(needs_clean + 4, 3)
    led.plot(needs_exersise + 4, 4)
}
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
let lastsate = ""
let currentstate = ""
let moodsad: Image = null
let action = 0
let inactionmenu = 0
let actionmenuframes: bigImages.BigImage = null
let moodhappy: Image = null
init_moods()
init_actions()
show_face(moodhappy, 0, 1, 1, 0, 1)
let mood = 1
let hunger = 0
let thirst = 0
let dirty = 1
let slugish = 0
basic.forever(function () {
    currentstate = "" + mood + hunger + thirst + dirty + slugish
    if (inactionmenu) {
        actionmenuframes.showLevelFrame(action, 5)
    } else if (lastsate != currentstate) {
        show_face(moodhappy, mood, hunger, thirst, dirty, slugish)
        lastsate = currentstate
    } else {
    	
    }
})
