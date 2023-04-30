import { createCanvas, loadImage } from "@napi-rs/canvas";
import { convertNum, getSafeIndex } from "./utils";
import Palette from "./Palette";
import { BannerData, BannerTypes } from "../typings";
import { banners } from "./data";

export default class BannerBuilder extends Palette {
    public username: string;
    public avatar: string | Buffer;
    public level: number;
    public currentXP: number;
    public maxXP: number;

    public banner: BannerData;

    constructor({ type, variant }: { type?: BannerTypes; variant?: number }) {
        super();
        this.username = "Guleb#2437";
        this.avatar =
            "https://cdn.discordapp.com/attachments/845152870403407885/1102074474624471181/default-avatar.png";
        this.level = 1;
        this.currentXP = 667;
        this.maxXP = 865;

        type = type || "rank";
        variant = getSafeIndex(variant, banners[type]);

        this.banner = banners[type][variant];
    }

    public setUsername(username: string): this {
        this.username = username;
        return this;
    }

    public setAvatar(avatar: string | Buffer): this {
        this.avatar = avatar;
        return this;
    }

    public setLevel(level: number): this {
        this.level = level;
        return this;
    }

    public setCurrentXP(currentXP: number): this {
        this.currentXP = currentXP;
        return this;
    }

    public setMaxXP(maxXP: number): this {
        this.maxXP = maxXP;
        return this;
    }

    public async toAttachment(): Promise<Buffer> {
        const canvas = createCanvas(this.banner.width, this.banner.height);
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = this.palette.mainColor;
        ctx.strokeStyle = this.palette.borderColor;
        ctx.lineWidth = this.banner.base.borderWidth;
        ctx.beginPath();
        // @ts-ignore
        ctx.roundRect(0, 0, canvas.width, canvas.height, this.banner.base.borderRadius);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        const { image: avatarImg, placeholder: avatarPh } = this.banner.avatar;

        const avatar = await loadImage(this.avatar);

        ctx.save();
        ctx.fillStyle = this.palette.backgroundColor;
        ctx.beginPath();
        ctx.arc(avatarPh.x, avatarPh.y, avatarPh.radius, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        ctx.clip();
        ctx.drawImage(avatar, avatarImg.dx, avatarImg.dy, avatarImg.dw, avatarImg.dh);
        ctx.restore();

        const progress = this.banner.progress;

        ctx.fillStyle = this.palette.backgroundColor;
        ctx.beginPath();
        // @ts-ignore
        ctx.roundRect(progress.x, progress.y, progress.w, progress.h, progress.radii);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = this.palette.progressColor;
        ctx.beginPath();
        // @ts-ignore
        ctx.roundRect(progress.x, progress.y, progress.w * (this.currentXP / this.maxXP), progress.h, progress.radii);
        ctx.closePath();
        ctx.fill();

        const texts = this.banner.texts;

        ctx.textBaseline = "top";
        ctx.textAlign = texts.username.align;
        ctx.fillStyle = this.palette.usernameTextColor;
        ctx.font = '48px "Roboto-Bold"';
        ctx.fillText(this.username, texts.username.x, texts.username.y);

        ctx.font = '36px "Roboto-Regular"';
        ctx.fillStyle = this.palette.levelTextColor;
        ctx.textAlign = texts.level.align;
        ctx.fillText(`Level: ${this.level}`, texts.level.x, texts.level.y);
        ctx.fillStyle = this.palette.xpTextColor;
        ctx.textAlign = texts.xp.align;
        ctx.fillText(`XP: ${convertNum(this.currentXP)} / ${convertNum(this.maxXP)}`, texts.xp.x, texts.xp.y);

        return canvas.toBuffer("image/png");
    }
}
