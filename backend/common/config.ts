interface BackendAppConfig {
	database: {
		connectionString: string;
		databaseName: string;
	};
}

export const backendAppConfig: BackendAppConfig = {
	database: {
		connectionString: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
		databaseName: process.env.MONGODB_DATABASE_NAME || 'portfolio_cms',
	}
};
