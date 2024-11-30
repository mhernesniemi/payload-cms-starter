import { Block } from "payload";

export const ctaBlock: Block = {
  slug: "cta",
  labels: {
    singular: "Call to Action",
    plural: "Call to Actions",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "text",
      type: "textarea",
      localized: true,
    },
    {
      name: "linkText",
      label: "Link text",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "linkUrl",
      label: "Link URL",
      type: "text",
      required: true,
    },
  ],
};
