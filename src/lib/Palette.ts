import { PaletteData } from "../types";
import { getPaletteSync } from "./utils";

export default class Palette {
    public paletteData: PaletteData;

    constructor() {
        this.paletteData = getPaletteSync("default").paletteData;
    }

    public setPalette(paletteName: string): this {
        this.paletteData = getPaletteSync(paletteName).paletteData;
        return this;
    }

    public changePalette(newPalette: Partial<PaletteData>): this {
        this.paletteData = { ...this.paletteData, ...newPalette };
        return this;
    }
}
