def on_button_pressed_a():
    global inactionmenu
    if inactionmenu:
        inactionmenu = 0
        music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                5000,
                1,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
    else:
        music.play(music.create_sound_expression(WaveShape.NOISE,
                3196,
                5000,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
        basic.pause(100)
        music.play(music.create_sound_expression(WaveShape.NOISE,
                5000,
                3284,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def show_face(face: number, sad: number, hungry: number, thirsty: number, needsclean: number, needsexersize: number):
    moodframes.show_level_frame(face, 5)
    emotion(sad, hungry, thirsty, needsclean, needsexersize)
def init_actions():
    global actionmenuframes
    actionmenuframes = bigImages.create()
    actionmenuframes.add_level_frame("00123:00232:00321:03000:30000")
    actionmenuframes.add_level_frame("30003:31113:31113:31113:33333")
    actionmenuframes.add_level_frame("00300:00300:00300:03330:02220")
    actionmenuframes.add_level_frame("00333:00023:00003:23233:32323")
    actionmenuframes.add_level_frame("30003:03030:00300:03030:30003")

def on_button_pressed_b():
    global action, inactionmenu
    if inactionmenu:
        action += 1
        action = action % 5
        music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                1,
                5000,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                5000,
                1,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
    else:
        inactionmenu = 1
        music.play(music.create_sound_expression(WaveShape.TRIANGLE,
                1,
                5000,
                255,
                255,
                50,
                SoundExpressionEffect.WARBLE,
                InterpolationCurve.LINEAR),
            music.PlaybackMode.UNTIL_DONE)
input.on_button_pressed(Button.B, on_button_pressed_b)

def emotion(sad2: number, hungry2: number, thirsty2: number, needs_clean: number, needs_exersise: number):
    led.plot(sad2 + 4, 0)
    led.plot(hungry2 + 4, 1)
    led.plot(thirsty2 + 4, 2)
    led.plot(needs_clean + 4, 3)
    led.plot(needs_exersise + 4, 4)
def init_moods():
    global moodframes
    moodframes = bigImages.create()
    moodframes.add_level_frame("30300:00000:33300:30300:00000")
    moodframes.add_level_frame("30300:00000:30300:33300:00000")
lastsate = ""
currentstate = ""
action = 0
actionmenuframes: bigImages.BigImage = None
moodframes: bigImages.BigImage = None
inactionmenu = 0
mood = 0
hunger = 1
thirst = 1
dirty = 0
slugish = 1
moodtimer = 0
hungertimer = 0
thirsttimer = 0
dirtytimer = 0
slugishtimer = 0
init_moods()
init_actions()
show_face(0, 0, 1, 1, 0, 1)

def on_forever():
    global currentstate, lastsate
    currentstate = "" + str(mood) + ("" + str(hunger)) + ("" + str(thirst)) + ("" + str(dirty)) + ("" + str(slugish)) + ("" + str(inactionmenu))
    if inactionmenu:
        actionmenuframes.show_level_frame(action, 5)
        lastsate = currentstate
    elif lastsate != currentstate:
        show_face(mood, mood, hunger, thirst, dirty, slugish)
        lastsate = currentstate
    else:
        pass
basic.forever(on_forever)
