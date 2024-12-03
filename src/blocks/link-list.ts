import { Block } from "payload";

export const linkListBlock: Block = {
  slug: "linkList",
  fields: [
    {
      name: "links",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "isExternal",
          type: "checkbox",
          label: "External link",
        },
        {
          name: "internalUrl",
          type: "relationship",
          relationTo: ["articles"],
          required: true,
          admin: {
            condition: (_, siblingData) => !siblingData.isExternal,
          },
        },
        {
          name: "externalUrl",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.isExternal,
          },
        },
      ],
    },
  ],
  interfaceName: "LinkListBlock",
};
