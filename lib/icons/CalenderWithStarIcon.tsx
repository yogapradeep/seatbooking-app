import React from "react";

export default function CalenderWithStarIcon({
  className,
  size,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19 9L21.8676 13.938L28 14.729L23.5 18.573L24.625 24L19 21.438L13.375 24L14.5 18.573L10 14.729L16.3 13.938L19 9Z"
        fill="#FFBB00"
      />
      <path
        d="M27 4.30769C27 3.73646 26.7629 3.18862 26.341 2.78469C25.919 2.38077 25.3467 2.15385 24.75 2.15385H20.25V0H18V2.15385H9V0H6.75V2.15385H2.25C1.65326 2.15385 1.08097 2.38077 0.65901 2.78469C0.237053 3.18862 0 3.73646 0 4.30769V25.8462C0 26.4174 0.237053 26.9652 0.65901 27.3692C1.08097 27.7731 1.65326 28 2.25 28H6.75V25.8462H2.25V4.30769H6.75V6.46154H9V4.30769H18V6.46154H20.25V4.30769H24.75V10.7692H27V4.30769Z"
        fill="#FFBB00"
      />
    </svg>
  );
}
