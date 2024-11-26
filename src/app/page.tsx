import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-indigo-dye">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-pacific-cyan to-indigo-dye text-white py-16 px-8 sm:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Welcome to <span className="text-orchid-pink">StartupName</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Empowering innovation and driving success through cutting-edge
            solutions.
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
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p>
                Discover seamless solutions tailored to your business needs.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image
                src="/feature2.svg"
                alt="Feature 2"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p>Accelerate growth with innovative tools and insights.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <Image
                src="/feature3.svg"
                alt="Feature 3"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p>Empowering businesses with reliable and secure solutions.</p>
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
              <h3 className="text-xl font-semibold mb-2">Service One</h3>
              <p>
                Comprehensive consulting to help you achieve your business
                goals.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Service Two</h3>
              <p>
                Advanced analytics to unlock insights and drive decision-making.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Service Three</h3>
              <p>
                Tailored software solutions designed to fit your unique
                challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 px-8 sm:px-20 bg-gradient-to-r from-indigo-dye to-pacific-cyan text-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white text-indigo-dye shadow-lg rounded-lg">
              <p className="italic">
                “StartupName provided exceptional service and innovative
                solutions that transformed our business.”
              </p>
              <h3 className="mt-4 font-semibold">- Client A</h3>
            </div>
            <div className="p-6 bg-white text-indigo-dye shadow-lg rounded-lg">
              <p className="italic">
                “Their team is highly professional and dedicated to delivering
                results.”
              </p>
              <h3 className="mt-4 font-semibold">- Client B</h3>
            </div>
            <div className="p-6 bg-white text-indigo-dye shadow-lg rounded-lg">
              <p className="italic">
                “We saw measurable growth thanks to their tailored strategies.”
              </p>
              <h3 className="mt-4 font-semibold">- Client C</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 sm:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">About Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {["Alice", "Bob", "Charlie", "Diana"].map((name, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src={`/team/${name.toLowerCase()}.jpg`}
                  alt={`${name} profile`}
                  width={100}
                  height={100}
                  className="mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-sm">
                  {name} is an expert in innovative solutions and a valued
                  member of our team.
                </p>
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
            Join countless businesses that trust StartupName to achieve their
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
