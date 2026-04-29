import { useNavigate } from "react-router";
import { ScreenLayout } from "./screen-layout";

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <ScreenLayout>
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-[5vh]">
        {/* Title section */}
        <div className="flex flex-col items-center text-center gap-[2.5vh]">
          <h1
            className="text-white tracking-[1.8px]"
            style={{
              fontFamily: "'new-science-mono', sans-serif",
              fontSize: "clamp(28px, 8vw, 36px)",
              fontWeight: 600,
              lineHeight: "1.15",
            }}
          >
            CONTACT
            <br />
            VERIFIER
          </h1>
          <p
            className="text-white text-center"
            style={{
              fontFamily: "'degular', sans-serif",
              fontSize: "clamp(18px, 5vw, 21px)",
              lineHeight: "1.2",
              fontWeight: 400,
            }}
          >
            Use this app to verify
            <br />
            TRUST_Alliance Field
            <br />
            Operative credentials.
          </p>
        </div>

        {/* Scan button */}
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
            SCAN
          </span>
        </button>
      </div>
    </ScreenLayout>
  );
}