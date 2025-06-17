import { config } from "seyfert";
 
export default config.bot({
    token: process.env.BOT_TOKEN ?? "",
    locations: {
        base: "lib",
        commands: "commands"
    },
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    publicKey: "...",
    port: 4444,
});