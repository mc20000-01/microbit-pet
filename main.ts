input.onButtonPressed(Button.A, function () {
    if (inactionmenu) {
        inactionmenu = 0
        music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 1, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(100)
        if (0 == action) {
            for (let index = 0; index < 4; index++) {
                faceanimframes.showFrame(0)
                music.play(music.createSoundExpression(WaveShape.Sawtooth, 166, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                faceanimframes.showFrame(1)
            }
            hunger = 1
            dirty = 0
            hungertimer = 0
        } else if (1 == action) {
            for (let index = 0; index < 4; index++) {
                faceanimframes.showFrame(0)
                music.play(music.createSoundExpression(WaveShape.Noise, 166, 2845, 0, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                faceanimframes.showFrame(1)
            }
            thirst = 1
            thirsttimer = 0
        } else if (2 == action) {
            for (let index = 0; index < 6; index++) {
                faceanimframes.showFrame(2)
                music.play(music.createSoundExpression(WaveShape.Noise, 523, 1, 255, 0, 20, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                faceanimframes.showFrame(3)
            }
            dirty = 1
            dirtytimer = 0
        } else if (3 == action) {
            for (let index = 0; index < 5; index++) {
                faceanimframes.showFrame(4)
                music.play(music.createSoundExpression(WaveShape.Square, 1, 562, 255, 0, 20, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                faceanimframes.showFrame(5)
                music.play(music.createSoundExpression(WaveShape.Square, 1, 562, 255, 0, 20, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
                faceanimframes.showFrame(6)
                music.play(music.createSoundExpression(WaveShape.Square, 1, 562, 255, 0, 20, SoundExpressionEffect.Vibrato, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
            }
            slugish = 1
            dirty = 0
            hunger = 0
            slugishtimer = 0
        } else {
            music.play(music.createSoundExpression(WaveShape.Noise, 3196, 5000, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
        inactionmenu = 3
        basic.pause(20)
        inactionmenu = 0
    } else {
        music.play(music.createSoundExpression(WaveShape.Noise, 3196, 5000, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        basic.pause(100)
        music.play(music.createSoundExpression(WaveShape.Noise, 5000, 3284, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
function show_face (face: number, sad: number, hungry: number, thirsty: number, needsclean: number, needsexersize: number) {
    moodframes.showLevelFrame(face, 5)
    emotion(sad, hungry, thirsty, needsclean, needsexersize)
}
function init_actions () {
    actionmenuframes = bigImages.create()
    actionmenuframes.addLevelFrame("00123:00232:00321:03000:30000")
    actionmenuframes.addLevelFrame("30003:31113:31113:31113:33333")
    actionmenuframes.addLevelFrame("00300:00300:00300:03330:02220")
    actionmenuframes.addLevelFrame("00333:00023:00003:23233:32323")
    actionmenuframes.addLevelFrame("30003:03030:00300:03030:30003")
}
input.onButtonPressed(Button.B, function () {
    if (inactionmenu) {
        action += 1
        action = action % 5
        music.play(music.createSoundExpression(WaveShape.Triangle, 1, 5000, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 1, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    } else {
        inactionmenu = 1
        music.play(music.createSoundExpression(WaveShape.Triangle, 1, 5000, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
function emotion (sad2: number, hungry2: number, thirsty2: number, needs_clean: number, needs_exersise: number) {
    led.plot(sad2 + 4, 0)
    led.plot(hungry2 + 4, 1)
    led.plot(thirsty2 + 4, 2)
    led.plot(needs_clean + 4, 3)
    led.plot(needs_exersise + 4, 4)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        faceanimframes.showFrame(7)
        music.play(music.createSoundExpression(WaveShape.Square, 166, 2494, 255, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 2450, 1, 255, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        faceanimframes.showFrame(8)
        music.play(music.createSoundExpression(WaveShape.Square, 166, 2494, 255, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
        music.play(music.createSoundExpression(WaveShape.Square, 2450, 1, 255, 0, 20, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
    }
    mood = 1
    moodtimer = 0
    inactionmenu = 3
    basic.pause(20)
    inactionmenu = 0
})
function init_moods () {
    moodframes = bigImages.create()
    moodframes.addLevelFrame("30300:00000:33300:30300:00000")
    moodframes.addLevelFrame("30300:00000:30300:33300:00000")
    faceanimframes = bigImages.create()
    faceanimframes.addFrame(images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        . # . . .
        . . # . .
        . . . # #
        . . . # #
        . . # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        . # . . .
        . # . . .
        . # . . .
        # # # . .
        # # # . .
        `))
    faceanimframes.addFrame(images.createImage(`
        . # . # #
        # # . . #
        . # . . #
        # # . . #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        . # . # #
        # # # . #
        . # . . #
        # . # . #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        . # . # #
        . # # . #
        . # . . #
        . # # . #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `))
    faceanimframes.addFrame(images.createImage(`
        # # # # #
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        `))
}
let lastsate = ""
let currentstate = ""
let actionmenuframes: bigImages.BigImage = null
let moodframes: bigImages.BigImage = null
let faceanimframes: bigImages.BigImage = null
let action = 0
let inactionmenu = 0
let slugish = 0
let dirty = 0
let thirst = 0
let hunger = 0
let mood = 0
let slugishtimer = 0
let dirtytimer = 0
let thirsttimer = 0
let hungertimer = 0
let moodtimer = 0
moodtimer = 0
hungertimer = 0
thirsttimer = 0
dirtytimer = 0
slugishtimer = 0
mood = 1
hunger = 0
thirst = 0
dirty = 1
slugish = 0
init_moods()
init_actions()
power.fullPowerOn(FullPowerSource.A)
power.fullPowerOn(FullPowerSource.B)
loops.everyInterval(500, function () {
    if (input.lightLevel() < 64) {
        power.lowPowerPause(10000)
    }
})
basic.forever(function () {
    currentstate = "" + mood + ("" + hunger) + ("" + thirst) + ("" + dirty) + ("" + slugish) + ("" + inactionmenu)
    if (inactionmenu) {
        actionmenuframes.showLevelFrame(action, 5)
        lastsate = currentstate
    } else if (lastsate != currentstate) {
        show_face(mood, mood, hunger, thirst, dirty, slugish)
        lastsate = currentstate
    } else {
    	
    }
    moodtimer = moodtimer + 1
    hungertimer = hungertimer + 1
    thirsttimer = thirsttimer + 1
    dirtytimer = dirtytimer + 1
    slugishtimer = slugishtimer + 1
    serial.writeValue("mood timer", moodtimer)
    serial.writeValue("time on in ms", control.millis())
    if (97000 < moodtimer) {
        mood = 0
    }
    if (194000 < hungertimer) {
        hunger = 0
        moodtimer = moodtimer + 1
    }
    if (70000 < thirsttimer) {
        thirst = 0
        moodtimer = moodtimer + 1
    }
    if (140000 < dirtytimer) {
        dirty = 0
        moodtimer = moodtimer + 1
    }
    if (194000 < slugishtimer) {
        slugish = 0
        moodtimer = moodtimer + 1
    }
})
