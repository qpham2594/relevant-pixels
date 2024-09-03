"use client";
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const trailCount = 8; // Number of circles in the trail

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };

      // Update positions by adding the new one and keeping the last few
      setPositions((prev) => {
        const updatedPositions = [newPosition, ...prev];
        return updatedPositions.slice(0, trailCount);
      });
    };

    const handleMouseLeave = () => {
      setPositions([]); // Clear positions when mouse leaves the window
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMobile, trailCount]);

  // Do not render the custom cursor on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            opacity: 1 - index * (1 / trailCount),
            transition: `opacity 0.3s ease, transform 0.5s ease`,
            transform: `scale(${1 - index * (1 / trailCount)})`,
            position: "fixed",
            pointerEvents: "none",
            width: `${(trailCount - index) * 3}px`,
            height: `${(trailCount - index) * 3}px`,
            borderRadius: "50%",
            backgroundColor: "blue",
            zIndex: 50,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
