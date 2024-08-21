"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function StatisticBox({
  number,
  text,
}: {
  number: number;
  text: string;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="w-full flex justify-center items-center">
      <div className="relative w-[160px] font-black text-center ">
        <p className="text-[150px] text-[#656565] opacity-20">
          {inView && <CountUp end={number} duration={10} />}
        </p>
        <p className="absolute text-6xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-center items-center gap-8 uppercase">
          {inView && <CountUp end={number} duration={10} />}
        </p>
      </div>
      <p className="text-2xl font-black uppercase w-[140px] text-wrap">
        {text}
      </p>
    </div>
  );
}
