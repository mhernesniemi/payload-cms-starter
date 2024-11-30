import { CollectionConfig } from "payload";
import { defaultContentFields } from "@/fields/default-content-fields";

export const Reference: CollectionConfig = {
  slug: "references",
  admin: {
    useAsTitle: "title",
    group: "Pages",
  },
  fields: defaultContentFields,
};
