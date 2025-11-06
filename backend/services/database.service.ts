import mongoose from 'mongoose';

import { backendAppConfig } from '../common/config.js';

class DatabaseService {
	constructor() {
		// Connection is handled in connect()
	}

	public async Connect(): Promise<void> {
		try {
			console.info('Connecting to MongoDB...');
			await mongoose.connect(backendAppConfig.database.connectionString);
			console.log(' Connected to MongoDB');
		} catch (error) {
			console.error('Failed to connect to MongoDB:', error);
			throw error;
		}
	}

	public async Disconnect(): Promise<void> {
		await mongoose.disconnect();
		console.log('Disconnected from MongoDB');
	}

	public IsConnected(): boolean {
		return mongoose.connection.readyState === 1;
	}
}

export default DatabaseService;
