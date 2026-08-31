#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

const commands = {
  help: () => {
    console.log(`
testing-cli - A simple CLI tool for testing purposes

Usage:
  testing-cli <command> [options]

Commands:
  help      Show this help message
  version   Show the current version
  greet     Greet the user
  joke      Tell a random programming joke

Examples:
  testing-cli help
  testing-cli version
  testing-cli greet --name "World"
  testing-cli joke
    `);
  },
  version: () => {
    const { version } = require('../package.json');
    console.log(`testing-cli v${version}`);
  },
  greet: () => {
    const nameIndex = args.indexOf('--name');
    const name = nameIndex !== -1 && args[nameIndex + 1] ? args[nameIndex + 1] : 'World';
    console.log(`Hello, ${name}! Welcome to testing-cli.`);
  },
  joke: () => {
    const jokes = [
      'Why do programmers prefer dark mode? Because light attracts bugs.',
      'There are only 10 types of people in the world: those who understand binary and those who don\'t.',
      'A SQL query walks into a bar, sees two tables, and asks... "Can I JOIN you?"',
      'Why do Java developers wear glasses? Because they can\'t C#.',
      'How many programmers does it take to change a light bulb? None. That\'s a hardware problem.',
      'Why was the JavaScript developer sad? Because he didn\'t Node how to Express himself.',
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(`😄 ${randomJoke}`);
  },
};

if (!command || !commands[command]) {
  if (command) {
    console.error(`Unknown command: "${command}"\n`);
  }
  commands.help();
  process.exit(command ? 1 : 0);
}

commands[command]();
