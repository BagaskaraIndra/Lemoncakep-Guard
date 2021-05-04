const discord = require("discord.js");
const Lc = new discord.Client();
var prefix = "Guard ";

Lc.once("ready", () => {
	console.log("Bot sudah Login");
});

Lc.on("message", msg => {
	if (msg.content.startsWith(`${pefix}`) || msg.authir.bot) return;
	
	const args = msg.content.slice(prefix.length).trim.split(" ");
	const command = args.shift().toLowerCase();
	
	if (commands==="ping") {
		msg.channel.send("Pong");
	}
});

Lc.login(process.env.TOKEN0);