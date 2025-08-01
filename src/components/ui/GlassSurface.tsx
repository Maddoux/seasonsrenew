/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useEffect, useRef, useState, useId } from "react";

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  borderWidth?: number;
  brightness?: number;
  opacity?: number;
  blur?: number;
  displace?: number;
  backgroundOpacity?: number;
  saturation?: number;
  distortionScale?: number;
  redOffset?: number;
  greenOffset?: number;
  blueOffset?: number;
  xChannel?: "R" | "G" | "B";
  yChannel?: "R" | "G" | "B";
  mixBlendMode?:
    | "normal"
    | "multiply"
    | "screen"
    | "overlay"
    | "darken"
    | "lighten"
    | "color-dodge"
    | "color-burn"
    | "hard-light"
    | "soft-light"
    | "difference"
    | "exclusion"
    | "hue"
    | "saturation"
    | "color"
    | "luminosity"
    | "plus-darker"
    | "plus-lighter";
  className?: string;
  style?: React.CSSProperties;
}

const useDarkMode = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark to prevent flash

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return isDark;
};

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  borderWidth = 0.07,
  brightness = 50,
  opacity = 0.93,
  blur = 11,
  displace = 0,
  backgroundOpacity = 0,
  saturation = 1,
  distortionScale = -180,
  redOffset = 0,
  greenOffset = 10,
  blueOffset = 20,
  xChannel = "R",
  yChannel = "G",
  mixBlendMode = "difference",
  className = "",
  style = {},
}) => {
  const uniqueId = useId().replace(/:/g, "-");
  const filterId = `glass-filter-${uniqueId}`;
  const redGradId = `red-grad-${uniqueId}`;
  const blueGradId = `blue-grad-${uniqueId}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const feImageRef = useRef<SVGFEImageElement>(null);
  const redChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const greenChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const blueChannelRef = useRef<SVGFEDisplacementMapElement>(null);
  const gaussianBlurRef = useRef<SVGFEGaussianBlurElement>(null);

  const isDarkMode = useDarkMode();

  const generateDisplacementMap = () => {
    const rect = containerRef.current?.getBoundingClientRect();
    const actualWidth = rect?.width || 400;
    const actualHeight = rect?.height || 200;
    const edgeSize = Math.min(actualWidth, actualHeight) * (borderWidth * 0.5);

    const svgContent = `
      <svg viewBox="0 0 ${actualWidth} ${actualHeight}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="${redGradId}" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="red"/>
          </linearGradient>
          <linearGradient id="${blueGradId}" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#0000"/>
            <stop offset="100%" stop-color="blue"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" fill="black"></rect>
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${redGradId})" />
        <rect x="0" y="0" width="${actualWidth}" height="${actualHeight}" rx="${borderRadius}" fill="url(#${blueGradId})" style="mix-blend-mode: ${mixBlendMode}" />
        <rect x="${edgeSize}" y="${edgeSize}" width="${actualWidth - edgeSize * 2}" height="${actualHeight - edgeSize * 2}" rx="${borderRadius}" fill="hsl(0 0% ${brightness}% / ${opacity})" style="filter:blur(${blur}px)" />
      </svg>
    `;

    return `data:image/svg+xml,${encodeURIComponent(svgContent)}`;
  };

  const updateDisplacementMap = () => {
    feImageRef.current?.setAttribute("href", generateDisplacementMap());
  };

  useEffect(() => {
    updateDisplacementMap();
    [
      { ref: redChannelRef, offset: redOffset },
      { ref: greenChannelRef, offset: greenOffset },
      { ref: blueChannelRef, offset: blueOffset },
    ].forEach(({ ref, offset }) => {
      if (ref.current) {
        ref.current.setAttribute(
          "scale",
          (distortionScale + offset).toString(),
        );
        ref.current.setAttribute("xChannelSelector", xChannel);
        ref.current.setAttribute("yChannelSelector", yChannel);
      }
    });

    gaussianBlurRef.current?.setAttribute("stdDeviation", displace.toString());
  }, [
    width,
    height,
    borderRadius,
    borderWidth,
    brightness,
    opacity,
    blur,
    displace,
    distortionScale,
    redOffset,
    greenOffset,
    blueOffset,
    xChannel,
    yChannel,
    mixBlendMode,
  ]);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      setTimeout(updateDisplacementMap, 0);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    setTimeout(updateDisplacementMap, 0);
  }, [width, height]);

  const supportsSVGFilters = () => {
    if (typeof window === "undefined") return false;
    
    // Force enable SVG filters for Chrome and Chrome-based browsers
    const isChrome = /Chrome/.test(window.navigator.userAgent);
    const isEdge = /Edg/.test(window.navigator.userAgent);
    const isWebkit = /Safari/.test(window.navigator.userAgent) && !/Chrome/.test(window.navigator.userAgent);
    const isFirefox = /Firefox/.test(window.navigator.userAgent);

    // Enable for Chrome, Edge, and other Chromium browsers
    if (isChrome || isEdge) {
      return true;
    }

    // Disable for Safari and Firefox as they have known issues
    if (isWebkit || isFirefox) {
      return false;
    }

    // Test support for other browsers
    try {
      const div = document.createElement("div");
      div.style.backdropFilter = `url(#${filterId})`;
      const supported = div.style.backdropFilter !== "";
      return supported;
    } catch (e) {
      return false;
    }
  };

  const supportsBackdropFilter = () => {
    if (typeof window === "undefined") return false;
    return CSS.supports("backdrop-filter", "blur(10px)");
  };

  const getContainerStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      ...style,
      width: typeof width === "number" ? `${width}px` : width,
      height: typeof height === "number" ? `${height}px` : height,
      borderRadius: `${borderRadius}px`,
      "--glass-frost": backgroundOpacity,
      "--glass-saturation": saturation,
    } as React.CSSProperties;

    const svgSupported = supportsSVGFilters();
    const backdropFilterSupported = supportsBackdropFilter();

    if (svgSupported) {
      return {
        ...baseStyles,
        background: isDarkMode
          ? `hsl(0 0% 0% / ${backgroundOpacity})`
          : `hsl(0 0% 100% / ${backgroundOpacity})`,
        backdropFilter: `url(#${filterId}) saturate(${saturation})`,
        WebkitBackdropFilter: `url(#${filterId}) saturate(${saturation})`,
        boxShadow: isDarkMode
          ? `0 0 2px 1px rgba(255, 255, 255, 0.35) inset,
             0 0 10px 4px rgba(255, 255, 255, 0.15) inset,
             0px 4px 16px rgba(17, 17, 26, 0.1),
             0px 8px 24px rgba(17, 17, 26, 0.1),
             0px 16px 56px rgba(17, 17, 26, 0.1)`
          : `0 0 2px 1px rgba(0, 0, 0, 0.15) inset,
             0 0 10px 4px rgba(0, 0, 0, 0.1) inset,
             0px 4px 16px rgba(17, 17, 26, 0.1),
             0px 8px 24px rgba(17, 17, 26, 0.1),
             0px 16px 56px rgba(17, 17, 26, 0.1)`,
      };
    } else {
      // Enhanced fallback for when SVG filters aren't supported
      if (isDarkMode) {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: `rgba(255, 255, 255, ${Math.max(backgroundOpacity + 0.15, 0.25)})`,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: `
              inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
              inset 0 -1px 0 0 rgba(255, 255, 255, 0.3),
              0 8px 32px 0 rgba(31, 38, 135, 0.5),
              0 2px 16px 0 rgba(31, 38, 135, 0.4)
            `,
          };
        } else {
          return {
            ...baseStyles,
            background: `rgba(255, 255, 255, ${Math.max(backgroundOpacity + 0.1, 0.15)})`,
            backdropFilter: `blur(${Math.max(blur, 16)}px) saturate(${Math.max(saturation, 1.8)}) brightness(${Math.max(brightness / 100, 1.15)})`,
            WebkitBackdropFilter: `blur(${Math.max(blur, 16)}px) saturate(${Math.max(saturation, 1.8)}) brightness(${Math.max(brightness / 100, 1.15)})`,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: `
              inset 0 1px 0 0 rgba(255, 255, 255, 0.4),
              inset 0 -1px 0 0 rgba(255, 255, 255, 0.2),
              0 8px 32px 0 rgba(31, 38, 135, 0.4),
              0 2px 16px 0 rgba(31, 38, 135, 0.3)
            `,
          };
        }
      } else {
        if (!backdropFilterSupported) {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.6),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.4),
                        0 8px 32px 0 rgba(31, 38, 135, 0.2),
                        0 2px 16px 0 rgba(31, 38, 135, 0.1)`,
          };
        } else {
          return {
            ...baseStyles,
            background: "rgba(255, 255, 255, 0.3)",
            backdropFilter: `blur(${Math.max(blur, 12)}px) saturate(${Math.max(saturation, 1.5)}) brightness(${Math.max(brightness / 100, 1.1)})`,
            WebkitBackdropFilter: `blur(${Math.max(blur, 12)}px) saturate(${Math.max(saturation, 1.5)}) brightness(${Math.max(brightness / 100, 1.1)})`,
            border: "1px solid rgba(255, 255, 255, 0.4)",
            boxShadow: `0 8px 32px 0 rgba(31, 38, 135, 0.3),
                        0 2px 16px 0 rgba(31, 38, 135, 0.2),
                        inset 0 1px 0 0 rgba(255, 255, 255, 0.5),
                        inset 0 -1px 0 0 rgba(255, 255, 255, 0.3)`,
          };
        }
      }
    }
  };

  const glassSurfaceClasses =
    "relative flex items-center justify-center overflow-hidden transition-opacity duration-[260ms] ease-out";

  const focusVisibleClasses = isDarkMode
    ? "focus-visible:outline-2 focus-visible:outline-[#0A84FF] focus-visible:outline-offset-2"
    : "focus-visible:outline-2 focus-visible:outline-[#007AFF] focus-visible:outline-offset-2";

  return (
    <div
      ref={containerRef}
      className={`${glassSurfaceClasses} ${focusVisibleClasses} ${className}`}
      style={getContainerStyles()}
    >
      <svg
        className="w-full h-full pointer-events-none absolute inset-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.01 }}
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feImage
              ref={feImageRef}
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="map"
            />

            <feDisplacementMap
              ref={redChannelRef}
              in="SourceGraphic"
              in2="map"
              id="redchannel"
              result="dispRed"
            />
            <feColorMatrix
              in="dispRed"
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="red"
            />

            <feDisplacementMap
              ref={greenChannelRef}
              in="SourceGraphic"
              in2="map"
              id="greenchannel"
              result="dispGreen"
            />
            <feColorMatrix
              in="dispGreen"
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
              result="green"
            />

            <feDisplacementMap
              ref={blueChannelRef}
              in="SourceGraphic"
              in2="map"
              id="bluechannel"
              result="dispBlue"
            />
            <feColorMatrix
              in="dispBlue"
              type="matrix"
              values="0 0 0 0 0
                      0 0 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
              result="blue"
            />

            <feBlend in="red" in2="green" mode="screen" result="rg" />
            <feBlend in="rg" in2="blue" mode="screen" result="output" />
            <feGaussianBlur
              ref={gaussianBlurRef}
              in="output"
              stdDeviation="0.7"
            />
          </filter>
        </defs>
      </svg>

      <div className="w-full h-full flex items-center justify-center p-2 rounded-[inherit] relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
