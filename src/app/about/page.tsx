// app/about/page.tsx
import Image from "next/image";

const AboutPage = () => {
  return (
    <section id="about" className="py-16 px-8 sm:px-20 bg-gradient-to-b from-indigo-100 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Introduction Section */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-indigo-900 mb-4 animate-fadeIn">
            About Blue Feather
          </h2>
          <p className="text-lg sm:text-xl text-indigo-700 leading-relaxed">
            At Blue Feather, we are a team of innovators, creators, and visionaries
            dedicated to making a difference. Our leadership drives excellence
            in every project, empowering us to build cutting-edge platforms and
            deliver impactful solutions.
          </p>
        </div>

        {/* Team Members Section */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {[
            {
              name: "Francheska",
              description:
                "Francheska - COO, supporting the team by offering insights and suggestions.",
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
            <div
              key={index}
              className="p-6 bg-white shadow-xl rounded-lg hover:shadow-2xl transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={`/bluefeather/team/${member.name}.jpg`}
                  alt={`${member.name} profile`}
                  className="rounded-full object-cover border-4 border-blue-300"
                  fill // Automatically fills the parent container
                />
              </div>
              <h3 className="text-xl font-semibold text-indigo-800">{member.name}</h3>
              <p className="text-sm text-indigo-600 mt-2">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-12">
          <p className="text-lg text-indigo-700">
            Interested in working with us?{" "}
            <a
              href="#contact"
              className="text-blue-500 font-bold hover:underline"
            >
              Get in touch!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
