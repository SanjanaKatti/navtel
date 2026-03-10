"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

type ViewerMode = "imageStack" | "glb";

interface VisualLayer {
  src: string;
  depth?: number;
  className?: string;
}

interface Product3DVisualProps {
  alt: string;
  mode?: ViewerMode;
  className?: string;
  baseImage: string;
  shadowImage?: string;
  highlightImage?: string;
  layers?: VisualLayer[];
  posterImage?: string;
  modelSrc?: string;
  interactive?: boolean;
  maxTiltDeg?: number;
}

interface ErrorBoundaryProps {
  fallback: React.ReactNode;
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ViewerErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("3D viewer failed, rendering fallback.", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const ProductGLBCanvas = dynamic(() => import("./ProductGLBCanvas"), {
  ssr: false,
});

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const Product3DVisual: React.FC<Product3DVisualProps> = ({
  alt,
  mode = "imageStack",
  className = "",
  baseImage,
  shadowImage,
  highlightImage,
  layers = [],
  posterImage,
  modelSrc,
  interactive = true,
  maxTiltDeg = 12,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [current, setCurrent] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    applyPreference();
    mediaQuery.addEventListener("change", applyPreference);
    return () => mediaQuery.removeEventListener("change", applyPreference);
  }, []);

  useEffect(() => {
    if (!interactive || reducedMotionRef.current || mode !== "imageStack") return;

    const tick = () => {
      setCurrent((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.14,
        y: prev.y + (target.y - prev.y) * 0.14,
      }));
      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [interactive, mode, target.x, target.y]);

  const updateTargetFromPointer = (clientX: number, clientY: number) => {
    const wrapper = wrapperRef.current;
    if (!wrapper || reducedMotionRef.current || !interactive) return;
    const rect = wrapper.getBoundingClientRect();
    const normalizedX = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((clientY - rect.top) / rect.height - 0.5) * 2;

    setTarget({
      x: clamp(-normalizedY * maxTiltDeg, -maxTiltDeg, maxTiltDeg),
      y: clamp(normalizedX * maxTiltDeg, -maxTiltDeg, maxTiltDeg),
    });
  };

  const transformStyle = useMemo(
    () => ({
      transform: `perspective(1300px) rotateX(${current.x.toFixed(2)}deg) rotateY(${current.y.toFixed(2)}deg)`,
      transition: isDragging ? "transform 30ms linear" : "transform 120ms ease-out",
    }),
    [current.x, current.y, isDragging],
  );

  const fallbackImage = (
    <div className="relative h-full w-full">
      <Image
        src={posterImage || baseImage}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 34vw, (min-width: 768px) 44vw, 88vw"
        className="object-contain object-center"
        priority
      />
    </div>
  );

  const stackLayers = [
    shadowImage ? { src: shadowImage, depth: -22, className: "opacity-65" } : null,
    { src: baseImage, depth: 0, className: "" },
    highlightImage ? { src: highlightImage, depth: 18, className: "opacity-75" } : null,
    ...layers,
  ].filter((layer): layer is VisualLayer => Boolean(layer));

  if (mode === "glb" && modelSrc) {
    return (
      <div
        className={`relative h-full w-full rounded-[2rem] bg-gradient-to-br from-[#f3f6fd] to-[#e8edf6] ${className}`}
      >
        <ViewerErrorBoundary fallback={fallbackImage}>
          <ProductGLBCanvas modelSrc={modelSrc} />
        </ViewerErrorBoundary>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative h-full w-full select-none rounded-[2rem] ${className}`}
      tabIndex={0}
      role="img"
      aria-label={alt}
      onPointerDown={(event) => {
        draggingRef.current = true;
        setIsDragging(true);
        updateTargetFromPointer(event.clientX, event.clientY);
      }}
      onPointerMove={(event) => {
        if (draggingRef.current || interactive) {
          updateTargetFromPointer(event.clientX, event.clientY);
        }
      }}
      onPointerUp={() => {
        draggingRef.current = false;
        setIsDragging(false);
      }}
      onPointerLeave={() => {
        draggingRef.current = false;
        setIsDragging(false);
        setTarget({ x: 0, y: 0 });
      }}
      onKeyDown={(event) => {
        if (!interactive || reducedMotionRef.current) return;
        if (event.key === "ArrowUp") setTarget((prev) => ({ ...prev, x: clamp(prev.x + 1.8, -maxTiltDeg, maxTiltDeg) }));
        if (event.key === "ArrowDown") setTarget((prev) => ({ ...prev, x: clamp(prev.x - 1.8, -maxTiltDeg, maxTiltDeg) }));
        if (event.key === "ArrowLeft") setTarget((prev) => ({ ...prev, y: clamp(prev.y - 1.8, -maxTiltDeg, maxTiltDeg) }));
        if (event.key === "ArrowRight") setTarget((prev) => ({ ...prev, y: clamp(prev.y + 1.8, -maxTiltDeg, maxTiltDeg) }));
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f172a08] rounded-[2rem]" />

      <div
        className="relative h-full w-full transform-gpu will-change-transform"
        style={transformStyle}
      >
        {stackLayers.map((layer) => (
          <div
            key={`${layer.src}-${layer.depth ?? 0}`}
            className={`absolute inset-0 ${layer.className ?? ""}`}
            style={{
              transform: `translateZ(${layer.depth ?? 0}px)`,
            }}
          >
            <Image
              src={layer.src}
              alt=""
              fill
              sizes="(min-width: 1280px) 34vw, (min-width: 768px) 44vw, 88vw"
              className="object-contain object-center pointer-events-none"
              onLoad={() => setIsLoaded(true)}
              priority
            />
          </div>
        ))}
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse rounded-[2rem] bg-[#e5e7eb]" />
      )}

      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={posterImage || baseImage} alt={alt} className="h-full w-full object-contain" />
      </noscript>
    </div>
  );
};

export default Product3DVisual;
