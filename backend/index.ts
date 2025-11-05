import express, { json } from 'express';
import cors from 'cors';

import DatabaseService from './services/database.service.js';
import { routerRegistry } from './routers/index.js';

const port = 4000;

const app = express();
app.use(cors());
app.use(json());

const databaseService = new DatabaseService();

// Connect to MongoDB
await databaseService.Connect();

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

for (const {basePath, router} of routerRegistry) {
	app.use(basePath, router);
}

console.log('It did build correctly')