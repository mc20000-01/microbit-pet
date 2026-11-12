def on_button_pressed_a():
    global inactionmenu, hunger, dirty, hungertimer, thirst, thirsttimer, dirtytimer, slugish, slugishtimer
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
        basic.pause(100)
        if 0 == action:
            for index in range(4):
                faceanimframes.show_frame(0)
                music.play(music.create_sound_expression(WaveShape.SAWTOOTH,
                        166,
                        1,
                        255,
                        0,
                        100,
                        SoundExpressionEffect.NONE,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
                faceanimframes.show_frame(1)
            hunger = 1
            dirty = 0
            hungertimer = 0
        elif 1 == action:
            for index2 in range(4):
                faceanimframes.show_frame(0)
                music.play(music.create_sound_expression(WaveShape.NOISE,
                        166,
                        2845,
                        0,
                        255,
                        100,
                        SoundExpressionEffect.NONE,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
                faceanimframes.show_frame(1)
            thirst = 1
            thirsttimer = 0
        elif 2 == action:
            for index3 in range(6):
                faceanimframes.show_frame(2)
                music.play(music.create_sound_expression(WaveShape.NOISE,
                        523,
                        1,
                        255,
                        0,
                        20,
                        SoundExpressionEffect.VIBRATO,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
                faceanimframes.show_frame(3)
            dirty = 1
            dirtytimer = 0
        elif 3 == action:
            for index4 in range(5):
                faceanimframes.show_frame(4)
                music.play(music.create_sound_expression(WaveShape.SQUARE,
                        1,
                        562,
                        255,
                        0,
                        20,
                        SoundExpressionEffect.VIBRATO,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
                faceanimframes.show_frame(5)
                music.play(music.create_sound_expression(WaveShape.SQUARE,
                        1,
                        562,
                        255,
                        0,
                        20,
                        SoundExpressionEffect.VIBRATO,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
                faceanimframes.show_frame(6)
                music.play(music.create_sound_expression(WaveShape.SQUARE,
                        1,
                        562,
                        255,
                        0,
                        20,
                        SoundExpressionEffect.VIBRATO,
                        InterpolationCurve.CURVE),
                    music.PlaybackMode.UNTIL_DONE)
            slugish = 1
            dirty = 0
            hunger = 0
            slugishtimer = 0
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
        inactionmenu = 3
        basic.pause(20)
        inactionmenu = 0
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

def on_logo_pressed():
    global mood, moodtimer, inactionmenu
    for index5 in range(2):
        faceanimframes.show_frame(7)
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                166,
                2494,
                255,
                0,
                20,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                2450,
                1,
                255,
                0,
                20,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
        faceanimframes.show_frame(8)
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                166,
                2494,
                255,
                0,
                20,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
        music.play(music.create_sound_expression(WaveShape.SQUARE,
                2450,
                1,
                255,
                0,
                20,
                SoundExpressionEffect.NONE,
                InterpolationCurve.CURVE),
            music.PlaybackMode.UNTIL_DONE)
    mood = 1
    moodtimer = 0
    inactionmenu = 3
    basic.pause(20)
    inactionmenu = 0
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def init_moods():
    global moodframes, faceanimframes
    moodframes = bigImages.create()
    moodframes.add_level_frame("30300:00000:33300:30300:00000")
    moodframes.add_level_frame("30300:00000:30300:33300:00000")
    faceanimframes = bigImages.create()
    faceanimframes.add_frame(images.create_image("""
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        . # . . .
        . . # . .
        . . . # #
        . . . # #
        . . # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        . # . . .
        . # . . .
        . # . . .
        # # # . .
        # # # . .
        """))
    faceanimframes.add_frame(images.create_image("""
        . # . # #
        # # . . #
        . # . . #
        # # . . #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        . # . # #
        # # # . #
        . # . . #
        # . # . #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        . # . # #
        . # # . #
        . # . . #
        . # # . #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        """))
    faceanimframes.add_frame(images.create_image("""
        # # # # #
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        """))
lastsate = ""
currentstate = ""
actionmenuframes: bigImages.BigImage = None
moodframes: bigImages.BigImage = None
faceanimframes: bigImages.BigImage = None
action = 0
inactionmenu = 0
slugish = 0
dirty = 0
thirst = 0
hunger = 0
mood = 0
slugishtimer = 0
dirtytimer = 0
thirsttimer = 0
hungertimer = 0
moodtimer = 0
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
power.full_power_on(FullPowerSource.A)
power.full_power_on(FullPowerSource.B)

def on_every_interval():
    if input.light_level() < 64:
        power.low_power_pause(10000)
loops.every_interval(500, on_every_interval)

def on_forever():
    global currentstate, lastsate, moodtimer, hungertimer, thirsttimer, dirtytimer, slugishtimer, mood, hunger, thirst, dirty, slugish
    currentstate = "" + str(mood) + ("" + str(hunger)) + ("" + str(thirst)) + ("" + str(dirty)) + ("" + str(slugish)) + ("" + str(inactionmenu))
    if inactionmenu:
        actionmenuframes.show_level_frame(action, 5)
        lastsate = currentstate
    elif lastsate != currentstate:
        show_face(mood, mood, hunger, thirst, dirty, slugish)
        lastsate = currentstate
    else:
        pass
    moodtimer = moodtimer + 1
    hungertimer = hungertimer + 1
    thirsttimer = thirsttimer + 1
    dirtytimer = dirtytimer + 1
    slugishtimer = slugishtimer + 1
    serial.write_value("mood timer", moodtimer)
    serial.write_value("time on in ms", control.millis())
    if 97000 < moodtimer:
        mood = 0
    if 194000 < hungertimer:
        hunger = 0
        moodtimer = moodtimer + 1
    if 70000 < thirsttimer:
        thirst = 0
        moodtimer = moodtimer + 1
    if 140000 < dirtytimer:
        dirty = 0
        moodtimer = moodtimer + 1
    if 194000 < slugishtimer:
        slugish = 0
        moodtimer = moodtimer + 1
basic.forever(on_forever)
