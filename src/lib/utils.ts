import { readFileSync } from "fs";
import { BannerColorPalette, BannerTemplate, BannerTemplateTypes } from "../types";
import { join } from "path";

export const convertNum = (num: number): string => {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(num);
};

export const getSafeIndex = (value: number | undefined, array: any[], defaultValue?: number): number => {
    return value && value >= 0 && value < array.length ? value : defaultValue || 0;
};

// export const getPalette = async (paletteName: string): Promise<BannerColorPalette> => {
//     return (await import(`../../data/palettes/${paletteName}.json`)) as BannerColorPalette;
// };

export const getPaletteSync = (paletteName: string): BannerColorPalette => {
    return JSON.parse(
        readFileSync(getFullPath("..", `data/palettes/${paletteName}.json`), { encoding: "utf-8" }) // fix (should be "..", "..", ...)
    ) as BannerColorPalette;
};

export const getTemplateSync = (templateType?: BannerTemplateTypes, templateName?: string): BannerTemplate => {
    return JSON.parse(
        readFileSync(getFullPath("..", `data/templates/${templateType}/${templateName}.json`), {
            encoding: "utf-8",
        }) // fix (should be "..", "..", ...)
    ) as BannerTemplate;
};

export const getFullPath = (...parts: string[]): string => {
    return join(__dirname, ...parts);
};
