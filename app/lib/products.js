import mlAskImg1 from '@/public/products/ml-ask/image1.jpg';
import mlAskImg2 from '@/public/products/ml-ask/image2.jpg';
import mlAskImg3 from '@/public/products/ml-ask/image3.png';
import growUiImg1 from '@/public/products/growUi/image1.jpg';
import growUiImg2 from '@/public/products/growUi/image2.jpg';
import growUiImg3 from '@/public/products/growUi/image3.jpg';
import growUiImg4 from '@/public/products/growUi/image4.png';
import growUiImg5 from '@/public/products/growUi/image5.png';
import growUiImg6 from '@/public/products/growUi/image6.png';
import growUiImg7 from '@/public/products/growUi/image7.png';
import graduationExhibition2023Img1 from '@/public/products/graduationExhibition2023/image1.png';
import graduationExhibition2023Img2 from '@/public/products/graduationExhibition2023/image2.png';
import inputWebImg1 from '@/public/products/input-web/image1.png';
import inputWebImg2 from '@/public/products/input-web/image2.png';
import inputWebImg3 from '@/public/products/input-web/image3.png';
import inputWebImg4 from '@/public/products/input-web/image4.jpg';
import inputWebImg5 from '@/public/products/input-web/image5.png';
import inputWebImg6 from '@/public/products/input-web/image6.jpg';

export const products = [
  {
    id: 'ml-ask',
    title: 'ML-Askによる日記の感情分析',
    time: '2021年9月-12月',
    explanation:
      'ML-AskというPythonのライブラリを使用して、2021年10月から11月に書いた日記の感情を分析し、パネルにまとめた作品です。大学2年次の情報表現領域展にてパネル展示を行いました。ML-Askは文章中の単語を10種類の感情に振り分けることができる感情分析システムです。自分で書いた日記をML-Askに分析させ、感情の個数を数えてグラフ化し、自分の感情の傾向を考察することや、自分で日記に感情を付け、それをML-Askが付けた感情と比べることで自分の物事の捉え方を分析しました。',
    url: {
      product: '',
      github: '',
    },
    skills: ['Python'],
    medium: 'ポスター発表',
    images: [
      {
        id: 'ml-askImg1',
        src: mlAskImg1,
        alt: 'ML-Askによる日記の感情分析のパネル1枚目',
      },
      {
        id: 'ml-askImg2',
        src: mlAskImg2,
        alt: 'ML-Askによる日記の感情分析のパネル2枚目',
      },
      {
        id: 'ml-askImg3',
        src: mlAskImg3,
        alt: 'ML-Askによる日記の感情分析のパネルを展示している様子',
      },
    ],
  },
  {
    id: 'growUi',
    title: '育てるUI',
    time: '2022年4月-12月',
    explanation:
      'ユーザーがWebサイトなどを利用していく過程で、そのユーザー特有の様態に変化していくUIを「育てるUI」とし、そのテーマに沿って4つのGoogle Chrome 拡張機能を作りました。大学3年次の領域展では、Google Chrome 拡張機能を実際に使用して得た結果をグラフ化し、パネルにまとめて展示を行いました。拡張機能はGoogle ウェブストアから追加して利用することができます。',
    url: {
      product: '',
      github: '',
    },
    skills: ['HTML', 'CSS', 'JavaScript'],
    medium: 'Google拡張機能',
    images: [
      {
        id: 'growUiImg1',
        src: growUiImg1,
        alt: '育てるUIのパネル1枚目',
      },
      {
        id: 'growUiImg2',
        src: growUiImg2,
        alt: '育てるUIのパネル2枚目',
      },
      {
        id: 'growUiImg3',
        src: growUiImg3,
        alt: '大学3年次の領域展で作品を展示している様子',
      },
      {
        id: 'growUiImg4',
        src: growUiImg4,
        alt: '押したものがどんどん小さくなる Google Chrome 拡張機能',
      },
      {
        id: 'growUiImg5',
        src: growUiImg5,
        alt: 'リンクが逃げる Google Chrome 拡張機能',
      },
      {
        id: 'growUiImg6',
        src: growUiImg6,
        alt: 'カーソルが大きくなる Google Chrome 拡張機能',
      },
      {
        id: 'growUiImg7',
        src: growUiImg7,
        alt: 'マウスの軌跡を新しいタブに表示する Google Chrome 拡張機能',
      },
    ],
  },
  {
    id: 'graduationExhibition2023',
    title: '名古屋造形大学卒展（2023年）のWebサイト制作',
    time: '2023年1月',
    explanation:
      '大学からの依頼で、2023年の名古屋造形大学卒展WebサイトのEVENTページとACCESSページの実装を担当しました。他の方のデザインをコーディングにすることや、複数人での制作は初めてだったので勉強になりました。',
    url: {
      product: 'https://www.nzu.ac.jp/gex/2023/',
      github: '',
    },

    skills: ['HTML', 'CSS'],
    medium: 'Web',
    images: [
      {
        id: 'graduationExhibition2023Img1',
        src: graduationExhibition2023Img1,
        alt: '名古屋造形大学卒展（2023年）のWebサイトのEVENTページ',
      },
      {
        id: 'graduationExhibition2023Img2',
        src: graduationExhibition2023Img2,
        alt: '名古屋造形大学卒展（2023年）のWebサイトのACCESSページ',
      },
    ],
  },
  {
    id: 'inputWeb',
    title: 'アナログとデジタルの特性を活かした新しい入力装置の制作',
    time: '2023年4月-2024年2月',
    explanation:
      'パソコンやスマートフォンでの文字入力は、手書き文字のようにインクの濃淡、書き手の文字の癖といった、個性的な表現を残すことができません。そこで、キーボードの入力速度や写真といった、既存の入力装置では使われない情報を文字に反映させることで、パソコンやスマートフォンでも書き手の個性を残せる入力装置を制作しました。Webサイト内では、文章を書いて保存すること、サイトを利用している人同士でチャットをすることなどが体験できます。',
    url: {
      product: 'https://input-web.vercel.app/',
      github: 'https://github.com/KodamaAzumi/input-web',
    },

    skills: ['HTML', 'CSS', 'JavaScript'],
    medium: 'Web',
    images: [
      {
        id: 'inputWebImg1',
        src: inputWebImg1,
        alt: 'アナログとデジタルの特性を活かした新しい入力装置のWebサイトの書くページ',
      },
      {
        id: 'inputWebImg2',
        src: inputWebImg2,
        alt: 'アナログとデジタルの特性を活かした新しい入力装置のWebサイトの見るページ',
      },
      {
        id: 'inputWebImg3',
        src: inputWebImg3,
        alt: 'アナログとデジタルの特性を活かした新しい入力装置のWebサイトのチャットページ',
      },
      {
        id: 'inputWebImg4',
        src: inputWebImg4,
        alt: 'アナログとデジタルの特性を活かした新しい入力装置のWebサイトをスマホで見ている様子',
      },
      {
        id: 'inputWebImg5',
        src: inputWebImg5,
        alt: 'アナログとデジタルの特性を活かした新しい入力装置のテーマ',
      },
      {
        id: 'inputWebImg6',
        src: inputWebImg6,
        alt: '名古屋造形大学2024年卒業展示の様子',
      },
    ],
  },
];
