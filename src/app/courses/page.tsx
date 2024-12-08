import Link from "next/link";

const CoursesPage = () => {
  return (
    <section className="py-16 px-8 sm:px-20 bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold text-indigo-900">Welcome, Student!</h1>
            <p className="text-lg text-indigo-700">
              Explore courses and track your progress to master essential first aid skills.
            </p>
          </div>
          <div>
            <Link href="/profile" className="px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition">
              View Profile
            </Link>
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Your Enrolled Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                title: "Basic First Aid",
                description: "Learn essential first aid techniques for common emergencies.",
                progress: 60,
              },
              {
                id: 2,
                title: "CPR Training",
                description: "Master the techniques of performing CPR to save lives.",
                progress: 20,
              },
            ].map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
                <p className="text-indigo-600 mb-4">{course.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-indigo-700 mb-2">Progress: {course.progress}%</p>
                <Link
                  href={`/courses/${course.id}`}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Continue Course &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Available Courses Section */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Available Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 3,
                title: "Wound Care",
                description: "Understand how to clean, dress, and treat wounds effectively.",
              }
            ].map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-indigo-800 mb-2">{course.title}</h3>
                <p className="text-indigo-600 mb-4">{course.description}</p>
                <Link
                  href={`/courses/${course.id}`}
                  className="text-blue-500 font-bold hover:underline"
                >
                  Enroll Now &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
