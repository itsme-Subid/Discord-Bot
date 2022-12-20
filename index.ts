import { Client, GatewayIntentBits, Partials } from "discord.js";
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.User,
    Partials.Channel,
    Partials.Message,
    Partials.Reaction,
  ],
});
import { Msg } from "./Type";
import { hacker } from "./Hacker";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.BOT_TOKEN;
client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

client.on("messageCreate", async (message: Msg) => {
  if (message.author?.bot) return;
  else if (/yo /.test(message.content.toLowerCase())) {
    message.react("🔥");
    message.reply("YO!");
  } else if (/hi /.test(message.content.toLowerCase())) {
    message.react("😉");
    message.reply("Hello ji!");
  } else if (/hack /.test(message.content.toLowerCase())) {
    message.react("😈");
    hacker(message);
  }
});

client.login(token).catch(console.error);
