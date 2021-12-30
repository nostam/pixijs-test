import { Container, Sprite } from "pixi.js";
import { ScenesManager } from "./ScenesManager";
import { IScene } from "../utils";

export class CardsStack extends Container implements IScene {
    constructor() {
        super();
    }

    public update(framesPassed: number): void {}

    public resize(screenWidth: number, screenHeight: number): void {
        // this.x = screenWidth / 2;
        // this.y = screenHeight / 2;
    }
}
