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

export type Color = `#${string}` | `rgb(${number}, ${number}, ${number})`;

export interface BannerColorPalette {
    mainColor: Color;
    borderColor: Color;
    usernameTextColor: Color;
    levelTextColor: Color;
    xpTextColor: Color;
    backgroundColor: Color;
    progressColor: Color;
}

export type BannerTypes = "rank";

export interface BannerBuilderOptions {
    type?: BannerTypes;
    variant?: number;
}
