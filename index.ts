import { GlobalFonts } from "@napi-rs/canvas";
import { join } from "path";

GlobalFonts.registerFromPath(join(__dirname, "assets/fonts/Roboto-Regular.ttf"), "Roboto-Regular");
GlobalFonts.registerFromPath(join(__dirname, "assets/fonts/Roboto-Bold.ttf"), "Roboto-Bold");

export { default } from "./lib/BannerBuilder";
