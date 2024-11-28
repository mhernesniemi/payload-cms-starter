import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Link } from "@/i18n/routing";
import Image from "next/image";

type Params = Promise<{ locale: "fi" | "en" }>;

export default async function ArticlesPage({ params }: { params: Params }) {
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
      <h1 className="mb-8 text-4xl font-bold">Artikkelit</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/articles/${article.slug}`} key={article.id}>
            <article className="group flex gap-4 rounded-lg border border-gray-200 bg-slate-50 p-3">
              {typeof article.featuredImage === "object" && (
                <Image
                  src={article.featuredImage?.url ?? ""}
                  alt={article.featuredImage?.alt ?? ""}
                  width={192}
                  height={192}
                  className="size-48 flex-shrink-0 rounded-lg object-cover"
                />
              )}
              <div>
                <h2 className="text-lg font-medium group-hover:underline">{article.title}</h2>
                <p className="text-sm text-gray-500">
                  {new Date(article.publishedDate).toLocaleDateString("fi-FI")}
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
