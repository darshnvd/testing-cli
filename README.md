# testing-cli

A command-line interface tool for testing purposes.

## Getting Started

Clone the repository and start building your CLI tool:

```bash
git clone https://github.com/darshnvd/testing-cli.git
cd testing-cli
npm install
```

## Usage

Run the CLI directly:

```bash
node src/index.js <command>
```

Or link it globally:

```bash
npm link
testing-cli <command>
```

### Available Commands

| Command   | Description                |
|-----------|----------------------------|
| `help`    | Show the help message      |
| `version` | Show the current version   |
| `greet`   | Greet the user             |

### Examples

```bash
testing-cli help
testing-cli version
testing-cli greet --name "Alice"
```

## Contributing

Feel free to open issues or submit pull requests.

## License

MIT
