const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.id === '711287792298360895')
        await message.delete();
    if(message.content.toLowerCase() === '!verify' && message.channel.id === '711287792298360895')
    {   
        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get('711287694277476402');
        if(role) {
            try {
                await message.member.roles.add(role);
                console.log("Role added!");
            }
            catch(err) {
                console.log(err);
            }
        }
    }
});

client.on('guildMemberAdd', member => {
    console.log(member.user.tag);
});
client.login(process.env.BOT_TOKEN);
