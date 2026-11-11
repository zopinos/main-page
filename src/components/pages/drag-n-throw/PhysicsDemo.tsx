import { useEffect, useRef } from "react";
import initPhysics from "./engine";
import styled from "styled-components";

const Base = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const Test = styled.div`
  width: 100%;
  height: 10%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: aquamarine;
`;

const Canvas = styled.canvas`
  position: fixed;
  left: 0;
  top: 0;
`;

const PhysicsDemo = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const cleanup = initPhysics(canvasRef.current);

    return cleanup;
  }, []);

  return (
    <Test>
      <canvas ref={canvasRef} />
    </Test>
  );
};
//<Canvas ref={canvasRef} />
export default PhysicsDemo;
