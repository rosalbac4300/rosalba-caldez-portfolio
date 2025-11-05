import { Collection, Field } from "../common/database.types.js";

export default class CollectionService {
	public async CreateCollection(name: string, fields: Field[]) {
	}

	public async GetCollections(): Promise<Collection[]> {
		return [];
	}
};