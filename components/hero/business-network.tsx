"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

type Block = {
  x: number;
  y: number;
  width: number;
  height: number;
  phase: number;
};

type Connection = {
  from: number;
  to: number;
};

const BLUEPRINT_BLOCKS: Block[] = [
  { x: 0.08, y: 0.2, width: 0.16, height: 0.115, phase: 0.2 },
  { x: 0.31, y: 0.1, width: 0.19, height: 0.13, phase: 1.4 },
  { x: 0.61, y: 0.18, width: 0.17, height: 0.11, phase: 2.2 },
  { x: 0.25, y: 0.46, width: 0.19, height: 0.125, phase: 3.1 },
  { x: 0.55, y: 0.42, width: 0.21, height: 0.14, phase: 4.1 },
  { x: 0.79, y: 0.52, width: 0.13, height: 0.11, phase: 5.2 },
  { x: 0.12, y: 0.72, width: 0.18, height: 0.12, phase: 0.8 },
  { x: 0.43, y: 0.7, width: 0.18, height: 0.13, phase: 2.8 },
  { x: 0.72, y: 0.76, width: 0.16, height: 0.105, phase: 4.8 },
];

const CONNECTIONS: Connection[] = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 0, to: 3 },
  { from: 1, to: 4 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 4 },
  { from: 3, to: 6 },
  { from: 4, to: 5 },
  { from: 4, to: 7 },
  { from: 5, to: 8 },
  { from: 6, to: 7 },
  { from: 7, to: 8 },
];

function getBlocks(width: number, height: number) {
  const scale = Math.min(width, height);

  return BLUEPRINT_BLOCKS.map((block) => ({
    x: block.x * width,
    y: block.y * height,
    width: Math.max(74, block.width * width),
    height: Math.max(44, Math.min(block.height * height, scale * 0.18)),
    phase: block.phase,
  }));
}

function getCenter(block: Block): Point {
  return {
    x: block.x + block.width / 2,
    y: block.y + block.height / 2,
  };
}

function getAnchor(block: Block, target: Point): Point {
  const center = getCenter(block);
  const xDistance = target.x - center.x;
  const yDistance = target.y - center.y;

  if (Math.abs(xDistance) > Math.abs(yDistance)) {
    return {
      x: xDistance > 0 ? block.x + block.width : block.x,
      y: center.y,
    };
  }

  return {
    x: center.x,
    y: yDistance > 0 ? block.y + block.height : block.y,
  };
}

function getPath(from: Block, to: Block): Point[] {
  const fromCenter = getCenter(from);
  const toCenter = getCenter(to);
  const start = getAnchor(from, toCenter);
  const end = getAnchor(to, fromCenter);

  if (Math.abs(start.x - end.x) > Math.abs(start.y - end.y)) {
    const middleX = (start.x + end.x) / 2;
    return [start, { x: middleX, y: start.y }, { x: middleX, y: end.y }, end];
  }

  const middleY = (start.y + end.y) / 2;
  return [start, { x: start.x, y: middleY }, { x: end.x, y: middleY }, end];
}

function drawPath(context: CanvasRenderingContext2D, path: Point[]) {
  context.beginPath();
  context.moveTo(path[0].x, path[0].y);

  for (let index = 1; index < path.length; index += 1) {
    context.lineTo(path[index].x, path[index].y);
  }
}

function getPointOnPath(path: Point[], progress: number): Point {
  const lengths: number[] = [];
  let totalLength = 0;

  for (let index = 1; index < path.length; index += 1) {
    const length = Math.hypot(
      path[index].x - path[index - 1].x,
      path[index].y - path[index - 1].y,
    );
    lengths.push(length);
    totalLength += length;
  }

  let remaining = totalLength * progress;

  for (let index = 0; index < lengths.length; index += 1) {
    if (remaining <= lengths[index]) {
      const start = path[index];
      const end = path[index + 1];
      const segmentProgress = lengths[index] === 0 ? 0 : remaining / lengths[index];

      return {
        x: start.x + (end.x - start.x) * segmentProgress,
        y: start.y + (end.y - start.y) * segmentProgress,
      };
    }

    remaining -= lengths[index];
  }

  return path[path.length - 1];
}

export default function BusinessNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = canvas?.parentElement;

    if (!canvas || !section) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let isVisible = !document.hidden;
    let reducedMotion = motionQuery.matches;
    let parallaxX = 0;
    let parallaxY = 0;

    const resize = () => {
      const bounds = section.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const drawGrid = (offsetX: number, offsetY: number) => {
      context.save();
      context.translate(offsetX, offsetY);
      context.strokeStyle = "rgba(186, 230, 253, 0.035)";
      context.lineWidth = 1;

      for (let x = -48; x < width + 48; x += 48) {
        context.beginPath();
        context.moveTo(x, -48);
        context.lineTo(x, height + 48);
        context.stroke();
      }

      for (let y = -48; y < height + 48; y += 48) {
        context.beginPath();
        context.moveTo(-48, y);
        context.lineTo(width + 48, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(186, 230, 253, 0.012)";

      for (let x = -12; x < width + 12; x += 12) {
        context.beginPath();
        context.moveTo(x, -12);
        context.lineTo(x, height + 12);
        context.stroke();
      }

      for (let y = -12; y < height + 12; y += 12) {
        context.beginPath();
        context.moveTo(-12, y);
        context.lineTo(width + 12, y);
        context.stroke();
      }

      context.restore();
    };

    const render = (time: number) => {
      frame = 0;
      context.clearRect(0, 0, width, height);
      context.fillStyle = "#070b12";
      context.fillRect(0, 0, width, height);

      const targetX = mouse.active ? ((mouse.x / width) - 0.5) * -14 : 0;
      const targetY = mouse.active ? ((mouse.y / height) - 0.5) * -10 : 0;
      parallaxX += (targetX - parallaxX) * 0.035;
      parallaxY += (targetY - parallaxY) * 0.035;

      const ambientGlow = context.createRadialGradient(
        width * 0.72,
        height * 0.36,
        0,
        width * 0.72,
        height * 0.36,
        Math.max(width, height) * 0.64,
      );
      ambientGlow.addColorStop(0, "rgba(34, 211, 238, 0.075)");
      ambientGlow.addColorStop(1, "rgba(7, 11, 18, 0)");
      context.fillStyle = ambientGlow;
      context.fillRect(0, 0, width, height);

      drawGrid(parallaxX * 0.35, parallaxY * 0.35);

      const blocks = getBlocks(width, height);
      const paths = CONNECTIONS.map((connection) =>
        getPath(blocks[connection.from], blocks[connection.to]),
      );

      context.save();
      context.translate(parallaxX, parallaxY);
      context.lineWidth = 0.8;
      context.strokeStyle = "rgba(186, 230, 253, 0.22)";

      paths.forEach((path) => {
        drawPath(context, path);
        context.stroke();
      });

      blocks.forEach((block) => {
        const breathing = reducedMotion ? 0.72 : 0.68 + Math.sin(time * 0.0007 + block.phase) * 0.08;
        const radius = 12;

        context.save();
        context.globalAlpha = breathing;
        context.fillStyle = "rgba(15, 23, 42, 0.58)";
        context.strokeStyle = "rgba(186, 230, 253, 0.48)";
        context.lineWidth = 1;
        context.shadowColor = "rgba(103, 232, 249, 0.16)";
        context.shadowBlur = 12;
        context.beginPath();
        context.roundRect(block.x, block.y, block.width, block.height, radius);
        context.fill();
        context.stroke();

        context.shadowBlur = 0;
        context.strokeStyle = "rgba(226, 232, 240, 0.12)";
        context.beginPath();
        context.moveTo(block.x + 16, block.y + 16);
        context.lineTo(block.x + Math.min(block.width - 16, 58), block.y + 16);
        context.moveTo(block.x + 16, block.y + 29);
        context.lineTo(block.x + Math.min(block.width - 16, 42), block.y + 29);
        context.stroke();
        context.restore();
      });

      if (!reducedMotion) {
        const pulseInterval = 2800;
        const pulseDuration = 1450;
        const cycle = Math.floor(time / pulseInterval);
        const elapsed = time % pulseInterval;

        if (elapsed < pulseDuration) {
          const path = paths[cycle % paths.length];
          const point = getPointOnPath(path, elapsed / pulseDuration);
          const pulseGlow = context.createRadialGradient(point.x, point.y, 0, point.x, point.y, 12);
          pulseGlow.addColorStop(0, "rgba(255, 255, 255, 0.98)");
          pulseGlow.addColorStop(0.22, "rgba(103, 232, 249, 0.9)");
          pulseGlow.addColorStop(1, "rgba(103, 232, 249, 0)");
          context.fillStyle = pulseGlow;
          context.beginPath();
          context.arc(point.x, point.y, 12, 0, Math.PI * 2);
          context.fill();
          context.fillStyle = "rgba(255, 255, 255, 0.95)";
          context.beginPath();
          context.arc(point.x, point.y, 1.8, 0, Math.PI * 2);
          context.fill();
        }
      }

      context.restore();

      const edgeFade = context.createLinearGradient(0, 0, width, 0);
      edgeFade.addColorStop(0, "rgba(7, 11, 18, 0.54)");
      edgeFade.addColorStop(0.36, "rgba(7, 11, 18, 0.12)");
      edgeFade.addColorStop(1, "rgba(7, 11, 18, 0.08)");
      context.fillStyle = edgeFade;
      context.fillRect(0, 0, width, height);

      if (!reducedMotion && isVisible) {
        frame = requestAnimationFrame(render);
      }
    };

    const scheduleRender = () => {
      if (!reducedMotion && isVisible && frame === 0) {
        frame = requestAnimationFrame(render);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = section.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const handleMotionChange = () => {
      reducedMotion = motionQuery.matches;
      cancelAnimationFrame(frame);
      frame = 0;
      render(performance.now());
      scheduleRender();
    };

    const handleVisibilityChange = () => {
      isVisible = !document.hidden;

      if (isVisible) {
        scheduleRender();
      }
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      render(performance.now());
      scheduleRender();
    });

    resizeObserver.observe(section);
    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    motionQuery.addEventListener("change", handleMotionChange);

    resize();
    render(performance.now());
    scheduleRender();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
