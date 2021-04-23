import { ConnectionOptions, createConnection } from "typeorm";

import Char from "./entities/Char";
import Class from "./entities/Class";

const options: ConnectionOptions = {
  type: "postgres",
  url: process.env.PG_STRING!,
  synchronize: true,
  entities: [Char, Class],
};

export default async function connect() {
  await createConnection(options);
}
