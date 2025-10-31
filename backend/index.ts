import express, { json } from 'express';
import cors from 'cors';
import DatabaseService from './services/database.service.js';

const port = 4000;

const app = express();
app.use(cors());
app.use(json());

const databaseService = new DatabaseService();

await databaseService.MigrateAll();

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


