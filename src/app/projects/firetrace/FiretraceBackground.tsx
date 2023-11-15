import { useEffect, useRef } from "react";

function clamp(val: number, min: number, max: number) {
    return val > max ? max : val < min ? min : val;
}

function FiretraceBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        const canvas = canvasRef.current;
        const context = canvas!.getContext("2d");
        context!.imageSmoothingEnabled = false;
        context!.filter = "blur(10px)";

        let fires: { position: number[]; direction: number; size: number; speed: number; }[] = [];

        for (let i = 0; i < 10; i++) {
            let position = [Math.random() * 1600, Math.random() * 900];
            let direction = Math.random() * 2 * Math.PI;
            let size = Math.random() * 10;
            let speed = Math.random() * 1 + 0.5;

            fires.push({ position, direction, size, speed });
        }

        let scrollPos = 0;

        function animate() {
            context!.fillStyle = "rgba(0, 0, 0, 0.05)";
            context!.fillRect(0, 0, 1600, 900);

            context!.fillStyle = "rgb(255, 162, 3)";

            fires.forEach((fire) => {
                context!.beginPath();
                context!.arc(fire.position[0], fire.position[1], fire.size, 0, 2 * Math.PI);
                context!.fill();
                context!.closePath();

                let dx = Math.cos(fire.direction);
                let dy = Math.sin(fire.direction);

                fire.position[0] += dx * fire.speed;
                fire.position[1] += dy * fire.speed;

                fire.position[1] += clamp((scrollPos - window.scrollY) * 0.1, -fire.size, fire.size);
                
                // Wrap around
                if (fire.position[0] < 0) {
                    fire.position[0] = 1600;
                }
                if (fire.position[0] > 1600) {
                    fire.position[0] = 0;
                }
                if (fire.position[1] < 0) {
                    fire.position[1] = 900;
                }
                if (fire.position[1] > 900) {
                    fire.position[1] = 0;
                }

                fire.direction += Math.random() * 0.1 - 0.05;
            });

            scrollPos = window.scrollY
        }

        let interval = setInterval(animate, 1000 / 60);

        return () => clearInterval(interval);
    }, [])

  return (
    <>
      <div className="fixed -z-10 top-0 left-0 brightness-50">
        <canvas ref={canvasRef} width="1600" height="900" className="h-screen"></canvas>
      </div>
    </>
  );
}

export default FiretraceBackground;
