import { GlobalFonts } from "@napi-rs/canvas";
import { getFullPath } from "./lib/utils";

GlobalFonts.registerFromPath(getFullPath("..", "assets/fonts/Roboto-Regular.ttf"), "Roboto-Regular");
GlobalFonts.registerFromPath(getFullPath("..", "assets/fonts/Roboto-Bold.ttf"), "Roboto-Bold");

export * from "./lib/BannerBuilder";
export * from "./types";
