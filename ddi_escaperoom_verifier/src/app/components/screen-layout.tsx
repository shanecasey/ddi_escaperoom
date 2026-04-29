import imgGlitchTexture from "figma:asset/aff96e31fa24369247382aec72bf46450b68bdfe.png";

const BORDER_PATH = "M46 801.5H0.5V0.5H68.5M288 801.5H333.5V0.5H266";

export function ScreenLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black w-full h-dvh overflow-hidden relative flex flex-col items-center">
      {/* Background textures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 rotate-180 opacity-15">
          <img
            alt=""
            className="absolute w-[300%] h-[250%] -left-[100%] -top-[75%] max-w-none"
            src={imgGlitchTexture}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(270deg, rgb(0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,0) 90%, rgb(0,0,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* Content container */}
      <div
        className="relative z-10 flex flex-col items-center w-full h-full px-4"
        style={{ maxWidth: "min(333px, 85vw)" }}
      >
        {/* Header */}
        <div className="flex-none" style={{ paddingTop: "calc(6vh - 10px)" }}>
          <p
            className="text-white text-center tracking-[1.28px]"
            style={{ fontFamily: "'new-science-mono', sans-serif", fontSize: "16px" }}
          >
            TRUST_ALLIANCE
          </p>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col items-center justify-center w-full min-h-0">
          {children}
        </div>

        {/* Footer */}
        <div className="flex-none" style={{ paddingBottom: "calc(3vh - 10px)" }}>
          <p
            className="text-white text-center tracking-[1.28px] opacity-50"
            style={{ fontFamily: "'new-science-mono', sans-serif", fontSize: "16px" }}
          >
            OPERATIVE USE ONLY
          </p>
        </div>
      </div>

      {/* Border frame */}
      <div
        className="absolute z-20 pointer-events-none"
        style={{
          top: "6vh",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(333px, 85vw)",
          height: "calc(100dvh - 9vh)",
        }}
      >
        <svg
          className="block w-full h-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 334 802"
        ><path></path><path d={BORDER_PATH} stroke="white" /></svg>
      </div>
    </div>
  );
}