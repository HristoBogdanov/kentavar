export default function GridImage({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="w-full h-[500px] overflow-hidden relative">
      <div
        style={{ backgroundImage: `url('${imageUrl}')` }}
        className="h-full w-full bg-cover bg-center transition-transform duration-500 ease-in-out transform hover:scale-110"
      ></div>
    </div>
  );
}