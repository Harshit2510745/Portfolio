"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function AmbientAudioToggle() {
  const [on, setOn] = useState(false);
  const contextRef = useRef<AudioContext | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const toggle = async () => {
    if (!contextRef.current) {
      const ctx = new AudioContext();
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = 64;
      gain.gain.value = 0.012;
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start();
      contextRef.current = ctx;
      gainRef.current = gain;
    }

    if (on) {
      gainRef.current?.gain.setTargetAtTime(0, contextRef.current!.currentTime, 0.2);
    } else {
      await contextRef.current.resume();
      gainRef.current?.gain.setTargetAtTime(
        0.012,
        contextRef.current.currentTime,
        0.2
      );
    }

    setOn((prev) => !prev);
  };

  return (
    <Button
      variant="ghost"
      className="h-10 w-10 rounded-full p-0"
      aria-label={on ? "Disable ambient audio" : "Enable ambient audio"}
      onClick={toggle}
    >
      {on ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
}
