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

export interface BannerTemplate {
    name: string;
    variantNum: number;
    palette: string;
    bannerData: BannerData;
}

export type Color = `#${string}` | `rgb(${number}, ${number}, ${number})`;

export interface PaletteData {
    mainColor: Color;
    borderColor: Color;
    usernameTextColor: Color;
    levelTextColor: Color;
    xpTextColor: Color;
    backgroundColor: Color;
    progressColor: Color;
}

export interface BannerColorPalette {
    name: string;
    paletteNum: number;
    paletteData: PaletteData;
}

export enum BannerTemplateTypes {
    "rank" = "rank",
}

export interface BannerBuilderOptions {
    type?: BannerTemplateTypes;
    variant?: number;
}
