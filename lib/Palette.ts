import { BannerColorPalette } from "../typings";
import { palettes } from "./data";
import { getSafeIndex } from "./utils";

export default class Palette {
    public palette: BannerColorPalette;

    constructor() {
        this.palette = palettes[0];
    }

    public setPalette(paletteNum: number): this {
        paletteNum = getSafeIndex(paletteNum, palettes);
        this.palette = palettes[paletteNum];

        return this;
    }

    public changePalette(palette: Partial<BannerColorPalette>): this {
        this.palette = { ...this.palette, ...palette };
        return this;
    }
}
