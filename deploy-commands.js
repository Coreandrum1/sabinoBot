const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();

const guildId = process.env.GUILD_ID;
const clientId = process.env.CLIENT_ID;
const key = process.env.KEY;

const commands = [
  new SlashCommandBuilder().setName('puto').setDescription('el que lo lea'),
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
  new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
  new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
  .map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(key);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
