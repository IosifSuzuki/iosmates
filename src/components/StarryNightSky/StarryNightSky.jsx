import './StarryNightSky.css';

import { useRef, useEffect } from 'react';

export default function StarryNightSky(props) {
  const canvasRef = useRef(null);
  const className = props.className;
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const drawStars = (ctx) => {
      const canvasSize = canvas.width * canvas.height;
      const starCount = Math.round(canvasSize / 2000);
      console.log(starCount);
      for (let i = 0; i < starCount; i++) {
        let size;
        let star = {
          r: random(0.005, 0.01),
          alpha: random(0.5, 1),
          position: {
            x: random(0, canvas.height),
            y: random(0, canvas.width),
          },
        };
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.arc(star.position.x, star.position.y, star.r, 0, 2 * Math.PI);
        ctx.fill();
      }
    };

    const redrawCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      drawStars(ctx);
    };

    redrawCanvas();
    window.addEventListener('resize', redrawCanvas);
    return () => window.removeEventListener('resize', redrawCanvas);
  }, []);
  return (
    <div className={['h-full w-full', className].join(' ')}>
      <canvas className='h-full w-full' ref={canvasRef}></canvas>
    </div>
  );
}

function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}
