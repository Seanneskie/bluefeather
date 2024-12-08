// app/demo/page.tsx
import Link from "next/link";

const DemoPage = () => {
  return (
    <section className="py-16 px-8 sm:px-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and Introduction */}
        <h1 className="text-4xl font-bold text-indigo-900 mb-8">Interactive AR First Aid Learning</h1>
        <p className="text-lg text-indigo-700 mb-12">
          Experience a revolutionary way to learn life-saving first aid techniques with AR-powered
          interactive features. Explore our courses and start learning today!
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          {[
            {
              title: "Step-by-Step Guidance",
              description: "Follow clear, detailed steps for common first aid scenarios.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-blue-500"
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
              title: "Interactive AR Learning",
              description: "Engage with 3D models and AR simulations to enhance learning.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-blue-500"
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 21V9l-6 4.5M15 21v-6l6 4.5"
                  />
                </svg>
              ),
            },
            {
              title: "Teacher’s Dashboard",
              description: "Manage courses, track student progress, and upload materials.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-blue-500"
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
              link: "/demo/teachers",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-800 text-center">
                {feature.title}
              </h3>
              <p className="text-indigo-600 text-center">{feature.description}</p>
              {feature.link && (
                <Link
                  href={feature.link}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
                >
                  Explore
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            href="/courses"
            className="px-8 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DemoPage;
