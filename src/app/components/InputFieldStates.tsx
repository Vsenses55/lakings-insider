import svgPaths from "../../imports/svg-9xkfjv4ldw";

type InputFieldStateProps = {
  state: "Default" | "Hover" | "Focused" | "Error";
  label: string;
};

function InputFieldState({ state, label }: InputFieldStateProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-semibold text-[14px] text-[#0f172b]">{label}</p>
      
      {state === "Default" && (
        <div className="relative w-full max-w-[500px]">
          <div className="h-[50px] relative w-full bg-[#f9f9f9]">
            <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] size-full">
                <p 
                  className="font-normal leading-[20px] text-[#999] text-[16px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                >
                  Enter Email
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {state === "Hover" && (
        <div className="relative w-full max-w-[500px]">
          <div className="h-[50px] relative w-full bg-[#ebebeb]">
            <div aria-hidden="true" className="absolute border-[#999] border-[0.5px] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] size-full">
                <p 
                  className="font-normal leading-[20px] text-[#111] text-[16px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                >
                  Enter Email
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {state === "Focused" && (
        <div className="relative w-full max-w-[500px]">
          <div className="h-[50px] relative w-full bg-[#414347]">
            <div aria-hidden="true" className="absolute border-2 border-[#999] border-solid inset-0 pointer-events-none" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] size-full">
                <p 
                  className="font-normal leading-[normal] text-[#999] text-[15px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                >
                  |
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {state === "Error" && (
        <div className="relative w-full max-w-[500px]">
          <div className="bg-[#d9d9d9] h-[50px] relative w-full">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center px-[20px] py-[15px] size-full">
                <p 
                  className="font-normal leading-[normal] text-[#999] text-[15px] whitespace-nowrap"
                  style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}
                >
                  Email
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InputFieldStates() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <InputFieldState state="Default" label="State: Default" />
      <InputFieldState state="Hover" label="State: Hover" />
      <InputFieldState state="Focused" label="State: Focused" />
      <InputFieldState state="Error" label="State: Error" />
    </div>
  );
}