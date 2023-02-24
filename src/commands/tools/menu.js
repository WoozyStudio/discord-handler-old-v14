const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("Retun a select menu."),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `Option #1`,
          value: `https://www.youtube.com/channel/UCA2BhRrAsfN55wXR2t0QGTQ`,
        }),
        new SelectMenuOptionBuilder({
          label: `Option #2`,
          value: `https://discord.com/app`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
