// Audio feedback for QR verification

const VERIFIED_SRC = "https://github.com/shanecasey/ddi_escaperoom/raw/refs/heads/main/audio/verified.mp3";
const FAILED_SRC = "https://github.com/shanecasey/ddi_escaperoom/raw/refs/heads/main/audio/failed.mp3";

// Preloaded audio elements — cached so playback is instant
let verifiedAudio: HTMLAudioElement | null = null;
let failedAudio: HTMLAudioElement | null = null;

/**
 * Preloads both MP3s into memory. Call on scan screen mount
 * so they're ready to play instantly on result screens.
 */
export function preloadAudio() {
  try {
    if (!verifiedAudio) {
      verifiedAudio = new Audio(VERIFIED_SRC);
      verifiedAudio.preload = "auto";
      verifiedAudio.load();
    }
    if (!failedAudio) {
      failedAudio = new Audio(FAILED_SRC);
      failedAudio.preload = "auto";
      failedAudio.load();
    }
  } catch {
    // silently ignore
  }
}

/**
 * Plays the verified/success MP3
 */
export function playVerifiedSound() {
  try {
    if (verifiedAudio) {
      verifiedAudio.currentTime = 0;
      verifiedAudio.volume = 0.8;
      verifiedAudio.play().catch(() => {});
    } else {
      const audio = new Audio(VERIFIED_SRC);
      audio.volume = 0.8;
      audio.play().catch(() => {});
    }
  } catch {
    // Audio not available — silently ignore
  }
}

/**
 * Plays the failed/denied MP3
 */
export function playFailedSound() {
  try {
    if (failedAudio) {
      failedAudio.currentTime = 0;
      failedAudio.volume = 0.8;
      failedAudio.play().catch(() => {});
    } else {
      const audio = new Audio(FAILED_SRC);
      audio.volume = 0.8;
      audio.play().catch(() => {});
    }
  } catch {
    // Audio not available — silently ignore
  }
}

/**
 * Plays a subtle beep when a QR code is first detected (before routing)
 * Uses Web Audio API to synthesize a short, soft tone
 */
let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

export function playDetectionBeep() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 880; // A5 — clean, short pip
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.12);
  } catch {
    // Audio not available — silently ignore
  }
}