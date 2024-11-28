import { CollectionConfig } from "payload";
import { collectionPageFields } from "./fields/collection-page-fields";

export const Reference: CollectionConfig = {
  slug: "references",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: collectionPageFields,
};
