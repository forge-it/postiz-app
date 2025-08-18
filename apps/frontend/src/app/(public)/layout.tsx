import React from 'react';
import { Inter } from 'next/font/google';
import '../global.scss';
import 'react-tooltip/dist/react-tooltip.css';
import { VariableContextComponent } from '@gitroom/react/helpers/variable.context';
import { SentryComponent } from '@gitroom/frontend/components/layout/sentry.component';
import { PHProvider } from '@gitroom/react/helpers/posthog';
import { headers } from 'next/headers';
import { headerName } from '@gitroom/react/translation/i18n.config';
import { HtmlComponent } from '@gitroom/frontend/components/layout/html.component';
import { ToltScript } from '@gitroom/frontend/components/layout/tolt.script';
import { FacebookComponent } from '@gitroom/frontend/components/layout/facebook.component';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] });

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allHeaders = headers();

  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={clsx(inter.className, 'min-h-screen bg-gray-50')}>
        <VariableContextComponent
          storageProvider={
            process.env.STORAGE_PROVIDER! as 'local' | 'cloudflare'
          }
          environment={process.env.NODE_ENV!}
          backendUrl={process.env.NEXT_PUBLIC_BACKEND_URL!}
          plontoKey={process.env.NEXT_PUBLIC_POLOTNO!}
          billingEnabled={!!process.env.STRIPE_PUBLISHABLE_KEY}
          discordUrl={process.env.NEXT_PUBLIC_DISCORD_SUPPORT!}
          frontEndUrl={process.env.FRONTEND_URL!}
          isGeneral={false}
          genericOauth={!!process.env.POSTIZ_GENERIC_OAUTH}
          oauthLogoUrl={process.env.NEXT_PUBLIC_POSTIZ_OAUTH_LOGO_URL!}
          oauthDisplayName={process.env.NEXT_PUBLIC_POSTIZ_OAUTH_DISPLAY_NAME!}
          uploadDirectory={process.env.NEXT_PUBLIC_UPLOAD_STATIC_DIRECTORY!}
          tolt={process.env.NEXT_PUBLIC_TOLT!}
          facebookPixel={process.env.NEXT_PUBLIC_FACEBOOK_PIXEL!}
          telegramBotName={process.env.TELEGRAM_BOT_NAME!}
          neynarClientId={process.env.NEYNAR_CLIENT_ID!}
          isSecured={!process.env.NOT_SECURED}
          disableImageCompression={!!process.env.DISABLE_IMAGE_COMPRESSION}
          disableXAnalytics={!!process.env.DISABLE_X_ANALYTICS}
          sentryDsn={process.env.NEXT_PUBLIC_SENTRY_DSN!}
          language={allHeaders.get(headerName)}
          transloadit={
            process.env.TRANSLOADIT_AUTH && process.env.TRANSLOADIT_TEMPLATE
              ? [
                  process.env.TRANSLOADIT_AUTH!,
                  process.env.TRANSLOADIT_TEMPLATE!,
                ]
              : []
          }
        >
          <SentryComponent>
            <HtmlComponent />
            <ToltScript />
            <FacebookComponent />
            <PHProvider
              phkey={process.env.NEXT_PUBLIC_POSTHOG_KEY}
              host={process.env.NEXT_PUBLIC_POSTHOG_HOST}
            >
              {children}
            </PHProvider>
          </SentryComponent>
        </VariableContextComponent>
      </body>
    </html>
  );
}
