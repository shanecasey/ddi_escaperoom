import { useNavigate } from "react-router";
import { useEffect } from "react";
import { ScreenLayout } from "./screen-layout";
import { playVerifiedSound } from "../config/audio";

export function SuccessScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    playVerifiedSound();
  }, []);

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-[3vh]">
        {/* Title section */}
        <div className="flex flex-col items-center text-center gap-[2vh]">
          <div>
            <p
              className="text-white tracking-[0.72px]"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(28px, 8vw, 36px)",
                fontWeight: 300,
                lineHeight: "1.15",
              }}
            >
              IDENTITY
            </p>
            <p
              className="text-[#04ff00] tracking-[0.72px]"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(28px, 8vw, 36px)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              CONFIRMED
            </p>
          </div>
          <p
            className="text-white text-center"
            style={{
              fontFamily: "'degular', sans-serif",
              fontSize: "16px",
              lineHeight: "1.5",
              fontWeight: 400,
            }}
          >
            Presented credentials successfully verified.
          </p>
        </div>

        {/* Info box */}
        <div
          className="w-full bg-white/20 px-4 py-5 flex flex-col gap-4"
          style={{ maxWidth: "333px" }}
        >
          <div>
            <p
              className="text-white"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(16px, 4.5vw, 21px)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              {"//CODENAME:"}
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(16px, 4.5vw, 21px)",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              OPERATIVE 012 'EDEN'
            </p>
          </div>
          <div>
            <p
              className="text-white"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(16px, 4.5vw, 21px)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              {"//PASSPHRASE:"}
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(16px, 4.5vw, 21px)",
                fontWeight: 400,
                lineHeight: "1.15",
              }}
            >
              THE CENTER CANNOT HOLD
            </p>
          </div>
        </div>

        {/* Back button (arrow) */}
        <button
          onClick={() => navigate("/")}
          className="bg-black border-[1.25px] border-solid border-white cursor-pointer hover:bg-white/10 transition-colors active:bg-white/20 flex items-center justify-center"
          style={{ width: "63px", height: "63px" }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: "'new-science-mono', sans-serif",
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            &#8592;
          </span>
        </button>
      </div>
    </ScreenLayout>
  );
}