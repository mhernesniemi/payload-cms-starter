import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["fi", "en"],
  defaultLocale: "fi",
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - ... (see below)
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
