import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-indigo-dye">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pacific-cyan to-indigo-dye text-white py-16 px-8 sm:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to Blue Feather - <span className="text-orchid-pink"> AR-Powered, Offline First Aid Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Empowering Emergency Response: A Solution for Critical Moments
          </p>
          <a
            href="#services"
            className="bg-white text-indigo-dye py-3 px-8 rounded-full text-lg font-medium hover:bg-orchid-pink hover:text-white transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 px-8 sm:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image
                src="/feature1.svg"
                alt="Feature 1"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Augmented Reality (AR)-Based First Aid Guidance</h3>
              <p>
              Provides real-time, step-by-step visual instructions tailored to specific emergencies, helping students overcome the panic and memory lapses that often occur during critical moments. 
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image
                src="/feature2.svg"
                alt="Feature 2"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Offline Access to Critical Information</h3>
              <p>In low-connectivity environments or during network outages, users can still access preloaded first-aid protocols and visual guides.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image
                src="/feature3.svg"
                alt="Feature 3"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Continuous Learning and Reinforcement</h3>
              <p>The app incorporates interactive AR-based simulations, periodic quizzes, and push notifications to combat the decline in first aid knowledge over time. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 sm:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">AR-Based Offline First Aid.</h3>
              <p>
                Provides emergency first aid guidance even without internet access.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p>
                Quizzes and simulations for skill retention.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Institutional Subscriptions.</h3>
              <p>
                Educational institutions can subscribe to premium services for performance tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 sm:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">About Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              {
                name: "Francheska",
                description:
                  "Francheska - COO, supporting the team by offering insights and suggestion.",
              },
              {
                name: "Azlan",
                description:
                  "Azlan - CMO, masters creative branding and leads with innovation, driving impactful marketing strategies that elevate the company's presence.",
              },
              {
                name: "Bridget",
                description:
                  "Bridget - CTO, applies a slightly “caring” and creative approach to a little bit of everything.",
              },
              {
                name: "Seanne",
                description:
                  "Seanne - CTO #2, excels at multitasking, having successfully built 5 innovative platforms.",
              },
            ].map((member, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={`/team/${member.name}.jpg`}
                    alt={`${member.name} profile`}
                    className="rounded-full object-cover"
                    fill // Ensures the image fits within its parent
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section
        id="cta"
        className="py-16 px-8 sm:px-20 bg-orchid-pink text-white text-center"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8">
            Join countless businesses that trust Blue Feather to achieve their
            goals.
          </p>
          <a
            href="#"
            className="bg-white text-indigo-dye py-3 px-8 rounded-full text-lg font-medium hover:bg-pacific-cyan hover:text-white transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
