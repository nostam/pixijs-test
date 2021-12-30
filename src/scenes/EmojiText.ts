import { Container, Sprite, Text } from "pixi.js";
import { ScenesManager } from "./ScenesManager";
import { IScene } from "../utils";

export class EmojiText extends Container implements IScene {
    private ctx;

    constructor() {
        super();
        this.ctx = Sprite.from("https://i.imgur.com/9ZC02Oss.jpg");

        this.addChild(this.ctx);
    }

    public static get txt(): string {
        const dictionary = [
            "dad",
            "tea",
            "son",
            "two",
            "sir",
            "way",
            "ear",
            "mud",
            "pie",
            "law",
        ];
        return dictionary[Math.floor(Math.random() * dictionary.length)];
    }

    public static get img(): string {
        const images = [
            "https://i.imgur.com/9ZC02Oss.jpg",
            "https://i.imgur.com/9gX2gs.png",
            "https://i.imgur.com/b5dlRs.png",
            "https://i.imgur.com/lTflrs.png",
            "https://i.imgur.com/416Pos.png",
        ];
        return images[Math.floor(Math.random() * images.length)];
    }

    public update(framesPassed: number): void {
        if (framesPassed >= 2) {
        }
    }

    public resize(screenWidth: number, screenHeight: number): void {
        this.x = screenWidth / 2;
        this.y = screenHeight / 2;
    }
}
