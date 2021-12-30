import { ScenesManager } from "./scenes/ScenesManager";
import { LoaderScene } from "./scenes/Loader";

ScenesManager.initialize(0x6495ed);
ScenesManager.changeScene(new LoaderScene());
