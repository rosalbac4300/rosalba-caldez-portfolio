import { Kysely, Migration, MigrationProvider, Migrator, MysqlDialect } from "kysely";
import { createPool } from "mysql2";

import { DatabaseSchema } from "../common/database.types.js";
import { backendAppConfig } from "../common/config.js";

class CodeMigrationProvider implements MigrationProvider {
	async getMigrations(): Promise<Record<string, Migration>> {
		const migrations: Record<string, Migration> = {};

		return migrations;
	}
}

class DatabaseService {
	private dialect: MysqlDialect;
	private db: Kysely<DatabaseSchema>;

	constructor () {
		this.dialect = new MysqlDialect({
			pool: createPool({
				database: backendAppConfig.database.databaseName,
				host: backendAppConfig.database.host,
				user: backendAppConfig.database.user,
				password: backendAppConfig.database.password,
				port: backendAppConfig.database.port,
				connectionLimit: backendAppConfig.database.connectionLimit,
			}),
		});

		this.db = new Kysely<DatabaseSchema>({
			dialect: this.dialect,
		});
	}

	public async MigrateAll(): Promise<void> {
		const migrator = new Migrator({
			allowUnorderedMigrations: false,
			db: this.db,
			provider: new CodeMigrationProvider()
		})

		const { error, results } = await migrator.migrateToLatest();

		results?.forEach((result) => {
			if (result.status === 'Success') {
				console.info(`Migration "${result.migrationName} was executed successfuly"`);
			} else if (result.status === 'Error') {
				console.info(`Migration "${result.migrationName} has failed to execute"`);
			}
		})

		if (error) {
			console.error('Failed to execute migrations');
			console.error(error);
			process.exit(1);
		}
	}

	public GetDB(): Kysely<DatabaseSchema> {
		return this.db;
	}
}

export default DatabaseService;
