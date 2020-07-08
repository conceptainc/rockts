import { Command, flags } from "@oclif/command";

export default class Create extends Command {
  static description = "Command to create scaffolding for a specific project";

  static flags = {
    help: flags.help({ char: "h" }),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({ char: "n", description: "name to print" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static examples = ["$ create --react-native"];

  static args = [{ name: "file" }];

  async run() {
    const { args, flags } = this.parse(Create);

    const name = flags.name ?? "world";
    this.log(
      `hello ${name} from /Users/leofarias/Concepta/rockts/packages/cli/src/commands/create.ts`
    );
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`);
    }
  }
}