import { CollectionConfig } from "payload";
import { defaultContentFields } from "@/fields/default-content-fields";

export const News: CollectionConfig = {
  slug: "news",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: defaultContentFields,
};
