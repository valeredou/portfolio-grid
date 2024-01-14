import * as THREE from "three";
import { useRef, useState, useMemo, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Billboard,
  OrbitControls,
  Text,
  TrackballControls,
} from "@react-three/drei";
import { generate } from "random-words";
import { isMobile } from "react-device-detect";

const wordList = [
  "",
  "HTML",
  "CSS",
  "React",
  "NextJS",
  "SCSS",
  "JS",
  "JavaScript",
  "PHP",
  "Laravel",
  "i18next",
  "Framer Motion",
  "Couchbase",
  "SQL",
  "NOSql",
];

const generateWord = (number) => {
  var newNumber = number;

  return wordList[newNumber];
};

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "/Inter-Bold.woff",
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover¨
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(
      color.set(hovered ? "#457b9d" : "white"),
      0.1
    );
  });

  return (
    <Billboard
      {...props}
      follow={true}
      lockX={false}
      lockY={false}
      lockZ={false}
    >
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        onClick={() => console.log("clicked")}
        {...fontProps}
        children={children}
      />
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  //for the cloud
  const ref = useRef();

  // State to store the mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handler to update state
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ mouse }) => {
    // Apply a subtle movement to the word cloud based on mouse position
    // You can adjust the multiplier for more or less sensitivity
    ref.current.position.x = mousePosition.x * 0.9;
    ref.current.position.y = mousePosition.y * 0.9;

    // Map mouse x and y position to rotation values
    // The multipliers here control the sensitivity of the rotation
    const rotationX = -(mousePosition.y * Math.PI * 0.2);
    const rotationY = mousePosition.x * Math.PI * 0.2;

    // Apply the rotation to the word cloud
    ref.current.rotation.x = rotationX;
    ref.current.rotation.y = rotationY;
  });

  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          generateWord(i),
        ]);
    return temp;
  }, [count, radius]);

  const allWords = words.map(([pos, word], index) => {
    return <Word key={index} position={pos} children={word} />;
  });

  return <group ref={ref}>{allWords}</group>;
}

export default function WordCloud() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 30, 35] }}>
      <fog attach="fog" args={["#202025", 0, 80]} />
      <Suspense fallback={null}>
        <group>
          <Cloud count={8} radius={25} />
        </group>
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
