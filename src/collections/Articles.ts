import { CollectionConfig } from "payload";
import {
  mediaBlock,
  largeFeaturePostsWrapperBlock,
  smallFeaturePostsWrapperBlock,
  ctaBlock,
  investorsInfoBlock,
  linkListBlock,
  contactPeopleBlock,
  videoEmbedBlock,
} from "../blocks";
import { HeadingFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { BlocksFeature } from "@payloadcms/richtext-lexical";

export const Articles: CollectionConfig = {
  slug: "articles",
  admin: {
    useAsTitle: "title",
    group: "Page Collections",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "showFeaturedContent",
      type: "checkbox",
      label: "Show Featured Content",
      defaultValue: false,
      localized: true,
    },
    {
      name: "featuredContent",
      type: "blocks",
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
      localized: true,
      admin: {
        condition: (siblingData) => {
          return siblingData.showFeaturedContent;
        },
      },
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
            HeadingFeature({ enabledHeadingSizes: ["h2", "h3"] }),
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
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
      localized: true,
      admin: {
        description: "This image will be used as the featured image for the article.",
      },
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "users",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "publishedDate",
      type: "date",
      required: true,
      admin: {
        position: "sidebar",
      },
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
  ],
};
