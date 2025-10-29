import express, { json } from 'express';
import cors from 'cors';

const port = 4000;

const app = express();
app.use(cors());
app.use(json());

const server = app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
