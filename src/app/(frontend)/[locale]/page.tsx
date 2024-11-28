import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Params = Promise<{ locale: "fi" | "en" }>;

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;

  const payload = await getPayload({
    config: configPromise,
  });

  const { docs: articles } = await payload.find({
    collection: "articles",
    sort: "-publishedDate",
    locale: locale,
  });

  return (
    <main className="container mx-auto px-4 py-16 xl:px-0">
      <h1 className="mb-8 text-4xl font-bold">front page</h1>
    </main>
  );
}
