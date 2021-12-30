import { Container } from "pixi.js";
import MenuButton from "../components/MenuButton";
import { EmojiText } from "./EmojiText";
import { IScene } from "../utils";
import { CardsStack } from "./CardsStack";
import { ScenesManager } from "../scenes/ScenesManager";
export class LandingMenu extends Container implements IScene {
    private cardsStackBtn: MenuButton;
    private emojiTextBtn: MenuButton;
    private fireBtn: MenuButton;

    constructor() {
        super();
        this.cardsStackBtn = new MenuButton("Cards Stack", new CardsStack());
        this.emojiTextBtn = new MenuButton("Emoji & Text", new EmojiText());
        this.fireBtn = new MenuButton("Fire", new EmojiText());
        this.emojiTextBtn.y += 50;
        this.fireBtn.y += 100;
        this.addChild(this.cardsStackBtn);
        this.addChild(this.emojiTextBtn);
        this.addChild(this.fireBtn);
        this.position.x = (ScenesManager.width - this.width) / 2;
        this.position.y = (ScenesManager.height - this.height) / 2;
    }

    public update(framesPassed: number) {}

    public resize(screenWidth: number, screenHeight: number) {
        this.x = screenWidth / 2;
        this.y = screenHeight / 2;
    }
}
