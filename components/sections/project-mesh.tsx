"use client";

import { useEffect, useRef } from "react";

export default function ProjectMesh({ index }: { index: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 300);
    const height = (canvas.height = 200);

    let rotation = 0;

    // Generate specific 3D node shapes based on row indexes
    // Index 0: Tech Grid Prism / Index 1: Isometric Diamond Frame
    const points: Array<{ x: number; y: number; z: number }> = [];
    if (index === 0) {
      for (let x = -1; x <= 1; x += 1) {
        for (let y = -1; y <= 1; y += 1) {
          points.push({ x: x * 40, y: y * 40, z: 0 });
          points.push({ x: x * 40, y: y * 40, z: 30 });
        }
      }
    } else {
      points.push({ x: 0, y: -50, z: 0 });
      points.push({ x: 50, y: 0, z: 0 });
      points.push({ x: 0, y: 50, z: 0 });
      points.push({ x: -50, y: 0, z: 0 });
      points.push({ x: 0, y: 0, z: 40 });
      points.push({ x: 0, y: 0, z: -40 });
    }

    const project = (x: number, y: number, z: number) => {
      const cameraDistance = 200;
      const scale = cameraDistance / (cameraDistance + z);
      return {
        x: x * scale + width / 2,
        y: y * scale + height / 2,
      };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      rotation += 0.01;

      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      const projected = points.map((p) => {
        // Rotate on Y and Z dimensions simultaneously
        const x1 = p.x * cos - p.z * sin;
        const z1 = p.x * sin + p.z * cos;
        const y2 = p.y * cos - z1 * sin;
        const z2 = p.y * sin + z1 * cos;
        return project(x1, y2, z2);
      });

      // Draw structural cyber tech connecting lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
      
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y, points[i].z - points[j].z);
          if (dist < 60) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Render glowing intersection matrix points
      ctx.fillStyle = "rgba(34, 211, 238, 0.7)";
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [index]);

  return (
    <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-white/5 bg-slate-950/50 backdrop-blur-sm overflow-hidden">
      <canvas ref={canvasRef} className="block pointer-events-none" />
    </div>
  );
}
