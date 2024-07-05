import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const notoSansJapanese = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'Portfolio 2024 by Kodama',
  description: 'Kodamaのポートフォリオサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <GoogleAnalytics gaId="G-TT2VXV1D26" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
      </head>
      <body className={notoSansJapanese.className}>
        <div>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
