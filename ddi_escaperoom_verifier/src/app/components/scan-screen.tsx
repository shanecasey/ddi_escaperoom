import { playDetectionBeep, preloadAudio } from "../config/audio";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";
import { ScreenLayout } from "./screen-layout";
import { SUCCESS_CODE, FAIL_CODES } from "../config/qr-codes";

// Safely stop the scanner only if it's actually running or paused
function safeStopScanner(scannerRef: React.MutableRefObject<Html5Qrcode | null>) {
  try {
    const scanner = scannerRef.current;
    if (scanner) {
      const state = scanner.getState();
      if (
        state === Html5QrcodeScannerState.SCANNING ||
        state === Html5QrcodeScannerState.PAUSED
      ) {
        scanner.stop().catch(() => {});
      }
    }
  } catch {
    // ignore — scanner may already be destroyed
  } finally {
    scannerRef.current = null;
  }
}

export function ScanScreen() {
  const navigate = useNavigate();
  const scannerRef = useRef<Html5Qrcode | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const processedRef = useRef(false);
  const navigateRef = useRef(navigate);
  navigateRef.current = navigate;

  // Manual code entry for testing/fallback
  const [manualCode, setManualCode] = useState("");

  useEffect(() => {
    let cancelled = false;

    // Preload result screen audio so playback is instant
    preloadAudio();

    const processCode = (decodedText: string) => {
      if (processedRef.current || cancelled) return;

      if (decodedText === SUCCESS_CODE) {
        processedRef.current = true;
        playDetectionBeep();
        safeStopScanner(scannerRef);
        navigateRef.current("/success");
      } else {
        const failEntry = FAIL_CODES.find((f) => f.code === decodedText);
        if (failEntry) {
          processedRef.current = true;
          playDetectionBeep();
          safeStopScanner(scannerRef);
          navigateRef.current("/fail", {
            state: {
              title: failEntry.title,
              message: failEntry.message,
            },
          });
        }
        // Unknown code — keep scanning (do nothing)
      }
    };

    const startScanner = async () => {
      processedRef.current = false;

      try {
        const scanner = new Html5Qrcode("qr-reader", {
          verbose: false,
        });
        scannerRef.current = scanner;

        await scanner.start(
          { facingMode: "environment" },
          {
            fps: 10,
            qrbox: { width: 180, height: 180 },
            aspectRatio: 1,
          },
          (decodedText) => {
            processCode(decodedText);
          },
          () => {
            // No QR found yet — ignore
          }
        );

        if (!cancelled) {
          setScanning(true);
        }
      } catch (err: unknown) {
        if (!cancelled) {
          const msg = err instanceof Error ? err.message : String(err);
          setError(msg);
          setScanning(false);
        }
      }
    };

    startScanner();

    return () => {
      cancelled = true;
      safeStopScanner(scannerRef);
    };
  }, []);

  const handleManualSubmit = () => {
    const code = manualCode.trim();
    if (!code) return;

    safeStopScanner(scannerRef);

    if (code === SUCCESS_CODE) {
      navigate("/success");
    } else {
      const failEntry = FAIL_CODES.find((f) => f.code === code);
      if (failEntry) {
        navigate("/fail", {
          state: { title: failEntry.title, message: failEntry.message },
        });
      } else {
        setManualCode("");
      }
    }
  };

  return (
    <ScreenLayout>
      {/* Hide html5-qrcode injected UI */}
      <style>{`
        #qr-reader {
          border: none !important;
          width: 100% !important;
          height: 100% !important;
        }
        #qr-reader > div:nth-child(2) {
          display: none !important;
        }
        #qr-reader > div:nth-child(3) {
          display: none !important;
        }
        #qr-reader video {
          object-fit: cover !important;
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        #qr-reader img {
          display: none !important;
        }
        #qr-reader__scan_region {
          min-height: unset !important;
          width: 100% !important;
          height: 100% !important;
          overflow: hidden !important;
        }
        #qr-reader__scan_region > br {
          display: none !important;
        }
        #qr-reader__scan_region > div {
          width: 100% !important;
          height: 100% !important;
        }
        #qr-reader__dashboard_section {
          display: none !important;
        }
        #qr-reader__dashboard_section_csr,
        #qr-reader__dashboard_section_swaplink,
        #qr-reader__status_span,
        #qr-reader__header_message {
          display: none !important;
        }
        #qr-shaded-region {
          display: none !important;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center flex-1 w-full gap-[3vh]">
        {/* Camera viewfinder area */}
        <div
          className="relative w-[70vw] max-w-[264px] bg-[#212121] overflow-hidden"
          style={{ aspectRatio: "264 / 432" }}
        >
          {/* QR scanner renders here */}
          <div
            id="qr-reader"
            className="absolute inset-0 overflow-hidden"
          />

          {/* Corner brackets overlay */}
          <div className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center">
            <div
              className="relative"
              style={{ width: "75%", height: "48%" }}
            >
              <svg
                className="block w-full h-full"
                fill="none"
                viewBox="0 0 199 205"
                preserveAspectRatio="none"
              >
                <path d="M56.5 0.5H0.5V56.5" stroke="white" strokeWidth="1" />
                <path
                  d="M142.5 204.5L198.5 204.5L198.5 148.5"
                  stroke="white"
                  strokeWidth="1"
                />
                <path d="M142.5 0.5H198.5V56.5" stroke="white" strokeWidth="1" />
                <path
                  d="M56.5 204.5L0.5 204.5L0.500005 148.5"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>

          {/* Scanning indicator */}
          {scanning && (
            <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center">
              <span
                className="text-white/70 tracking-[1.5px]"
                style={{
                  fontFamily: "'new-science-mono', sans-serif",
                  fontSize: "10px",
                }}
              >
                SCANNING...
              </span>
            </div>
          )}
        </div>

        {/* Error / manual input fallback */}
        {error && (
          <div className="flex flex-col items-center gap-2 w-full max-w-[264px]">
            <p
              className="text-white/50 text-center"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.5px",
              }}
            >
              CAMERA UNAVAILABLE
            </p>
            <input
              type="text"
              value={manualCode}
              onChange={(e) => setManualCode(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleManualSubmit()}
              placeholder="Enter QR code value"
              className="w-full bg-[#212121] border border-white/30 text-white px-3 py-2 outline-none focus:border-white/60"
              style={{
                fontFamily: "'new-science-mono', sans-serif",
                fontSize: "13px",
              }}
            />
          </div>
        )}

        {/* Verify button */}
        <button
          onClick={error ? handleManualSubmit : () => {}}
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
            VERIFY
          </span>
        </button>
      </div>
    </ScreenLayout>
  );
}