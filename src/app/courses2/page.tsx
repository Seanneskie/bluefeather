"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Course2Page = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const course = {
    title: "CPR Training",
    description: "Learn how to perform CPR effectively with hands-on guidance.",
    steps: [
      "Place the person on a firm surface.",
      "Kneel beside them and interlock your hands.",
      "Perform chest compressions at a depth of 2 inches.",
      "Continue until emergency services arrive.",
    ],
    arFeature: "Use your camera to practice CPR on a 3D virtual model.",
  };

  const toggleStepCompletion = (index: number) => {
    setCompletedSteps((prev) =>
      prev.includes(index)
        ? prev.filter((step) => step !== index)
        : [...prev, index]
    );
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    if (canvasRef.current) {
      renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
      canvasRef.current.appendChild(renderer.domElement);
    }

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff5722 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      while (canvasRef.current?.firstChild) {
        canvasRef.current.removeChild(canvasRef.current.firstChild);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <section className="py-16 px-8 sm:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">{course.title}</h1>
        <p className="text-lg text-indigo-700 mb-8">{course.description}</p>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Step-by-Step Guide</h2>
          <ul className="list-none space-y-4">
            {course.steps.map((step, index) => (
              <li
                key={index}
                className={`p-4 bg-white shadow-md rounded-lg border-l-4 ${
                  completedSteps.includes(index) ? "border-green-500" : "border-gray-300"
                } hover:shadow-lg transition`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleStepCompletion(index)}
                >
                  <span
                    className={`text-lg font-medium ${
                      completedSteps.includes(index) ? "text-green-700" : "text-gray-800"
                    }`}
                  >
                    Step {index + 1}: {step}
                  </span>
                  <span
                    className={`inline-block w-5 h-5 ${
                      completedSteps.includes(index) ? "bg-green-500" : "bg-gray-300"
                    } rounded-full`}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-indigo-800 mb-4">Interactive AR Feature</h3>
          <p className="text-indigo-600 mb-4">{course.arFeature}</p>
          <div
            ref={canvasRef}
            className="w-full h-64 sm:h-96 bg-gray-200 rounded-lg overflow-hidden"
          ></div>
          <button
            className="mt-6 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            onClick={() => alert("More AR functionalities coming soon!")}
          >
            Explore AR
          </button>
        </div>
      </div>
    </section>
  );
};

export default Course2Page;
