import { Field } from "payload";

export const linkFields: Field[] = [
  {
    name: "type",
    type: "radio",
    required: true,
    options: [
      {
        label: "Internal",
        value: "internal",
      },
      {
        label: "External",
        value: "external",
      },
    ],
  },
  {
    name: "internalLink",
    type: "relationship",
    relationTo: ["articles", "collection-pages", "news", "references"],
    admin: {
      condition: (data: any, { type }: { type?: string } = {}) => type === "internal",
    },
  },
  {
    name: "externalLink",
    type: "text",
    admin: {
      condition: (data: any, { type }: { type?: string } = {}) => type === "external",
    },
  },
];
