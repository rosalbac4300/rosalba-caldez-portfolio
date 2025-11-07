import { ControllerResponse } from "../common/controller-response.js";
import CollectionService from "../services/collection.service.js";

class CollectionController {
	constructor (
		private collectionService: CollectionService
	) {}

	public async AddCollection(body: any): Promise<ControllerResponse> {
		const { name, fields } = body;
		let statusCode = 200;
		let data: any = "";

		try {
			data = await this.collectionService.CreateCollection(name, fields);
		} catch (error) {
			statusCode = 400;
			console.log(error);
		}

		return {
			statusCode,
			data,
		};
	}

	public async GetCollections(): Promise<ControllerResponse> {
		const collections = await this.collectionService.GetCollections();

		return {
			statusCode: 200,
			data: collections.map(collection => ({
				name: collection.name,
				fields: collection.fields,
			}))
		};
	}
	
	public async UpdateCollection(): Promise<ControllerResponse> {
		return {
			statusCode: 200
		};
	}

	public async DeleteCollection(): Promise<ControllerResponse> {
		return {
			statusCode: 200
		};
	}

}

export default CollectionController;
