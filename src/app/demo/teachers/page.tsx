"use client"

import { useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PieController,
  BarController
} from "chart.js";


// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PieController, BarController);

const TeachersPage = () => {
  const pieChartRef = useRef<HTMLCanvasElement | null>(null);
  const barChartRef = useRef<HTMLCanvasElement | null>(null);

  // Data for the charts
  const studentProgressData = {
    labels: ["Completed", "In Progress", "Not Started"],
    datasets: [
      {
        label: "Students",
        data: [120, 80, 30],
        backgroundColor: ["#4CAF50", "#FFC107", "#F44336"],
      },
    ],
  };

  const coursePerformanceData = {
    labels: ["Basic First Aid", "Advanced CPR", "Wound Care"],
    datasets: [
      {
        label: "Enrolled Students",
        data: [120, 80, 95],
        backgroundColor: ["#2196F3", "#FF5722", "#009688"],
      },
    ],
  };

  // Initialize Pie Chart
  useEffect(() => {
    if (pieChartRef.current) {
      const ctx = pieChartRef.current.getContext("2d");
      if (ctx) {
        new ChartJS(ctx, {
          type: "pie",
          data: studentProgressData,
          options: {
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Student Progress Overview" },
            },
          },
        });
      }
    }
  }, []);

  // Initialize Bar Chart
  useEffect(() => {
    if (barChartRef.current) {
      const ctx = barChartRef.current.getContext("2d");
      if (ctx) {
        new ChartJS(ctx, {
          type: "bar",
          data: coursePerformanceData,
          options: {
            responsive: true,
            plugins: {
              legend: { position: "top" },
              title: { display: true, text: "Course Performance" },
            },
            scales: {
              x: { title: { display: true, text: "Courses" } },
              y: { title: { display: true, text: "Students" } },
            },
          },
        });
      }
    }
  }, []);

  return (
    <section className="py-16 px-8 sm:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Page Title and Description */}
        <h1 className="text-4xl font-bold text-blue-500 mb-8">Teacher’s Dashboard</h1>
        <p className="text-lg text-indigo-700 mb-12">
          Welcome back! Manage your courses, track student progress, and create a dynamic learning
          environment with interactive tools.
        </p>

        {/* Dashboard Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Course Management",
              description: "Create, update, and manage your courses with ease.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16l-4-4m0 0l4-4m-4 4h16"
                  />
                </svg>
              ),
            },
            {
              title: "Student Progress",
              description: "Monitor the progress of your students in real-time.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10l9-7 9 7-9 7-9-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Upload Materials",
              description: "Easily upload new resources to enhance student learning.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-blue-500 text-center">
                {feature.title}
              </h3>
              <p className="text-indigo-700 text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-indigo-900 mb-8">Visual Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Pie Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <canvas ref={pieChartRef}></canvas>
            </div>
            {/* Bar Chart */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <canvas ref={barChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Announcements Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Announcements</h2>
          <textarea
            rows={5}
            className="w-full bg-white shadow-md rounded-lg p-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write an announcement..."
          ></textarea>
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
            Post Announcement
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeachersPage;
