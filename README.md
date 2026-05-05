# DDI Escape Room — Verifier App

A web-based QR code verifier built for the **Decentralised Digital Identity (DDI) escape room experience**.

## What it does

Participants in the escape room scan QR codes of TRUST_ALiiance agents with this app to identify the trusted contact and obtain the passphrase. The app verifies the code and displays one of two outcomes:

- **Identity Verified** — the agent's credential is valid and they receive the passphrase to proceed
- **Verification Failed** — the credential is rejected, with a specific failure reason displayed

## Live app

[https://shanecasey.github.io/ddi_escaperoom/](https://shanecasey.github.io/ddi_escaperoom/)

## QR codes

The `QR codes/` folder contains the 12 SVG QR codes used in the experience:

| File | Result |
|------|--------|
| `IDENTITY-VERIFIED.svg` | ✅ Success |
| `FAIL-CLEARANCE-LEVEL.svg` | ❌ Insufficient clearance level |
| `FAIL-DUPLICATE-SCAN.svg` | ❌ Credential already scanned |
| `FAIL-EXPIRED-TOKEN.svg` | ❌ Token has expired |
| `FAIL-INCOMPLETE.svg` | ❌ Incomplete credential data |
| `FAIL-INVALID-PROOF.svg` | ❌ Invalid cryptographic proof |
| `FAIL-REVOKED-ACCESS.svg` | ❌ Access has been revoked |
| `FAIL-SUSPECTED-BOT.svg` | ❌ Suspected bot activity |
| `FAIL-SUSPENDED.svg` | ❌ Account suspended |
| `FAIL-TAMPERED-DATA.svg` | ❌ Tampered data detected |
| `FAIL-UNKNOWN-AGENT.svg` | ❌ Unknown agent |
| `FAIL-UNRECOGNIZED-ISSUER.svg` | ❌ Unrecognized credential issuer |

## Tech

Built with Figma Make — React, Vite, Tailwind CSS. Deployed via GitHub Actions to GitHub Pages.