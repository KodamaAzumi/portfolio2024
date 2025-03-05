'use client';
import CreateTime from '../ui/parts/createTime';
import GrowUiSection from '../ui/grow-ui/grow-ui-section';
import growUiImg2 from '@/public/products/grow-ui/image1.png';
import growUiImg3 from '@/public/products/grow-ui/image2.png';
import growUiImg4 from '@/public/products/grow-ui/image3.png';
import growUiImg5 from '@/public/products/grow-ui/image4.png';
import { AnimatePresence, motion } from 'framer-motion';

export default function GrowUi() {
  return (
    <AnimatePresence mode="wait">
      <div className="text-[#4E4935] bg-[#F9F8F4] min-h-screen">
        <motion.div
          className="w-[90%] lg:w-[60%] m-auto py-12 flex flex-col gap-y-10"
          transition={{
            duration: 0.5,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          key="growUi-animation"
        >
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-2xl lg:text-3xl font-bold">育てるUIについて</h2>
            <CreateTime time={'2022年4月-12月'} size={'large'} />
          </div>
          <GrowUiSection
            head={'育てるUIとは'}
            paragraph="ユーザーがWebサイトなどを利用していく過程で、そのユーザー特有の様態に変化していくUIのことを「育てるUI」と定義し、そのテーマに沿って4つのGoogle Chrome 拡張機能を作りました。"
            videoid="dSiDWlFj85M"
          />
          <GrowUiSection
            head={'育てるUIを使用する利点'}
            paragraph="「育てるUI」を使用することで、普段使用するWebサイトのUIをユーザーに合ったものに変化させることができます。『リンクが逃げるGoogle
              Chrome
              拡張機能』の場合、よくクリックするリンクは速くなり、押しにくくなるということです。これは、インターネットの過度な仕様を防ぐUIをユーザーがインターネットを使用する過程で作り上げることになります。"
          />
          <GrowUiSection
            head={'制作の経緯'}
            paragraph="Webサイトは基本的にテンプレートが決まっています。それは使いやすさから生まれたものですが、この決まった位置とは違う場所にボタンやロゴ、ハンバーガーメニューがあったら、本当に使いにくいのか、逆に使いやすくなるのかという考えから発想を広げました。また、スマホ依存やインターネット依存防止というテーマにも興味があったので、そのテーマと「育てるUI」の制作を合わせてGoogle Chrome 拡張機能の制作を行いました。"
          />
          <GrowUiSection
            head={'『押したものがどんどん小さくなるGoogle Chrome 拡張機能』'}
            paragraph="Webサイト上でクリックしたボタンやリンクが押すたびに小さくなるGoogle Chrome 拡張機能です。"
            src={growUiImg2}
            alt="押したものがどんどん小さくなるGoogle Chrome 拡張機能"
            productUrl="https://chromewebstore.google.com/detail/%E6%8A%BC%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%E3%81%8C%E5%B0%8F%E3%81%95%E3%81%8F%E3%81%AA%E3%82%8B%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD/ghabmdkfoakcbofjoiomigmbldedlieh?hl=ja&authuser=0&pli=1"
            githubUrl="https://github.com/KodamaAzumi/Become-Small"
          />
          <GrowUiSection
            head={'『リンクが逃げるGoogle Chrome 拡張機能』'}
            paragraph="Webサイト上でボタンやリンクをクリックすると、そのボタンやリンクが動き出すGoogle Chrome 拡張機能です。押せば押すほどその動きが速くなり、押しづらくなります。"
            src={growUiImg3}
            alt="リンクが逃げるGoogle Chrome 拡張機能"
            productUrl="https://chromewebstore.google.com/detail/%E3%83%AA%E3%83%B3%E3%82%AF%E3%81%8C%E9%80%83%E3%81%92%E3%82%8B%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD/ghmpanmnaheohbodhgbgfhmfihfkkghl?hl=ja&authuser=0"
            githubUrl="https://github.com/KodamaAzumi/Moveanker"
          />
          <GrowUiSection
            head={'『カーソルが大きくなるGoogle Chrome 拡張機能』'}
            paragraph="Webサイトを訪れるたびに、そのページ上のカーソルが大きくなるGoogle Chrome 拡張機能です。"
            src={growUiImg4}
            alt="カーソルが大きくなるGoogle Chrome 拡張機能"
            productUrl="https://chromewebstore.google.com/detail/%E3%82%AB%E3%83%BC%E3%82%BD%E3%83%AB%E3%81%8C%E5%A4%A7%E3%81%8D%E3%81%8F%E3%81%AA%E3%82%8B%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD/hjaafedegfbmiffgpdfpenjojjopafef?hl=ja&authuser=0"
            githubUrl="https://github.com/KodamaAzumi/Cursor-Extention"
          />
          <GrowUiSection
            head={'『マウスの軌跡を新しいタブに表示するGoogle Chrome 拡張機能』'}
            paragraph="ブラウザを使っている際のマウスの軌跡を、新しいタブを開いたタイミングで表示するGoogle Chrome 拡張機能です。表示されたマウスの軌跡を画像として保存することもできます。画面上の、どの場所に軌跡が集中する傾向にあるかを知ることができます。"
            src={growUiImg5}
            alt="マウスの軌跡を新しいタブに表示するGoogle Chrome 拡張機能"
            productUrl="https://chromewebstore.google.com/detail/%E3%83%9E%E3%82%A6%E3%82%B9%E3%81%AE%E8%BB%8C%E8%B7%A1%E3%82%92%E6%96%B0%E3%81%97%E3%81%84%E3%82%BF%E3%83%96%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%E6%8B%A1%E5%BC%B5%E6%A9%9F%E8%83%BD/lphjkiajdkcnjohpnanfdoaoegeoendk?hl=ja&authuser=0"
            githubUrl="https://github.com/KodamaAzumi/Mouse-Art"
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
