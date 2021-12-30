import { Application } from "@pixi/app";
import { IScene } from "../utils";
// import FPSCounter from "../components/FPS";

export class ScenesManager {
    private constructor() {}
    private static app: Application;
    private static currentScene: IScene;

    public static get width(): number {
        return Math.max(
            document.documentElement.clientWidth,
            window.innerWidth || 0
        );
    }
    public static get height(): number {
        return Math.max(
            document.documentElement.clientHeight,
            window.innerHeight || 0
        );
    }

    public static get FPS(): number {
        return ScenesManager.app.ticker.FPS;
    }

    public static initialize(background: number): void {
        ScenesManager.app = new Application({
            view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: background,
            resizeTo: window,
        });
        ScenesManager.app.ticker.add(ScenesManager.update);
        window.addEventListener("resize", ScenesManager.resize);
    }

    public static resize(): void {
        if (ScenesManager.currentScene) {
            ScenesManager.currentScene.resize(
                ScenesManager.width,
                ScenesManager.height
            );
        }
    }

    public static changeScene(newScene: IScene): void {
        if (newScene && ScenesManager.currentScene) {
            ScenesManager.app.stage.removeChild(ScenesManager.currentScene);
            ScenesManager.currentScene.destroy();
        }
        ScenesManager.currentScene = newScene;
        ScenesManager.app.stage.addChild(ScenesManager.currentScene);
    }

    private static update(framesPassed: number): void {
        if (ScenesManager.currentScene) {
            ScenesManager.currentScene.update(framesPassed);
        }
    }
}
