//Lancement

const Discord = require("discord.js")
const bot = new Discord.Client()

var prefix = ("/")


bot.login ("Mzc4OTYxNzc1MzI1ODcyMTQw.DOjHMQ.SNs-CoLflPrNVl_BRoCejb96Mjk")
bot.on("ready", () => {
    console.log("Bot Prêt !")
})
bot.on("guildMemberAdd", member => {
    var role = member.guild.roles.find("name", "Les Petites Putes")
    member.addRole(role)
})



//Commandes "Les Salopes de Banjolino"
bot.on("message", function(message) {
	if(message.author.equals(bot.user)) return;
	
	if(!message.content.startsWith(prefix)) return;
	
	var args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]) {
		default:
			message.channel.sendMessage("Commande Invalide");
			return;

		case "purge":
			if(!message.member.roles.some(r=>["Les Salopes de Banjolino"].includes(r.name))) {
				message.channel.sendMessage("Hé toi, seul les Salopes ont droit de faire ça")
				return;
			};
			
			message.channel.sendMessage("Le chat va être clean")
			message.channel.bulkDelete(100)
			
			break;
	};
});
