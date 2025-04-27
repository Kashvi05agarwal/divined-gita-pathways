
import { useEffect, useState } from "react";

interface DivineParticlesProps {
  isActive: boolean;
  color?: string;
}

const DivineParticles = ({ isActive, color = "#FFD700" }: DivineParticlesProps) => {
  const [particles, setParticles] = useState<{id: number; left: string; top: string; size: string; delay: string}[]>([]);

  useEffect(() => {
    if (isActive) {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: `${Math.random() * 6 + 2}px`,
        delay: `${Math.random() * 2}s`
      }));
      
      setParticles(newParticles);
    } else {
      setParticles([]);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
};

export default DivineParticles;
