export default function Button() {
  return (
    <button className="bg-black relative size-full hover:bg-[#333] transition-colors cursor-pointer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[16px] relative size-full">
          <p className="font-['Flama',sans-serif] leading-[normal] not-italic relative shrink-0 text-[15px] text-white whitespace-nowrap" style={{ fontWeight: 700 }}>MORE NEWS</p>
        </div>
      </div>
    </button>
  );
}