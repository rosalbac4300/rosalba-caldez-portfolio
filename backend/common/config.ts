interface BackendAppConfig {
	database: {
		connectionString: string;
	};
}

export const backendAppConfig: BackendAppConfig = {
	database: {
		connectionString: process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017',
	}
};
