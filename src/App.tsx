import './App.css'
import IntroContainer from './IntroContainer';
import Experiences from './Experiences';
import Contact from './Contact';
import { useEffect, useRef, useState } from "react";
import type { PortfolioContent } from "./types";
import "./ComingSoon.css";

type Particle = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  a: number;
};

// This function renders all of the background and particles
// Content and components should be added in the return statment
function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Null until content is loaded.
  const [content, setContent] = useState<PortfolioContent | null>(null);

  // Single fetch for the whole page.
  useEffect(() => {
    fetch('/data.json')
      .then((r) => r.json() as Promise<PortfolioContent>)
      .then(setContent)
      .catch(() => setContent(null));
  }, []);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;

    const createParticles = () => {
      const count = Math.round(
        Math.min(90, Math.max(24, (width * height) / 18000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.7 + 0.6,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        a: Math.random() * 0.55 + 0.2,
      }));
    };

    const draw = (move: boolean) => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (move) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < -12) p.x = width + 12;
          if (p.x > width + 12) p.x = -12;
          if (p.y < -12) p.y = height + 12;
          if (p.y > height + 12) p.y = -12;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(150, 185, 255, ${p.a})`;
        ctx.fill();
      }
    };

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();

      if (prefersReduced) draw(false);
    };

    const loop = () => {
      draw(true);
      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReduced) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);


// Nest components here to include in the page.
  return (
    <main className="coming-soon">
      <canvas
        ref={canvasRef}
        className="coming-soon__canvas"
        aria-hidden="true"
      />

      <div className="coming-soon__content">
        <IntroContainer introduction={content?.introduction} />
        <Experiences experiences={content?.experiences} />
        <Contact />

        <div className="coming-soon__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </main>
  );
}
export default App