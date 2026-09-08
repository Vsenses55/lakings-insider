import imgLogoWhite from "figma:asset/565011f0c92ee033210f2e9a9169872b17c5838a.png";

export default function Header() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[1450px] py-[24px] relative size-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[218.276px]" data-name="Logo">
        <div className="h-[52px] relative shrink-0 w-full" data-name="Logo_White">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLogoWhite} />
          </div>
        </div>
      </div>
    </div>
  );
}