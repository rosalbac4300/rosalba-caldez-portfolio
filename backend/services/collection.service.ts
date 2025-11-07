import { BadRequest } from "../common/http-error.js";
import Collection, { CollectionDocument } from "../models/collections.model.js";
import { CollectionType as CollectionType, Field, FieldType } from "../common/database.types.js";

export default class CollectionService {
	private validateFields(fields: Field[]): boolean {
		let areFieldsValid = true;
		
		fields.forEach(field => {
			if (field.type === FieldType.Select && (
				!field.options || field.options.length < 1
			)) {
				areFieldsValid = false;
			}
		})

		return areFieldsValid;
	}

	public async CreateCollection(name: string, fields: Field[]) {
		if (!this.validateFields(fields)) {
			// TODO. Make an error and a middleware to handle all of these errors!!!!!
			throw new BadRequest('Invalid fields');
		}

		const collection = await Collection.create({ name, fields });
		return collection;
	}

	public async GetCollections(): Promise<CollectionDocument[]> {
		return await Collection.find().exec();
	}
};