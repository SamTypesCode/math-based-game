import Matter from "matter-js";
import { useEffect, useRef } from "react";

function Canvas() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "#fff",
      },
    });

    Matter.Runner.run(engine);
    Matter.Render.run(render);

    const resizeObserver = new ResizeObserver(() => {
      const width = sceneRef.current!.clientWidth;
      const height = sceneRef.current!.clientHeight;
      Matter.Render.stop(render);
      render.canvas.width = width;
      render.canvas.height = height;
      Matter.Render.run(render);
    });
    resizeObserver.observe(sceneRef.current);

    return () => {
      resizeObserver.disconnect();
      Matter.Render.stop(render);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className="w-full min-h-screen" />;
}

export default Canvas;
