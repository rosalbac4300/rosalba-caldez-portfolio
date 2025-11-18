import asyncHandler from "express-async-handler";
import { body, param } from "express-validator";
import { RequestHandler } from "express";

import { BaseRouter } from "../common/base-router.js";
import CollectionController from "../controllers/collections.controller.js";
import { validate } from "../common/validation.middleware.js";
import { FieldType } from "../common/database.types.js";

class CollectionRouter extends BaseRouter {
	constructor(private controller: CollectionController) {
		super()
	}

	setupRoutes (): void {
		// Get Collections
		this.router.get('/', ...this.getCollections())
		this.router.post('/', ...this.createCollection())
		this.router.delete('/:name', ...this.deleteCollections())
	}

	private createCollection(): RequestHandler[] {
		return [
			validate([
				body('name').notEmpty().isString(),
				body('fields').isArray({ min: 1 }),
				body('fields.*.name').notEmpty().isString(),
				body('fields.*.type').notEmpty().isString().custom(value => {
					return Object.values(FieldType).includes(value);
				}),
				body('fields.*.optional').isBoolean(),
				body('fields.*.options').default([]).isArray(),
			]),
			asyncHandler(async (req: any, res: any): Promise<void> => {
				const response = await this.controller.AddCollection(req.body);
				res.status(response.statusCode).json(response.data);
			})
		]
	}

	private getCollections (): RequestHandler[] {
		return [
			asyncHandler(async (_req: any, res: any): Promise<void> => {
				const response = await this.controller.GetCollections();
				res.status(response.statusCode).json(response.data);
			})
		]
	}

	private deleteCollections (): RequestHandler[] {
		return [
			validate([
				param('name').notEmpty().isString(),
			]),
			asyncHandler(async (req: any, res: any): Promise<void> => {
				const response = await this.controller.DeleteCollection(req.params);
				res.status(response.statusCode).json(response.data);
			})
		]
	}
}

export default CollectionRouter;