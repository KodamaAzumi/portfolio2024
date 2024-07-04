import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import Header from './ui/header';
import Footer from './ui/footer';

const notoSansJapanese = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: 'Portfolio & Blog Site',
  description: 'ポートフォリオサイトとブログを組み合わせたサイト',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
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
