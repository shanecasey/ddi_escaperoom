// ============================================
// QR CODE CONFIGURATION
// Update these values to match your QR codes
// ============================================

/**
 * The QR code text value that grants access (SUCCESS).
 * When scanned, the app will show the "IDENTITY CONFIRMED" screen.
 */
export const SUCCESS_CODE = "IDENTITY-VERIFIED";

/**
 * The 11 QR code text values that trigger denial (FAIL).
 * Each has a unique title and message shown on the FAIL screen.
 */
export const FAIL_CODES: {
  code: string;
  title: string;
  message: string;
}[] = [
  {
    code: "FAIL-INVALID-PROOF",
    title: "INVALID PROOF",
    message: "Cryptographic proof failed verification.",
  },
  {
    code: "FAIL-EXPIRED-TOKEN",
    title: "EXPIRED TOKEN",
    message:
      "Credential token has exceeded its validity window.",
  },
  {
    code: "FAIL-REVOKED-ACCESS",
    title: "REVOKED ACCESS",
    message:
      "Operative credentials have been permanently revoked.",
  },
  {
    code: "FAIL-UNKNOWN-AGENT",
    title: "UNKNOWN AGENT",
    message:
      "No matching operative record found in the registry.",
  },
  {
    code: "FAIL-TAMPERED-DATA",
    title: "TAMPERED DATA",
    message:
      "QR payload integrity check failed. Data has been altered.",
  },
  {
    code: "FAIL-UNRECOGNIZED-ISSUER",
    title: "UNRECOGNIZED ISSUER",
    message: "Issuer not found in trust registry.",
  },
  {
    code: "FAIL-DUPLICATE-SCAN",
    title: "DUPLICATE SCAN",
    message:
      "This credential has already been verified at another checkpoint.",
  },
  {
    code: "FAIL-SUSPENDED",
    title: "SUSPENDED",
    message: "Credential under investigation; pending review.",
  },
  {
    code: "FAIL-SUSPECTED-BOT",
    title: "SUSPECTED BOT",
    message:
      "Automation signals detected. Contact command immediately.",
  },
  {
    code: "FAIL-CLEARANCE-LEVEL",
    title: "INSUFFICIENT CLEARANCE",
    message:
      "Operative clearance level does not meet minimum requirements.",
  },
  {
    code: "FAIL-INCOMPLETE",
    title: "CLAIM SET INCOMPLETE ",
    message:
      "Required attributes missing. Verification failed.",
  },
];