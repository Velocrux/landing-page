import { Entry, EntryFieldTypes } from "contentful";

// Author Type
export interface IAuthorFields {
  contentTypeId: "author";
  fields: {
    name: EntryFieldTypes.Text;
    bio?: EntryFieldTypes.Text;
    avatar?: EntryFieldTypes.AssetLink;
    email?: EntryFieldTypes.Text;
  };
}

// Category Type
export interface ICategoryFields {
  contentTypeId: "category";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description?: EntryFieldTypes.Text;
  };
}

// Tag Type
export interface ITagFields {
  contentTypeId: "tag";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
}

// Blog Post Type
export interface IBlogPostFields {
  contentTypeId: "blogPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.EntryLink<IAuthorFields>;
    publishedDate: EntryFieldTypes.Date;
    category: EntryFieldTypes.EntryLink<ICategoryFields>;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<ITagFields>>;
    featured?: EntryFieldTypes.Boolean;
  };
}

export type BlogPost = Entry<IBlogPostFields>;
export type Author = Entry<IAuthorFields>;
export type Category = Entry<ICategoryFields>;
export type Tag = Entry<ITagFields>;
