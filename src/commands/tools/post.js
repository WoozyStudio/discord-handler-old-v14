const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("changelog")
        .setDescription('Make a post in a Forum channel.'),
    async execute(interaction, client) {

        const channel = client.channels.cache.get('1033842674379264130');
        channel.threads.create({ name: 'Changelog 1', message: { content: 'There are no new changelogs.' } })

        await interaction.reply({ content: "New changelog created successfully!" })
    }
}