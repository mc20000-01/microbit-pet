input.onButtonPressed(Button.A, function () {
    if (inactionmenu) {
        inactionmenu = 0
        music.play(music.createSoundExpression(WaveShape.Triangle, 5000, 1, 255, 255, 50, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
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
function init_moods () {
    moodframes = bigImages.create()
    moodframes.addLevelFrame("30300:00000:33300:30300:00000")
    moodframes.addLevelFrame("30300:00000:30300:33300:00000")
}
let lastsate = ""
let currentstate = ""
let action = 0
let actionmenuframes: bigImages.BigImage = null
let moodframes: bigImages.BigImage = null
let inactionmenu = 0
init_moods()
init_actions()
show_face(1, 0, 1, 1, 0, 1)
let mood = 1
let dirty = 1
basic.forever(function () {
    let slugish = 0
    let thirst = 0
    let hunger = 0
    currentstate = "" + mood + ("" + hunger) + ("" + thirst) + ("" + dirty) + ("" + slugish) + ("" + inactionmenu)
    if (inactionmenu) {
        actionmenuframes.showLevelFrame(action, 5)
        lastsate = currentstate
    } else if (lastsate != currentstate) {
        show_face(mood, mood, hunger, thirst, dirty, slugish)
        lastsate = currentstate
    } else {
    	
    }
})
