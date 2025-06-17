import { Client, type ParseClient } from "seyfert";
 
const client = new Client({
    commands: {
        prefix: (m) => {
            return ["s!"]
        }
    },
});
 
client.start()
  .then(() => client.uploadCommands({ cachePath: './commands.json' }));

  declare module 'seyfert' {
    interface UsingClient extends ParseClient<Client<true>> { }
}