import { Field } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { BlocksFeature } from "@payloadcms/richtext-lexical";
import {
  mediaBlock,
  largeFeaturePostsWrapperBlock,
  smallFeaturePostsWrapperBlock,
  ctaBlock,
  investorsInfoBlock,
  linkListBlock,
  contactPeopleBlock,
  videoEmbedBlock,
} from "@/blocks";

export const collectionPageFields: Field[] = [
  {
    name: "title",
    type: "text",
    required: true,
    localized: true,
  },
  {
    name: "heroText",
    type: "textarea",
    localized: true,
  },
  {
    name: "heroImage",
    type: "upload",
    relationTo: "media",
    localized: true,
  },
  {
    name: "content",
    type: "richText",
    required: true,
    localized: true,
    editor: lexicalEditor({
      features: ({ defaultFeatures }) => {
        return [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [
              mediaBlock,
              largeFeaturePostsWrapperBlock,
              smallFeaturePostsWrapperBlock,
              ctaBlock,
              investorsInfoBlock,
              linkListBlock,
              contactPeopleBlock,
              videoEmbedBlock,
            ],
          }),
        ];
      },
    }),
  },
  {
    name: "slug",
    type: "text",
    required: true,
    unique: true,
    admin: {
      position: "sidebar",
    },
  },
];
