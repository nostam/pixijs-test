import { Container, TextStyle, Text } from "pixi.js";
import { ScenesManager } from "../scenes/ScenesManager";
import { IScene } from "../utils";

export default class MenuButton extends Container {
    private style: TextStyle;
    private txt: string;
    private ctx: Text;

    constructor(txt: string, scene: IScene, style?: TextStyle) {
        super();
        this.txt = txt;
        this.style = new TextStyle({
            fontFamily: "Arial",
            fontSize: 24,
            fill: [0xdddd00, 0x00ee99],
            align: "center",
            stroke: "#000000",
            strokeThickness: 4,
        });
        this.ctx = new Text(this.txt, this.style);
        this.ctx.anchor.set(0.5);
        // this.ctx.x = ScenesManager.width / 2;
        // this.ctx.y = ScenesManager.height / 2;
        this.ctx.interactive = true;
        this.ctx.buttonMode = true;
        this.ctx
            .on("click", () => MenuButton.goTo(scene))
            .on("tap", () => MenuButton.goTo(scene));
        this.addChild(this.ctx);
    }

    public static goTo(scene: IScene) {
        ScenesManager.changeScene(scene);
    }
}
