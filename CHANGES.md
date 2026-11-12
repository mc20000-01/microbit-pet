# Changelog

All commits, newest first. Format: short hash, message, what changed and why.

## Unreleased
- (nothing yet)

## 2026-11-11

- `6619d22` i added mores: touching the logo pets the pet. Plays a two-frame happy animation (`faceanimframes` 7 and 8) with chirp sounds, then sets `mood = 1` and resets `moodtimer`. Mood also drops faster while needs are unmet: `moodtimer` gets +1 each tick for every need that has run out. Added `mood` to the top-level declarations and `moodtimer = 0` at startup.
- `80f5b35` add changelog: added `CHANGES.md` with the history of earlier commits. No code changes.
- `57ae071` DONE!!!!!! wooop wooooop: each action resets its own timer, so a need stays satisfied after you feed, water or clean the pet. Timers start at 0. Removed the extra startup `show_face` call.
- `45f9673` FINISH HIM: A confirms the chosen action. Plays a 7-frame face animation (`faceanimframes`) with a sound per action, then sets the matching need (hunger, thirst, dirty, sluggish). Added `inactionmenu` hold states.
- `d9f8614` Remove generate_release_notes step from release workflow: removed the invalid step added in `e76c6f1`.
- `e76c6f1` Enable release notes generation in workflow: attempted release notes in the workflow. Added invalid YAML, fixed in `d9f8614`.
- `d2db403` fully impl mood timer: timers count up in the main loop. Mood, hunger, thirst, dirty and sluggish each flip to the "needs it" state after a threshold (97000, 194000, 70000, 140000, 194000 ticks). Serial output of the mood timer and `control.millis()`, for tuning.
- `07239fa` timers: added a counter per need. Moved the state variables to the top level so the loop can change them. Startup face is now mood frame 0.
- `d4e815a` Update release workflow to include additional files: release also attaches `main.ts` and `main.py` next to `binary.hex`.
- `1d5be7e` Add GitHub Actions workflow for build and release: on push to master it builds with `makecode build` and publishes `built/binary.hex` as release `build-N`.
- `bda8cf3` more things: `main.py` added to `pxt.json`. Target bumped 9.0.12 to 9.1.2. Renamed `emotion` parameters to avoid name clashes. State string wraps values in `"" +`.
- `de72a00` sounds more alot i did: sounds for A, B and the menu. A exits the action menu. Moods moved from image literals to level frames (`moodframes`). `show_face` takes a frame number. Added a 5th menu item (cancel, an X) and `% 5` cycling.
- `415a437` update: needs LEDs use `led.plot(value + 4, y)` instead of brightness. Added state variables (`mood`, `hunger`, `thirst`, `dirty`, `slugish`). The loop redraws only when the state changes.
- `3e59399` refactor again: `bigimage.ts` gains brightness frames (levels 0-3, 25-digit text per frame) and level blocks (add, set, get, remove, count, show with column limit). The old image-frame blocks stay for legacy projects. Action menu icons moved to level frames.
- `1d6abc9` fix last push: moved `bigImages.create()` into `init_actions` so it runs before use.
- `8eeb050` add actions: replaced the stub `bigimage.ts` with the `bigImages` extension (create big image, add frame, remove frame, frame count, get frame, show frame). Added the B-button action menu with 4 icons.
- `3893870` update and prep for exts: added `bigimage.ts` (template) and listed it in `pxt.json`. Editor set to TypeScript.
- `2a1c60d` refactor and prep for ext testing: moods moved into `init_moods` with happy and sad faces.
- `da13f38` add better rendering sys: `show_face` draws the face then the needs, so the needs column isn't wiped.
- `a80a935` add basic emotion display: `emotion()` draws the five need LEDs on column 4 with brightness.
- `4344bb3` Initial files for MakeCode project: MakeCode project skeleton (`pxt.json`, `main.ts`, `main.blocks`, config).
- `2cb3e53` Initialize empty repo: `.gitignore` only.
