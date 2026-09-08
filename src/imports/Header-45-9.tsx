import imgLogoWhite from "figma:asset/22c3e68e7eabf2834b7b9a2410f4146c7d42d872.png";

export default function Header() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-center justify-center px-[1450px] py-[24px] relative size-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[218.276px]" data-name="Logo">
        <div className="h-[52px] relative shrink-0 w-full" data-name="Logo_White">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogoWhite} />
        </div>
      </div>
    </div>
  );
}