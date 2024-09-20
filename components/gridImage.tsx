export default function GridImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full h-[400px] lg:h-[500px] overflow-hidden relative">
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="h-full w-full bg-cover bg-top transition-transform duration-500 ease-in-out transform hover:scale-110"
      ></div>
    </div>
  );
}
