import { Block } from "payload";

export const largeFeaturePostBlock: Block = {
  slug: "largeFeaturePost",
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
      name: "link",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "buttonText",
      type: "text",
    },
    {
      name: "video",
      type: "text",
      admin: {
        description: "YouTube video URL",
      },
    },
  ],
};

export const largeFeaturePostsWrapperBlock: Block = {
  slug: "largeFeaturePostsWrapper",
  fields: [
    {
      name: "posts",
      type: "blocks",
      blocks: [largeFeaturePostBlock],
      required: true,
    },
  ],
};

export const smallFeaturePostBlock: Block = {
  slug: "smallFeaturePost",
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
      name: "link",
      type: "text",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export const smallFeaturePostsWrapperBlock: Block = {
  slug: "smallFeaturePostsWrapper",
  fields: [
    {
      name: "posts",
      type: "blocks",
      blocks: [smallFeaturePostBlock],
      required: true,
    },
  ],
};
