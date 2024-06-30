import Arrow_down_double from '../svgCompo/arrow-down-double';

type Props = {
  explanation: string;
};

export default function PageDownArrow({ explanation }: Props) {
  return (
    <div className="w-full py-10 cursor-pointer">
      <p className="text-center font-bold text-base xs:text-lg mb-2">{explanation}</p>
      <Arrow_down_double />
    </div>
  );
}
