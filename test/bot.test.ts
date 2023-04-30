import { AttachmentBuilder, Client, Events, GatewayIntentBits } from "discord.js";
import BannerBuilder from "..";
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once(Events.ClientReady, (c) => {
    console.log(`Logged in as ${c.user.tag}!`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return;

    const banner = await new BannerBuilder({ type: "rank", variant: 0 })
        .setUsername(message.author.tag)
        .setCurrentXP(360)
        .setMaxXP(1350)
        .setAvatar(message.author.avatarURL()!)
        .toAttachment();

    if (message.content === "!rank") {
        await message.reply({
            files: [new AttachmentBuilder(banner).setName("banner.png")],
        });
    }
});

client.login(process.env.TOKEN);
