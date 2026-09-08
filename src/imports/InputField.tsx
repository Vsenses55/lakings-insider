import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center size-full">
      <div className="content-stretch flex items-center px-[20px] py-[15px] relative size-full">{children}</div>
    </div>
  );
}
type InputFieldEntryFieldProps = {
  additionalClassNames?: string;
};

function InputFieldEntryField({ children, additionalClassNames = "" }: React.PropsWithChildren<InputFieldEntryFieldProps>) {
  return (
    <div className={clsx("h-[50px] relative shrink-0 w-full", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
type InputFieldTextProps = {
  text: string;
};

function InputFieldText({ text }: InputFieldTextProps) {
  return (
    <Wrapper>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#999] text-[15px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
        {text}
      </p>
    </Wrapper>
  );
}
type InputFieldProps = {
  className?: string;
  state?: "Default" | "Hover" | "Focused" | "Error";
};

function InputField({ className, state = "Default" }: InputFieldProps) {
  if (state === "Error") {
    return (
      <div className={className || "relative w-[500px]"} data-name="State=Error">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="h-[9px] relative shrink-0 w-[89px]" data-name="Labels">
            <p className="absolute font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[normal] left-0 text-[#b03335] text-[13px] top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Error Message
            </p>
          </div>
          <div className="bg-[#d9d9d9] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <InputFieldText text="Email" />
          </div>
        </div>
      </div>
    );
  }
  if (state === "Focused") {
    return (
      <div className={className || "relative w-[500px]"} data-name="State=Focused">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <div className="bg-[#414347] h-[50px] relative shrink-0 w-full" data-name="Entry Field">
            <div aria-hidden="true" className="absolute border-2 border-[#999] border-solid inset-0 pointer-events-none" />
            <InputFieldText text="|" />
          </div>
        </div>
      </div>
    );
  }
  if (state === "Hover") {
    return (
      <button className={className || "cursor-pointer relative w-[500px]"} data-name="State=Hover">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
          <InputFieldEntryField additionalClassNames="bg-[#ebebeb]">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#111] text-[16px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Enter Email
            </p>
          </InputFieldEntryField>
        </div>
      </button>
    );
  }
  return (
    <div className={className || "relative w-[500px]"} data-name="State=Default">
      <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <InputFieldEntryField additionalClassNames="bg-[#f9f9f9]">
          <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#999] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            Enter Email
          </p>
        </InputFieldEntryField>
      </div>
    </div>
  );
}

export default function InputField1() {
  return <InputField className="relative size-full" />;
}