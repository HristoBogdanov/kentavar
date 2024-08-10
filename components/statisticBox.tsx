export default function StatisticBox({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="relative w-[160px] font-black text-center ">
        <p className="text-[150px] text-[#656565] opacity-20">{number}</p>
        <p className="absolute text-6xl left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex justify-center items-center gap-8 uppercase">
          {number}
        </p>
      </div>
      <p className="text-2xl font-black uppercase w-[140px] text-wrap">
        {text}
      </p>
    </div>
  );
}
