// src/app/courses/[id]/page.tsx
import LessonDetailClient from "./LessonDetailClient";

// Ensure that the params structure matches what Next.js expects
export const generateStaticParams = async () => {
  const courseIds = ["1", "2", "3"];
  return courseIds.map((id) => ({ id }));
};

// Component definition
const LessonDetailPage = ({ params }: { params: { id: string } }) => {
  const courseDetails: Record<
    string,
    { title: string; description: string; steps: string[]; arFeature: string }
  > = {
    1: {
      title: "Basic First Aid",
      description: "Learn how to handle common emergencies with this essential guide.",
      steps: [
        "Assess the situation for safety.",
        "Check for responsiveness.",
        "Call emergency services.",
        "Provide first aid until help arrives.",
      ],
      arFeature: "Use your camera to view a 3D model of the recovery position.",
    },
    2: {
      title: "CPR Training",
      description: "Learn how to perform CPR effectively with hands-on guidance.",
      steps: [
        "Place the person on a firm surface.",
        "Kneel beside them and interlock your hands.",
        "Perform chest compressions at a depth of 2 inches.",
        "Continue until emergency services arrive.",
      ],
      arFeature: "Use your camera to practice CPR on a 3D virtual model.",
    },
    3: {
      title: "Wound Care",
      description: "Understand how to clean, dress, and treat wounds effectively.",
      steps: [
        "Stop the bleeding with pressure.",
        "Clean the wound with sterile water.",
        "Apply an antiseptic solution.",
        "Dress the wound securely with a bandage.",
      ],
      arFeature: "View a 3D model of wound dressing techniques.",
    },
  };

  const course = courseDetails[params.id];

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <LessonDetailClient
      title={course.title}
      description={course.description}
      steps={course.steps}
      arFeature={course.arFeature}
    />
  );
};

export default LessonDetailPage;
