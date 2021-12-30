import { Container, Sprite, Text } from "pixi.js";
import { ScenesManager } from "./ScenesManager";
import { IScene } from "../utils";
import { assets } from "../assets";

export class EmojiText extends Container implements IScene {
    // private clampy: Sprite;
    // private clampyVelocity: number;
    private startText;
    constructor() {
        super();

        // Inside assets.ts we have a line that says `{ name: "Clampy from assets.ts!", url: "./clampy.png" }`
        this.startText = new Text("Hello There", {
            fontFamily: "Arial",
            fontSize: 64,
            fill: 0xff1010,
            align: "center",
        });
        this.startText.interactive = true;
        this.startText.anchor.set(0.5);
        this.startText.x = ScenesManager.width / 2;
        this.startText.y = ScenesManager.height / 2;
        this.startText.on("click", () => alert("hi"));
        this.addChild(this.startText);
    }
    public update(framesPassed: number): void {
        // Lets move clampy!
        // this.clampy.x += this.clampyVelocity * framesPassed;
        // if (this.clampy.x > ScenesManager.width) {
        //     this.clampy.x = ScenesManager.width;
        //     this.clampyVelocity = -this.clampyVelocity;
        // }
        // if (this.clampy.x < 0) {
        //     this.clampy.x = 0;
        //     this.clampyVelocity = -this.clampyVelocity;
        // }
    }

    public resize(screenWidth: number, screenHeight: number): void {}
}
