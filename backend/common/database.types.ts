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

export interface Collection {
	name: string;
	fields: Field[];
}

// Very basic content: just managing text here, nothing fancy :p!
export interface Content {
	contentKey: string;
	content: Record<string, any>;

	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date | null;

	collectionName: number;
	languageKey: string;
}

export interface DatabaseSchema {
	Collections: Collection;
	Content: Content;
	Languages: Language;
}
