import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface LanguageTable {
	id: Generated<number>;

	languageKey: string;
}

export interface CollectionTable {
	id: Generated<number>;

	name: string;
}

// Very basic content: just managing text here, nothing fancy :p!
export interface ContentTable {
	id: Generated<number>;

	contentKey: string;
	content: string;

	createdAt: ColumnType<Date, Date, never>;
	updatedAt: Date;
	deletedAt: ColumnType<Date | null, Date | null, never>; // Soft Delete

	collectionId: number;
	languageId: number;
}

export interface DatabaseSchema {
	Collections: CollectionTable;
	Content: ContentTable;
	Languages: LanguageTable;
}


// Table Types:
export type Language = Selectable<LanguageTable>;
export type NewLanguage = Insertable<LanguageTable>;
export type UpdateLanguage = Updateable<LanguageTable>;

export type Content = Selectable<ContentTable>;
export type NewContent = Insertable<ContentTable>;
export type UpdateContent = Updateable<ContentTable>;

export type Collection = Selectable<CollectionTable>;
export type NewCollection = Insertable<CollectionTable>;
export type UpdateCollection = Updateable<CollectionTable>;