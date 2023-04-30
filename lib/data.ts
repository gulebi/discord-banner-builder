import { BannerColorPalette, BannerData, BannerTypes } from "../typings";

export const palettes: BannerColorPalette[] = [
    {
        mainColor: "#003566",
        borderColor: "#001D3D",
        usernameTextColor: "#FFC300",
        levelTextColor: "#FB8500",
        xpTextColor: "#FB8500",
        backgroundColor: "#2C333A",
        progressColor: "#0B2545",
    },
];

export const banners: Record<BannerTypes, BannerData[]> = {
    rank: [
        {
            width: 1080,
            height: 360,
            base: {
                borderWidth: 15,
                borderRadius: 20,
            },
            avatar: {
                placeholder: {
                    x: 189,
                    y: 180,
                    radius: 117,
                },
                image: {
                    dx: 72,
                    dy: 63,
                    dw: 234,
                    dh: 234,
                },
            },
            progress: {
                x: 347,
                y: 262,
                w: 661,
                h: 50,
                radii: 25,
            },
            texts: {
                username: {
                    x: 988,
                    y: 88,
                    align: "right",
                },
                level: {
                    x: 988,
                    y: 160,
                    align: "right",
                },
                xp: {
                    x: 988,
                    y: 211,
                    align: "right",
                },
            },
        },
        {
            width: 1080,
            height: 360,
            base: {
                borderWidth: 15,
                borderRadius: 20,
            },
            avatar: {
                placeholder: {
                    x: 189,
                    y: 180,
                    radius: 117,
                },
                image: {
                    dx: 72,
                    dy: 63,
                    dw: 234,
                    dh: 234,
                },
            },
            progress: {
                x: 347,
                y: 262,
                w: 661,
                h: 50,
                radii: 25,
            },
            texts: {
                username: {
                    x: 367,
                    y: 134,
                    align: "left",
                },
                level: {
                    x: 367,
                    y: 211,
                    align: "left",
                },
                xp: {
                    x: 988,
                    y: 211,
                    align: "right",
                },
            },
        },
        {
            width: 805,
            height: 360,
            base: {
                borderWidth: 15,
                borderRadius: 15,
            },
            avatar: {
                placeholder: {
                    x: 174,
                    y: 156,
                    radius: 82,
                },
                image: {
                    dx: 92,
                    dy: 74,
                    dw: 172,
                    dh: 172,
                },
            },
            progress: {
                x: 72,
                y: 262,
                w: 661,
                h: 50,
                radii: 25,
            },

            texts: {
                username: {
                    x: 713,
                    y: 88,
                    align: "right",
                },
                level: {
                    x: 713,
                    y: 160,
                    align: "right",
                },
                xp: {
                    x: 713,
                    y: 211,
                    align: "right",
                },
            },
        },
    ],
};
