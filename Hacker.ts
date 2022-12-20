import { Msg } from "./Type";

export const hacker = async (message: Msg) => {
  const DDOSmessages = [
    "Starting DDOS attack on target...",
    "DDOS attack failed!",
    "Trying again...",
    "DDOS attack failed!",
    "Trying again...",
    "DDOS attack failed!",
    "Trying another...",
  ];
  const bruteForceMessages = [
    "Starting brute force attack on target...",
    "Brute force attack failed!",
    "Trying again...",
    "Brute force attack failed!",
    "Trying again...",
    "Brute force attack successful!",
  ];
  const hackCompleteMessages = [
    "Hacking complete!",
    "Hacked!",
    "Happy hacking!",
  ];
  message.reply(`Hacking ${getAuthorName(message)}...`).then(async () => {
    await message.reply(DDOSmessages[0]).then(async (msg: Msg) => {
      for (let index = 1; index < DDOSmessages.length; index++) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            msg.edit(DDOSmessages[index]);
            resolve();
          }, 3000);
        });
      }
      await message.reply(bruteForceMessages[0]).then(async (msg: Msg) => {
        for (let index = 1; index < bruteForceMessages.length; index++) {
          await new Promise<void>((resolve) => {
            setTimeout(() => {
              msg.edit(bruteForceMessages[index]);
              resolve();
            }, 3000);
          });
        }
      });
      hackCompleteMessages.forEach(async (msg, index) => {
        if (index !== 1) message.reply(msg);
        else message.reply(getAuthorName(message) + " " + msg);
      });
    });
  });
};

const getAuthorName = (message: Msg) => {
  let authorName = /this.author/;
  let me = /me/;
  if (
    authorName.test(message.content.split(" ")[1].toLowerCase()) ||
    me.test(message.content.split(" ")[1].toLowerCase())
  )
    return message.author?.username?.toUpperCase();
  else return message.content.split(" ")[1].toUpperCase();
};
