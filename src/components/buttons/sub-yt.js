module.exports = {
    data: {
        name: `sub-yt`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://www.youtube.com/channel/UCA2BhRrAsfN55wXR2t0QGTQ`
        });
    }
}