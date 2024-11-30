import { CollectionConfig } from "payload";
import { defaultContentFields } from "@/fields/default-content-fields";

export const CollectionPage: CollectionConfig = {
  slug: "collection-pages",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: defaultContentFields,
};
