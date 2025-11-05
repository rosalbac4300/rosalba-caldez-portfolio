import asyncHandler from "express-async-handler";
import { Request, RequestHandler } from "express";


import { BaseRouter } from "../common/base-router.js";
import CollectionController from "../controllers/collections.controller.js";

class CollectionRouter extends BaseRouter {
	constructor(private controller: CollectionController) {
		super()
	}

	setupRoutes (): void {
		// Get Collections
		this.router.get('/', ...this.getCollections())
	}

	private getCollections (): RequestHandler[] {
		return [
			asyncHandler(async (_req: any, res: any): Promise<void> => {
				const response = await this.controller.GetCollections();

				console.log('hello!')

				res.status(response.statusCode).json(response.data);
			})
		]
	}
}

export default CollectionRouter;