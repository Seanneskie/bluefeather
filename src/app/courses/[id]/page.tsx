import LessonDetailClient from "./LessonDetailClient";
import courseDetails from "./courseDetails.json"; // Assuming course details are in a JSON file

// Define available course IDs for static generation
export const generateStaticParams = async () => {
  const courseIds = Object.keys(courseDetails); // Fetch all course IDs dynamically from JSON
  return courseIds.map((id) => ({ id }));
};

// Component definition
const LessonDetailPage = ({ params }: { params: { id: string } }) => {
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
