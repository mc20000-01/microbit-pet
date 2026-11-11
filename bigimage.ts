//% color=#7600A8 weight=70
namespace bigImages {
    // brightness for levels 0, 1, 2, 3
    const LEVELS = [0, 30, 110, 255]

    function parseFrame(text: string): number[] {
        let px: number[] = []
        for (let i = 0; i < text.length && px.length < 25; i++) {
            let c = text.charCodeAt(i)
            if (c >= 48 && c <= 57) {
                let v = c - 48
                if (v > 3) v = 3
                px.push(v)
            }
        }
        while (px.length < 25) px.push(0)
        return px
    }

    export class BigImage {
        frames: Image[]
        levelFrames: number[][]

        constructor() {
            this.frames = []
            this.levelFrames = []
        }

        // ---------- LEGACY BLOCKS (unchanged) ----------

        //% blockId=bigimg_add_frame
        //% block="%bigImage(bigImage)|add frame %frame=device_build_image"
        //% blockNamespace=bigImages
        //% weight=90
        addFrame(frame: Image): void {
            this.frames.push(frame)
        }

        //% blockId=bigimg_remove_frame
        //% block="%bigImage(bigImage)|remove frame %index"
        //% blockNamespace=bigImages
        //% weight=80
        removeFrame(index: number): void {
            if (index >= 0 && index < this.frames.length) {
                this.frames.removeAt(index)
            }
        }

        //% blockId=bigimg_frame_count
        //% block="%bigImage(bigImage)|frame count"
        //% blockNamespace=bigImages
        //% weight=70
        frameCount(): number {
            return this.frames.length
        }

        //% blockId=bigimg_get_frame
        //% block="%bigImage(bigImage)|get frame %index"
        //% blockNamespace=bigImages
        //% weight=60
        getFrame(index: number): Image {
            if (this.frames.length == 0) {
                return images.createImage(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            }
            if (index < 0) index = 0
            if (index >= this.frames.length) index = this.frames.length - 1
            return this.frames[index]
        }

        //% blockId=bigimg_show_frame
        //% block="%bigImage(bigImage)|show frame %index"
        //% blockNamespace=bigImages
        //% weight=50
        showFrame(index: number): void {
            this.getFrame(index).showImage(0)
        }

        // ---------- NEW: BRIGHTNESS LEVEL FRAMES (levels 0-3) ----------

        //% blockId=bigimg_add_level_frame
        //% block="%bigImage(bigImage)|add level frame %rows"
        //% rows.defl="00000:00000:00000:00000:00000"
        //% blockNamespace=bigImages
        //% weight=45
        addLevelFrame(rows: string): void {
            this.levelFrames.push(parseFrame(rows))
        }

        //% blockId=bigimg_set_level
        //% block="%bigImage(bigImage)|set level frame %index|x %x y %y to level %level"
        //% x.min=0 x.max=4 y.min=0 y.max=4 level.min=0 level.max=3
        //% blockNamespace=bigImages
        //% weight=44
        setLevel(index: number, x: number, y: number, level: number): void {
            if (index < 0 || index >= this.levelFrames.length) return
            if (x < 0 || x > 4 || y < 0 || y > 4) return
            if (level < 0) level = 0
            if (level > 3) level = 3
            this.levelFrames[index][y * 5 + x] = level
        }

        //% blockId=bigimg_get_level
        //% block="%bigImage(bigImage)|level frame %index|level at x %x y %y"
        //% x.min=0 x.max=4 y.min=0 y.max=4
        //% blockNamespace=bigImages
        //% weight=43
        getLevel(index: number, x: number, y: number): number {
            if (index < 0 || index >= this.levelFrames.length) return 0
            if (x < 0 || x > 4 || y < 0 || y > 4) return 0
            return this.levelFrames[index][y * 5 + x]
        }

        //% blockId=bigimg_remove_level_frame
        //% block="%bigImage(bigImage)|remove level frame %index"
        //% blockNamespace=bigImages
        //% weight=42
        removeLevelFrame(index: number): void {
            if (index >= 0 && index < this.levelFrames.length) {
                this.levelFrames.removeAt(index)
            }
        }

        //% blockId=bigimg_level_frame_count
        //% block="%bigImage(bigImage)|level frame count"
        //% blockNamespace=bigImages
        //% weight=41
        levelFrameCount(): number {
            return this.levelFrames.length
        }

        //% blockId=bigimg_show_level_frame
        //% block="%bigImage(bigImage)|show level frame %index|columns %cols"
        //% cols.defl=5 cols.min=1 cols.max=5
        //% blockNamespace=bigImages
        //% weight=40
        showLevelFrame(index: number, cols: number): void {
            if (index < 0 || index >= this.levelFrames.length) return
            if (cols < 1) cols = 1
            if (cols > 5) cols = 5
            let f = this.levelFrames[index]
            for (let y = 0; y < 5; y++) {
                for (let x = 0; x < cols; x++) {
                    led.plotBrightness(x, y, LEVELS[f[y * 5 + x]])
                }
            }
        }
    }

    //% blockId=bigimg_create
    //% block="create big image"
    //% blockSetVariable=bigImage
    //% weight=100
    export function create(): BigImage {
        return new BigImage()
    }
}