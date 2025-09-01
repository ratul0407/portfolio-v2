import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="bg-black min-h-screen text-white">
      <h1>ProjectDetails</h1>
    </div>
  );
};

export default ProjectDetails;
