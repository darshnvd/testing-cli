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
  time      Show the current date and time

Examples:
  testing-cli help
  testing-cli version
  testing-cli greet --name "World"
  testing-cli time
    `);
  },
  version: () => {
    const { version } = require('../package.json');
    console.log(`testing-cli v${version}`);
  },
  greet: () => {
    const nameIndex = args.indexOf('--name');
    const name = nameIndex !== -1 && args[nameIndex + 1] ? args[nameIndex + 1] : 'World';
    console.log(`Hello, ${name}! Welcome to testing-cli. Have a great day!`);
  },
  time: () => {
    console.log(`Current time: ${new Date().toISOString()}`);
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
