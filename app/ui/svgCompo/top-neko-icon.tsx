'use client';
import { MotionValue, motion, useMotionValue, useTransform } from 'framer-motion';

type Props = {
  className: string;
};

export default function TopNekoIcon({ className }: Props) {
  const outerRadius = 34.3834; // 外側の円の半径
  const innerRadius = 7.87954; // 内側の円の半径

  // 外側の円の中心X座標、Y座標
  const rightEyeCenterX = 123.919;
  const leftEyeCenterX = 229.648;
  const CenterY = 166.287;

  // MotionValueへの登録
  const rightEyeX = useMotionValue(111.741);
  const leftEyeX = useMotionValue(212.599);
  const rightEyeY = useMotionValue(143.221);
  const leftEyeY = useMotionValue(147.233);

  const useConstrainedX = (
    x: MotionValue<number>,
    y: MotionValue<number>,
    centerX: number,
    centerY: number,
    innerRadius: number,
    outerRadius: number
  ): MotionValue<number> => {
    return useTransform(x, (latestX) => {
      const distanceFromCenter = Math.hypot(latestX - centerX, y.get() - centerY);
      if (distanceFromCenter + innerRadius > outerRadius) {
        const angle = Math.atan2(y.get() - centerY, latestX - centerX);
        return centerX + (outerRadius - innerRadius) * Math.cos(angle);
      }
      return latestX;
    });
  };

  const useConstrainedY = (
    x: MotionValue<number>,
    y: MotionValue<number>,
    centerX: number,
    centerY: number,
    innerRadius: number,
    outerRadius: number
  ): MotionValue<number> => {
    return useTransform(y, (latestY) => {
      const distanceFromCenter = Math.hypot(x.get() - centerX, latestY - centerY);
      if (distanceFromCenter + innerRadius > outerRadius) {
        const angle = Math.atan2(latestY - centerY, x.get() - centerX);
        return centerY + (outerRadius - innerRadius) * Math.sin(angle);
      }
      return latestY;
    });
  };

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    const svgRect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - svgRect.left;
    const mouseY = event.clientY - svgRect.top;
    rightEyeX.set(mouseX);
    leftEyeX.set(mouseX);
    rightEyeY.set(mouseY);
    leftEyeY.set(mouseY);
  };

  return (
    <svg
      width="350"
      height="350"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="トップエリアの猫のアイコン"
      className={className}
      onMouseMove={handleMouseMove}
    >
      <circle cx="175" cy="175" r="175" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66.2381 90.1446C66.3373 85.1805 70.7393 81.4108 75.6596 82.0763L124.592 88.6957C126.051 88.893 127.321 89.4251 128.372 90.1866C141.414 86.5959 156.193 84.626 172.759 84.626C191.952 84.626 208.949 87.2701 223.733 92.0155C223.995 91.9397 224.264 91.875 224.542 91.8223L273.052 82.6027C277.93 81.6756 282.527 85.2052 282.89 90.157L286.509 139.403C286.583 140.415 286.483 141.373 286.241 142.259C293.582 156.342 297.268 172.056 297.268 188.271C297.268 242.945 255.359 282.617 172.759 282.617C90.1587 282.617 52 242.945 52 188.271C52 169.798 56.3565 151.975 65.3119 136.473L66.2381 90.1446Z"
        fill="#FFEFB6"
      />
      <circle cx={rightEyeCenterX} cy={CenterY} r={outerRadius} fill="white" />
      <circle cx={leftEyeCenterX} cy={CenterY} r={outerRadius} fill="white" />
      <path
        d="M266.208 212.94C266.208 219.038 259.704 227.028 253.294 227.028"
        stroke="#343434"
        strokeWidth="5.73057"
        strokeLinecap="round"
      />
      <motion.circle
        cx={useConstrainedX(
          rightEyeX,
          rightEyeY,
          rightEyeCenterX,
          CenterY,
          innerRadius,
          outerRadius
        )}
        cy={useConstrainedY(
          rightEyeX,
          rightEyeY,
          rightEyeCenterX,
          CenterY,
          innerRadius,
          outerRadius
        )}
        r={innerRadius}
        fill="#4A4A4A"
        key="rightEye"
      />
      <motion.circle
        cx={useConstrainedX(leftEyeX, leftEyeY, leftEyeCenterX, CenterY, innerRadius, outerRadius)}
        cy={useConstrainedY(leftEyeX, leftEyeY, leftEyeCenterX, CenterY, innerRadius, outerRadius)}
        r={innerRadius}
        fill="#4A4A4A"
        key="leftEye"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M207.458 270.466C207.789 267.184 204.228 264.934 201.406 266.644L177.89 280.89C177.356 281.214 176.933 281.631 176.621 282.105L149.884 268.373C146.809 266.793 143.314 269.595 144.186 272.94L145.756 278.962C145.892 279.481 145.921 280.023 145.843 280.555L143.045 299.52C142.574 302.713 145.884 305.12 148.777 303.688L177.246 289.596C177.886 289.279 178.389 288.833 178.753 288.313L200.912 303.091C203.774 304.999 207.551 302.645 207.097 299.235L205.713 288.843C205.672 288.535 205.667 288.223 205.699 287.914L207.458 270.466Z"
        fill="#FF8888"
      />
    </svg>
  );
}
