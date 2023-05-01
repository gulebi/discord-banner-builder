import { GlobalFonts } from "@napi-rs/canvas";
import { join } from "path";

GlobalFonts.registerFromPath(join(__dirname, "..", "assets/fonts/Roboto-Regular.ttf"), "Roboto-Regular");
GlobalFonts.registerFromPath(join(__dirname, "..", "assets/fonts/Roboto-Bold.ttf"), "Roboto-Bold");

export * from "./lib/BannerBuilder";
export * from "./types";
