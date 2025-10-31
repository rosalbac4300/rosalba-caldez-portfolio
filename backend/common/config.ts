interface BackendAppConfig {
	database: {
		connectionLimit: number;
		databaseName: string;
		host: string;
		password: string;
		port: number;
		user: string;
	};
}

export const backendAppConfig: BackendAppConfig = {
	database: {
		connectionLimit: Number(process.env.DATABASE_CONNECTION_LIMIT || 10),
		databaseName: process.env.DATABASE_NAME || '',
		host: process.env.DATABASE_HOST || '',
		password: process.env.DATABASE_PASSWORD || '',
		port: Number(process.env.DATABASE_PORT || 3306),
		user: process.env.DATABASE_USER || '',
	}
}