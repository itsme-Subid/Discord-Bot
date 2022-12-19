const { Client, GatewayIntentBits, Partials } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.GuildMember,
    Partials.Message,
    Partials.Reaction,
  ],
});
const dotenv = require("dotenv");
dotenv.config();

const token = process.env.BOT_TOKEN;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on(
  "messageCreate",
  async (message: {
    author: { bot: any };
    content: string;
    reply: (message: string) => void;
    react: (reaction: string) => void;
  }) => {
    if (message.author.bot) return;
    else if (message.content === "yo") {
      message.reply("YO!");
      message.react("🔥");
    } else if (/hi/.test(message.content)) {
      message.reply("Hello ji!");
      message.react("😉");
    }
  }
);

client.login(token).catch(console.error);
