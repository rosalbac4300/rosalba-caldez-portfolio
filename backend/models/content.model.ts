import mongoose, { Document, Schema } from "mongoose";

import { ContentType } from "../common/database.types.js";

export interface ContentDocument extends ContentType, Document {};

const ContentSchema = new Schema<ContentDocument>(
	{
		contentKey: { type: String, required: [true, "Please enter content key"],},
		languageKey: { type: String, required: [true, "Please enter language key."]},
		collectionName: { type: String, required: [true, "Please enter collection name"]},

		content: { type: Object, required: [true, "Please, provide content"]}, // Mixed type!
	}, {
		timestamps: true,
	}
);

ContentSchema.index({ contentKey: 1, langageKey: 1, collectionName: 1 }, { unique: true });

const Content = mongoose.model<ContentDocument>("Content", ContentSchema);

export default Content;