import { CollectionConfig } from "payload";
import { collectionPageFields } from "./fields/collection-page-fields";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: collectionPageFields,
};
