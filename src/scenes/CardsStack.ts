import { Container, Sprite } from "pixi.js";
import { ScenesManager } from "./ScenesManager";
import { IScene } from "../utils";
import { assets } from "../assets";

export class CardsStack extends Container implements IScene {
    private clampy: Sprite;
    private clampyVelocity: number;
    constructor() {
        super();

        // Inside assets.ts we have a line that says `{ name: "Clampy from assets.ts!", url: "./clampy.png" }`
        this.clampy = Sprite.from(assets[0].url);

        this.clampy.anchor.set(0.5);
        this.clampy.x = ScenesManager.width / 2;
        this.clampy.y = ScenesManager.height / 2;

        this.addChild(this.clampy);

        this.clampyVelocity = 5;
    }
    public update(framesPassed: number): void {
        // Lets move clampy!
        this.clampy.x += this.clampyVelocity * framesPassed;

        if (this.clampy.x > ScenesManager.width) {
            this.clampy.x = ScenesManager.width;
            this.clampyVelocity = -this.clampyVelocity;
        }

        if (this.clampy.x < 0) {
            this.clampy.x = 0;
            this.clampyVelocity = -this.clampyVelocity;
        }
    }

    public resize(screenWidth: number, screenHeight: number): void {
        // this.x = screenWidth / 2;
        // this.y = screenHeight / 2;
    }
}
