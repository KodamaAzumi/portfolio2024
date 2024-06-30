import ClockIcon from '../svgCompo/clockIcon';
import clsx from 'clsx';

export default function CreateTime({ time, size }: { time: string; size: string }) {
  return (
    <div className="flex items-center">
      <ClockIcon
        className={clsx('mr-1', {
          'w-[18px] h-[18px]': size === 'base',
          'w-[20px] h-[20px]': size === 'large',
        })}
      />
      <span
        className={clsx('font-medium', {
          'text-base': size === 'base',
          'text-lg': size === 'large',
        })}
      >
        {time}
      </span>
    </div>
  );
}
