import { palettes } from "./utils";

export default class Colors {
    public mainColor: string;
    public borderColor: string;
    public titleColor: string;
    public textColor: string;
    public backgroundColor: string;
    public progressColor: string;

    constructor() {
        this.mainColor = palettes[0].mainBlue;
        this.borderColor = palettes[0].darkBlue;
        this.titleColor = palettes[0].yellow;
        this.textColor = palettes[0].orange;
        this.backgroundColor = palettes[0].gray;
        this.progressColor = palettes[0].progressBlue;
    }

    public setMainColor(value: string): this {
        this.mainColor = value;
        return this;
    }

    public setBorderColor(value: string): this {
        this.borderColor = value;
        return this;
    }

    public setTitleColor(value: string): this {
        this.titleColor = value;
        return this;
    }

    public setTextColor(value: string): this {
        this.textColor = value;
        return this;
    }

    public setBackgroundColor(value: string): this {
        this.backgroundColor = value;
        return this;
    }

    public setProgressColor(value: string): this {
        this.progressColor = value;
        return this;
    }

    public setPalette(paletteNum: number): this {
        this.mainColor = palettes[paletteNum].mainBlue;
        this.borderColor = palettes[paletteNum].darkBlue;
        this.titleColor = palettes[paletteNum].yellow;
        this.textColor = palettes[paletteNum].orange;
        this.backgroundColor = palettes[paletteNum].gray;
        this.progressColor = palettes[paletteNum].progressBlue;
        return this;
    }
}
