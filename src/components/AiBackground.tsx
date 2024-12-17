import React, { useEffect, useRef } from 'react';

const AiBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system with neural network simulation
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulseSpeed: number;
      pulsePhase: number;
    }> = [];

    // Create particles
    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor(window.innerWidth / 20));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.8,
          speedY: (Math.random() - 0.5) * 0.8,
          opacity: Math.random() * 0.5 + 0.1,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    };
    createParticles();

    let frame = 0;
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position with smooth movement
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Pulse effect
        particle.pulsePhase += particle.pulseSpeed;
        const pulseFactor = (Math.sin(particle.pulsePhase) + 1) * 0.5;
        const currentSize = particle.size * (1 + pulseFactor * 0.5);
        const currentOpacity = particle.opacity * (0.7 + pulseFactor * 0.3);

        // Wrap particles around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle with gradient
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, currentSize * 2
        );
        gradient.addColorStop(0, `rgba(155, 135, 245, ${currentOpacity})`);
        gradient.addColorStop(1, 'rgba(155, 135, 245, 0)');
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw neural network connections
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            if (distance < maxDistance) {
              // Calculate line opacity based on distance
              const lineOpacity = (1 - distance / maxDistance) * 0.2;
              
              // Draw connection line with gradient
              const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                otherParticle.x, otherParticle.y
              );
              gradient.addColorStop(0, `rgba(155, 135, 245, ${lineOpacity})`);
              gradient.addColorStop(1, `rgba(229, 222, 255, ${lineOpacity})`);

              ctx.beginPath();
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();

              // Add pulse effect on connection points
              if (distance < 50) {
                const pulseSize = (Math.sin(frame * 0.05) + 1) * 2;
                ctx.beginPath();
                ctx.arc(
                  (particle.x + otherParticle.x) / 2,
                  (particle.y + otherParticle.y) / 2,
                  pulseSize,
                  0,
                  Math.PI * 2
                );
                ctx.fillStyle = `rgba(229, 222, 255, ${lineOpacity})`;
                ctx.fill();
              }
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: -1 }}
    />
  );
};

export default AiBackground;