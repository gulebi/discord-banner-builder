const { AttachmentBuilder, Client, Events, GatewayIntentBits } = require("discord.js");
const { BannerBuilder, BannerTemplateTypes } = require("../dist");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    const banner = await new BannerBuilder({ type: BannerTemplateTypes.rank })
        .setUsername(message.author.tag)
        .setCurrentXP(360)
        .setMaxXP(1350)
        .setAvatar(`${message.author.avatarURL()}?size=512`)
        .toAttachment();

    if (message.content === "!rank") {
        await message.reply({
            files: [new AttachmentBuilder(banner).setName("banner.png")],
        });
    }
});

client.login(process.env.TOKEN);
