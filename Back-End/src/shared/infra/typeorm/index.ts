import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "vxtel_db"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    await Object.assign(defaultOptions, {
      host,
      database: defaultOptions.database,
      cache: true,
      migrationsRun: true,
    })
  );
};
