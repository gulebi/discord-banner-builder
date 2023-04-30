class Colors {
    public mainColor: string;
    public borderColor: string;
    public titleColor: string;
    public textColor: string;
    public backgroundColor: string;
    public progressColor: string;

    public setMainColor(value: string): this;
    public setBorderColor(value: string): this;
    public setTitleColor(value: string): this;
    public setTextColor(value: string): this;
    public setBackgroundColor(value: string): this;
    public setProgressColor(value: string): this;
}

export interface Banner {
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

export default class BannerBuilder extends Colors {
    constructor(type?: "rank", variant?: number);

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
