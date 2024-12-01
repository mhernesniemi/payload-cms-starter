import { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";
import { elasticClient } from "@/lib/elastic-client";

const createIndexIfNotExists = async (indexName: string) => {
  try {
    console.log("indexName", indexName);
    const exists = await elasticClient.indices.exists({ index: indexName });
    if (!exists) {
      await elasticClient.indices.create({
        index: indexName,
        body: {
          mappings: {
            properties: {
              title: { type: "text" },
              content: { type: "text" },
              slug: { type: "keyword" },
              updatedAt: { type: "date" },
              createdAt: { type: "date" },
            },
          },
        },
      });
    }
    console.log(`Index ${indexName} created`);
  } catch (error) {
    console.error(`Error creating index ${indexName}:`, error);
    return false;
  }
  return true;
};

export const afterChangeHook: CollectionAfterChangeHook = async ({
  doc,
  operation,
  collection,
}) => {
  console.log("doc", doc);
  console.log("operation", operation);
  console.log("collection", collection);
  try {
    if (operation === "create" || operation === "update") {
      const indexCreated = await createIndexIfNotExists(collection.slug);
      if (!indexCreated) return doc;

      await elasticClient.index({
        index: collection.slug,
        id: doc.id,
        body: {
          id: doc.id,
          title: doc.title,
          content: doc.content,
          slug: doc.slug,
          updatedAt: doc.updatedAt,
          createdAt: doc.createdAt,
        },
        refresh: true,
      });
      console.log(`Document ${doc.id} indexed in ${collection.slug}`);
    }
  } catch (error) {
    console.error(`Error in afterChangeHook for ${collection.slug}:`, error);
  }
  return doc;
};

export const afterDeleteHook: CollectionAfterDeleteHook = async ({ doc, collection }) => {
  try {
    const exists = await elasticClient.indices.exists({ index: collection.slug });
    if (exists) {
      await elasticClient.delete({
        index: collection.slug,
        id: doc.id,
        refresh: true,
      });
      console.log(`Document ${doc.id} deleted from ${collection.slug}`);
    }
  } catch (error) {
    console.error(`Error in afterDeleteHook for ${collection.slug}:`, error);
  }
  return doc;
};
