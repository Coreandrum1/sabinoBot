const { Client, Intents, Interaction } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
  console.log('Listísimo');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;
  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply('Server Info');
  } else if (commandName === 'user') {
    await interaction.reply('User Info');
  } else if (commandName === 'puto') {
    await interaction.reply('el que lo lea');
  }
});

client.login(process.env.KEY);
