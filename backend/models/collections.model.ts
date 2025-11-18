import mongoose, { Document, Schema } from "mongoose";

import { CollectionType } from "../common/database.types.js";

export interface CollectionDocument extends CollectionType, Document {};

const CollectionSchema = new Schema<CollectionDocument>(
	{
		name: {
			type: String,
			required: [true, "Please enter Collection name"],
			unique: true,
		},
		fields: [{
			name: { type: String, required: [true, "Field name is required."]},
			type: { type: String, required: [true, "Field type is required."]},
			options: { type: Array },
			optional: { type: Boolean, default: false },
		}],

		deletedAt: Date,
	}, {
		timestamps: true,
	}
);

const Collection = mongoose.model<CollectionDocument>("Collection", CollectionSchema);

export default Collection;