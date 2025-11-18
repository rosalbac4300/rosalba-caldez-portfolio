import { ControllerResponse } from "../common/controller-response.js";
import CollectionService from "../services/collection.service.js";

class CollectionController {
	constructor (
		private collectionService: CollectionService
	) {}

	public async AddCollection(body: any): Promise<ControllerResponse> {
		const { name, fields } = body;
		const data = await this.collectionService.CreateCollection(name, fields);

		return {
			statusCode: 200,
			data,
		};
	}

	public async DeleteCollection(params: any): Promise<ControllerResponse> {
		const { name } = params;
		await this.collectionService.DeleteCollection(name);

		return {
			statusCode: 204,
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

}

export default CollectionController;
