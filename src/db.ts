import { ConnectionOptions, createConnection } from "typeorm";

import Char from "./entities/Char";

const options: ConnectionOptions = {
  type: "postgres",
  url: process.env.PG_STRING!,
  synchronize: true,
  entities: [Char],
};

export default async function connect() {
  await createConnection(options);
}
