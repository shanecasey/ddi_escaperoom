import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { ScreenLayout } from "./screen-layout";
import { playFailedSound } from "../config/audio";

export function FailScreen() {
  const navigate = useNavigate();
  const location = useLocation();

  const { title, message } = (location.state as {
    title?: string;
    message?: string;
  }) || {
    title: "UNKNOWN ERROR",
    message: "An unspecified verification error occurred.",
  };

  useEffect(() => {
    playFailedSound();
  }, []);

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-[4vh]">
        {/* Title section */}
        <div className="flex flex-col items-center text-center gap-[2.5vh]">
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
              CLEARANCE
            </p>
            <p
              className="text-[red] tracking-[0.72px]"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(28px, 8vw, 36px)",
                fontWeight: 600,
                lineHeight: "1.15",
              }}
            >
              DENIED
            </p>
          </div>

          {/* Fail-specific message */}
          <div className="flex flex-col items-center text-center gap-1">
            <p
              className="text-white"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "clamp(15px, 4vw, 18px)",
                fontWeight: 600,
                lineHeight: "1.4",
              }}
            >
              {title}
            </p>
            <p
              className="text-white"
              style={{
                fontFamily: "'degular', sans-serif",
                fontSize: "clamp(18px, 5vw, 21px)",
                lineHeight: "1.2",
                fontWeight: 400,
              }}
            >
              {message}
            </p>
          </div>
        </div>

        {/* Retry button */}
        <button
          onClick={() => navigate("/scan")}
          className="bg-black border-[1.25px] border-solid border-white px-10 py-4 cursor-pointer hover:bg-white/10 transition-colors active:bg-white/20"
          style={{ minWidth: "149px" }}
        >
          <span
            className="text-white tracking-[2.1px]"
            style={{
              fontFamily: "'new-science-mono', sans-serif",
              fontSize: "21px",
              fontWeight: 700,
            }}
          >
            RETRY
          </span>
        </button>
      </div>
    </ScreenLayout>
  );
}