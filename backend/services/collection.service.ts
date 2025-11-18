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

	private validateName(name: string): boolean {
		const nameRegex = /^[a-zA-Z0-9_-]+$/;
		return nameRegex.test(name);
	}

	public async CreateCollection(name: string, fields: Field[]) {
		if (!this.validateFields(fields)) {
			throw new BadRequest('Invalid fields.');
		}

		const normalizedName = name.toLowerCase();

		if (!this.validateName(normalizedName)) {
			throw new BadRequest('Invalid name.');
		}

		const sameNameCollection = await Collection.find({ name: normalizedName }).exec();

		if (sameNameCollection.length >= 1) {
			throw new BadRequest('Name already used.');
		}
		
		const collection = await Collection.create({ name: normalizedName, fields });
		return collection;
	}

	public async DeleteCollection(name: string) {
		// Convert name to lowercase to match how it's stored
		const normalizedName = name.toLowerCase();
		await Collection.findOneAndUpdate({ name: normalizedName }, { deletedAt: Date.now() });
	}

	public async UpdateCollection(name: string, fields: Field[]) {}

	public async GetCollections(): Promise<CollectionDocument[]> {
		// Check field deletedAt is not null!
		return await Collection.find({ deletedAt: { $exists: false, $ne: null }}).exec();
	}
};