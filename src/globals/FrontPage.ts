import {
  largeFeaturePostsWrapperBlock,
  smallFeaturePostsWrapperBlock,
  ctaBlock,
  mediaBlock,
  videoEmbedBlock,
  investorsInfoBlock,
  linkListBlock,
  contactPeopleBlock,
} from "@/blocks";
import { GlobalConfig } from "payload";

export const FrontPage: GlobalConfig = {
  slug: "front-page",
  access: {
    read: () => true,
  },
  admin: {
    group: "Pages",
  },
  fields: [
    {
      name: "content",
      type: "blocks",
      required: true,
      blocks: [
        ctaBlock,
        investorsInfoBlock,
        largeFeaturePostsWrapperBlock,
        smallFeaturePostsWrapperBlock,
        linkListBlock,
        contactPeopleBlock,
        videoEmbedBlock,
        mediaBlock,
      ],
    },
  ],
};
