import { CollectionConfig } from "payload";
import { collectionPageFields } from "./fields/collection-page-fields";

export const CollectionPage: CollectionConfig = {
  slug: "collection-pages",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: collectionPageFields,
};
