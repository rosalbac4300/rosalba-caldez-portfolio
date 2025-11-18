import express, { Router } from 'express';

export type RouterRegistration = {
	basePath: string;
	router: ReturnType<BaseRouter['GetRouter']>;
}

export abstract class BaseRouter {
	router: Router;

	constructor() {
		this.router = express.Router();
		this.setupRoutes();
	}

	public GetRouter(): Router {
		return this.router;
	}

	abstract setupRoutes(): void
};
