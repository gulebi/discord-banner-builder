class Palette {
    public palette: BannerColorPalette;

    public setPalette(paletteNum: number): this;
    public changePalette(palette: Partial<BannerColorPalette>): this;
}

export interface BannerData {
    width: number;
    height: number;
    base: {
        borderWidth: number;
        borderRadius: number;
    };
    avatar: {
        placeholder: {
            x: number;
            y: number;
            radius: number;
        };
        image: {
            dx: number;
            dy: number;
            dw: number;
            dh: number;
        };
    };
    progress: {
        x: number;
        y: number;
        w: number;
        h: number;
        radii: number;
    };
    texts: {
        username: {
            x: number;
            y: number;
            align: CanvasTextAlign;
        };
        level: {
            x: number;
            y: number;
            align: CanvasTextAlign;
        };
        xp: {
            x: number;
            y: number;
            align: CanvasTextAlign;
        };
    };
}

export interface BannerColorPalette {
    mainColor: string;
    borderColor: string;
    usernameTextColor: string;
    levelTextColor: string;
    xpTextColor: string;
    backgroundColor: string;
    progressColor: string;
}

export type BannerTypes = "rank";

export interface BannerBuilderOptions {
    type?: BannerTypes;
    variant?: number;
}

export default class BannerBuilder extends Palette {
    constructor(options?: BannerBuilderOptions);

    public username: string;
    public avatar: string | Buffer;
    public level: number;
    public currentXP: number;
    public maxXP: number;

    public setUsername(username: string): this;
    public setAvatar(avatar: string | Buffer): this;
    public setLevel(level: number): this;
    public setCurrentXP(currentXP: number): this;
    public setMaxXP(maxXP: number): this;
    public setPalette(paletteNum: number): this;
    public toAttachment(): Promise<Buffer>;
}
