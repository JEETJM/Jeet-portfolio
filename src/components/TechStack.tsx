import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";

type Tech = {
  name: string;
  color: string;
};

const techStack: Tech[] = [
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  // { name: "Next.js", color: "#000000" },
  { name: "Node.js", color: "#339933" },
  { name: "Express", color: "#444444" },
  { name: "MongoDB", color: "#47A248" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Java", color: "#F89820" },
  // { name: "Python", color: "#3776AB" },
  { name: "C", color: "#00599C" },
  // { name: "C++", color: "#00599C" },
  // { name: "Firebase", color: "#FFCA28" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#24292F" },
  { name: "VS Code", color: "#007ACC" },
  { name: "Bootstrap", color: "#7952B3" },
  { name: "Tailwind", color: "#06B6D4" },
];

function TechCard({
  tech,
  position,
}: {
  tech: Tech;
  position: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    ref.current.rotation.y += 0.01;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position} castShadow receiveShadow>
        <boxGeometry args={[2.2, 2.8, 0.18]} />

        <meshPhysicalMaterial
          color={tech.color}
          metalness={0.15}
          roughness={0.2}
          transmission={0.6}
          thickness={1}
          clearcoat={1}
        />

        <Text
          position={[0, 0, 0.12]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
        >
          {tech.name}
        </Text>
      </mesh>
    </Float>
  );
}
function Scene() {
  const radius = 7;

  const positions = useMemo(() => {
    return techStack.map((_, index) => {
      const angle = (index / techStack.length) * Math.PI * 2;

      return [
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 2,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  return (
    <>
      {/* Lights */}
      <ambientLight intensity={1.5} />

      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />

      <pointLight position={[-8, 6, 8]} intensity={2} color="#61dafb" />

      <pointLight position={[8, -5, -8]} intensity={2} color="#8b5cf6" />

      {/* HDR Environment */}
      <Environment preset="city" />

      {/* Floating Tech Cards */}
      {techStack.map((tech, index) => (
        <TechCard key={tech.name} tech={tech} position={positions[index]} />
      ))}
    </>
  );
}

const TechStack = () => {
  return (
    <div className="techstack" id="techstack">
      <h2>
        My <span>Tech Stack</span>
      </h2>

      <Canvas
        shadows
        camera={{
          position: [0, 0, 16],
          fov: 50,
        }}
        style={{
          width: "100%",
          height: "700px",
        }}
      >
        <color attach="background" args={["#050816"]} />

        <fog attach="fog" args={["#050816", 12, 28]} />

        <Scene />
      </Canvas>
    </div>
  );
};

export default TechStack;
