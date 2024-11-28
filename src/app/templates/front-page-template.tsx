import { Link } from "@/i18n/routing";
import { Article } from "@/payload-types";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface Props {
  articles: Article[];
}

export default function FrontPageTemplate({ articles }: Props) {
  const t = useTranslations();

  return (
    <main className="p-8">
      <h1 className="mb-8 text-4xl font-bold">{t("articles.title")}</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link href={`/${article.slug}`} key={article.id}>
            <article className="rounded-lg border p-4 transition-transform hover:scale-105">
              {typeof article.featuredImage === "object" && (
                <div className="relative mb-4 aspect-square">
                  <Image
                    src={article.featuredImage?.url ?? ""}
                    alt={article.featuredImage?.alt ?? ""}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
              <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
              <p className="mb-2 text-gray-600">
                {t("articles.publishedAt", {
                  date: new Date(article.publishedDate).toLocaleDateString("fi-FI"),
                })}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
