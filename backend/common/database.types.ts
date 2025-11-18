export interface Language {
	languageKey: string;
}

export enum FieldType {
	Text = 'text',
	Select = 'select',
	Boolean = 'boolean',
	Number = 'number',
	Email = 'email',
}

export interface Field {
	name: string;
	type: FieldType;
	options?: string[] | number[];
	optional: boolean;
}

export interface CollectionType {
	name: string;
	fields: Field[];

	createdAt: Date;
	deletedAt: Date | null;
	updatedAt: Date;
}

// Very basic content: just managing text here, nothing fancy :p!
export interface ContentType {
	contentKey: string;
	content: Record<string, any>;

	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;

	collectionName: string;
	languageKey: string;
}

export interface DatabaseSchema {
	Collections: CollectionType;
	Content: ContentType;
	Languages: Language;
}
