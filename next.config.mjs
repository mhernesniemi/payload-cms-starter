import { withPayload } from "@payloadcms/next/withPayload";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@aws-sdk/client-cognito-identity",
    "@aws-sdk/client-sso",
    "@aws-sdk/client-sso-oidc",
    "@aws-sdk/credential-provider-cognito-identity",
    "@aws-sdk/credential-provider-sso",
  ],
};

export default withNextIntl(withPayload(nextConfig));
