export const convertNum = (num: number): string => {
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 2 }).format(num);
};

export const getSafeIndex = (value: number | undefined, array: any[], defaultValue?: number): number => {
    return value && value >= 0 && value < array.length ? value : defaultValue || 0;
};
