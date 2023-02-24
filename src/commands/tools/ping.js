const { SlashCommandBuilder, InteractionCollector } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription('Retun my Ping'),
    async execute(interaction, client) {
        interaction.reply(`API Latency: ${client.ws.ping}`)
    }
}