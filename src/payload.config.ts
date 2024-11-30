// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Articles } from "./collections/Articles";
import { CollectionPage } from "./collections/CollectionPage";
import { News } from "./collections/News";
import { Reference } from "./collections/Reference";
import { FrontPage } from "./globals/FrontPage";
import { MainMenu } from "./globals/MainMenu";
import { Categories } from "./collections/Categories";
import { Contacts } from "./collections/Contacts";
// import { nestedDocsPlugin } from "@payloadcms/plugin-nested-docs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    theme: "light",
    dateFormat: "dd.MM.yyyy",
  },
  collections: [Users, Media, Articles, CollectionPage, News, Reference, Categories, Contacts],
  globals: [FrontPage, MainMenu],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  localization: {
    locales: ["fi", "en"],
    defaultLocale: "fi",
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // nestedDocsPlugin({
    //   collections: ["articles"],
    //   generateLabel: (_, doc) => doc.title,
    //   generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ""),
    // }),
  ],
});
