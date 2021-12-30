import { Container, Text } from "pixi.js";
import { ScenesManager } from "../scenes/ScenesManager";
export default class FPSMeter extends Container {
    public static frame: number;
    private fpsCounter: Text;
    constructor() {
        super();
        this.fpsCounter = new Text(`${ScenesManager.FPS} FPS`, {
            fontSize: 24,
            fill: 0xff0000,
        });
        this.fpsCounter.x = 10;
        this.fpsCounter.y = 10;
        this.addChild(this.fpsCounter);
    }
}
