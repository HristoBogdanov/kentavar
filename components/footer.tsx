export default function Footer() {
  return (
    <footer className="w-full bg-[#101010]">
      <div className="container mx-auto text-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center uppercase">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black">виж още</h2>
            <ul className="text-xl flex flex-col gap-2">
              <li>начало</li>
              <li>за нас</li>
              <li>новини</li>
              <li>контакти</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center uppercase">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black">контакти</h2>
            <ul className="text-xl flex flex-col gap-2">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center uppercase">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-black">зали</h2>
            <ul className="text-xl flex flex-col gap-2">
              <li>начало</li>
              <li>за нас</li>
              <li>новини</li>
              <li>контакти</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
