"use client";
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const trailCount = 8; // Number of circles in the trail

  useEffect(() => {
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
  }, []);

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
            position: "fixed", // Changed to fixed to cover the entire viewport
            pointerEvents: "none",
            width: `${(trailCount - index) * 3}px`, // Adjust size based on index
            height: `${(trailCount - index) * 3}px`,
            borderRadius: "50%",
            backgroundColor: "blue",
            zIndex: 50, // Ensure it's above other elements
            
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
