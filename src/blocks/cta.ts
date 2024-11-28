import { Block } from "payload";

export const ctaBlock: Block = {
  slug: "callToAction",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "textarea",
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
      required: true,
    },
  ],
};

export const investorsInfoBlock: Block = {
  slug: "investorsInfo",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "text",
      type: "textarea",
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
    },
    {
      name: "url",
      type: "text",
      required: true,
    },
  ],
};
