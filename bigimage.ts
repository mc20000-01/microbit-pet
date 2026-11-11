//% color=#7600A8 weight=70
namespace bigImages {
    export class BigImage {
        frames: Image[]

        constructor() {
            this.frames = []
        }

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
    }

    //% blockId=bigimg_create
    //% block="create big image"
    //% blockSetVariable=bigImage
    //% weight=100
    export function create(): BigImage {
        return new BigImage()
    }
}