"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive web thread effect.
 * Shoots strands from the bottom corners on click and leaves a subtle thread trail.
 */
export function WebTrail() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let points: { x: number; y: number; life: number }[] = [];
    let webs: { startX: number; startY: number; endX: number; endY: number; life: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMove = (event: MouseEvent) => {
      points.push({
        x: event.clientX,
        y: event.clientY,
        life: 0.5
      });
      if (points.length > 20) points.shift();
    };

    const onClick = (event: MouseEvent) => {
      const isLeft = event.clientX < window.innerWidth / 2;
      webs.push({
        startX: isLeft ? 0 : window.innerWidth,
        startY: window.innerHeight,
        endX: event.clientX,
        endY: event.clientY,
        life: 1.0
      });
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw Web Shooters (clicks)
      for (let i = webs.length - 1; i >= 0; i--) {
        const w = webs[i];
        w.life -= 0.015;
        
        if (w.life <= 0) {
          webs.splice(i, 1);
          continue;
        }

        context.beginPath();
        context.moveTo(w.startX, w.startY);
        
        // Slight curve for the web
        const cpX = (w.startX + w.endX) / 2 + 50;
        const cpY = (w.startY + w.endY) / 2 - 50;
        
  // Alternate between red and blue strands for a cinematic feel
        const isRed = i % 2 === 0;
        context.strokeStyle = isRed 
          ? `rgba(214, 40, 40, ${w.life * 0.9})` 
          : `rgba(29, 78, 216, ${w.life * 0.9})`;
        context.lineWidth = 2.0;
        context.stroke();

        // Web hit explosion (classic white/web center)
        context.beginPath();
        context.arc(w.endX, w.endY, 20 * (1 - w.life), 0, Math.PI * 2);
        context.strokeStyle = `rgba(255, 255, 255, ${w.life * 0.8})`;
        context.stroke();
      }

      // Update and draw Trail
      let livePoints = [];
      for (let i = 0; i < points.length; i++) {
        points[i].life -= 0.02;
        if (points[i].life > 0) {
          livePoints.push(points[i]);
        }
      }
      points = livePoints;

      if (points.length > 1) {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          context.lineTo(points[i].x, points[i].y);
        }
        context.strokeStyle = `rgba(255, 255, 255, 0.15)`;
        context.lineWidth = 1;
        context.stroke();
      }

      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[60] opacity-90"
      aria-hidden
    />
  );
}
