interface Props {
  imagePath: string;
  text: string;
}

export default function HistoryParagraph({ imagePath, text }: Props) {
  return (
    <div className="w-full flex flex-col">
      <div
        className="w-[100vw] max-w-[1300px] aspect-video relative bg-cover bg-center"
        style={{ backgroundImage: `url('${imagePath}')` }}
      >
        <div className="w-0 lg:w-[50vw] bg-black h-0 overflow-hidden lg:h-fit absolute left-[50vw] top-1/2 -translate-y-1/2 border-l-8 border-red-800 p-0 lg:p-20">
          <p className="text-white text-lg lg:text-xl">{text}</p>
        </div>
      </div>
      <div className="w-[100vw] lg:w-0 bg-black h-fit lg:h-0 border-l-8 border-red-800 p-10 lg:p-0 overflow-hidden">
        <p className="text-white text-lg lg:text-xl">{text}</p>
      </div>
    </div>
  );
}
